import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const BooksSection = () => {
  const [sectionRef, isVisible] = useScrollReveal();
  const books = [
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
  ];

  return (
    <section ref={sectionRef} id="books" className="books-section">
      <div className="container books-container">
        <h2 className={`books-title reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Buy Our Books</h2>
        <p className={`books-desc reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>Explore our collection of expertly curated books designed to simplify complex topics and strengthen your exam preparation. Each book is carefully structured with clear explanations, important concepts, and practice questions to help you build a strong foundation and improve your understanding of every subject.</p>

        <div className={`books-carousel-wrapper reveal-blur delay-200 ${isVisible ? 'reveal-visible' : ''}`}
          onMouseEnter={(e) => e.currentTarget.querySelector('.books-track').classList.add('paused')}
          onMouseLeave={(e) => e.currentTarget.querySelector('.books-track').classList.remove('paused')}>
          <div className="books-track">
            {/* Tripling the array for seamless infinite-feeling scroll */}
            {[...books, ...books, ...books].map((book, idx) => (
              <div key={idx} className="book-card-new">
                <div className="book-img-wrapper">
                  <img src={book.img} alt={book.title} />
                </div>
                <h4 className="book-title-new">{book.title}</h4>
                <p className="book-price-new">{book.price}</p>
                <div className="book-btns-new">
                  <button className="btn-buy-new">Buy Now</button>
                  <button className="btn-cart-new">Add To cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;

