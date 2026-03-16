// Global API client using fetch
const API_BASE = 'https://api.sriramsias.com';

export const apiClient = {
  get: (path) => fetch(`${API_BASE}${path}`).then(r => r.json()),
  post: (path, body) => fetch(`${API_BASE}${path}`, { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body) 
  }).then(r => r.json()),
};

export default apiClient;
