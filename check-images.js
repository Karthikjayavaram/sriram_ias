const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const componentsDir = path.join(__dirname, 'src', 'components');

const checkImage = (url) => {
  return new Promise((resolve) => {
    if (url.startsWith('http')) {
      const client = url.startsWith('https') ? https : http;
      client.get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve({ url, status: 'OK' });
        } else {
          resolve({ url, status: `ERROR: ${res.statusCode}` });
        }
      }).on('error', (err) => {
        resolve({ url, status: `ERROR: ${err.message}` });
      });
    } else {
      // Local image
      const localPath = path.join(__dirname, 'public', url);
      if (fs.existsSync(localPath)) {
        resolve({ url, status: 'OK' });
      } else {
        resolve({ url, status: `ERROR: File not found` });
      }
    }
  });
};

const extractUrls = (content) => {
  const matches = content.match(/img:\s*['"]([^'"]+)['"]/g) || [];
  const urls = matches.map(m => m.replace(/img:\s*['"]/, '').replace(/['"]$/, ''));

  const imgMatches = content.match(/<img\s.*?src=['"]([^'"]+)['"]/g) || [];
  const imgUrls = imgMatches.map(m => m.match(/src=['"]([^'"]+)['"]/)[1]);
  
  return [...new Set([...urls, ...imgUrls])].filter(url => !url.includes('{'));
};

const runAudit = async () => {
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
  const allUrls = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
    allUrls.push(...extractUrls(content));
  }

  const uniqueUrls = [...new Set(allUrls)];
  console.log(`Found ${uniqueUrls.length} unique image URLs. Checking...`);

  const results = await Promise.all(uniqueUrls.map(checkImage));
  
  let hasErrors = false;
  results.forEach(res => {
    if (res.status === 'OK') {
      console.log(`[PASS] ${res.url}`);
    } else {
      console.log(`[FAIL] ${res.url} - ${res.status}`);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    console.log('\nSOME IMAGES FAILED TO LOAD.');
  } else {
    console.log('\nALL IMAGES LOADED SUCCESSFULLY.');
  }
};

runAudit();
