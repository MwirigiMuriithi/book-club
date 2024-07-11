// HomePage.jsx
import React from 'react';
import Book from '../../components/Book';
import Review from '../../components/BookReview';
import BlogPost from '../../components/BlogPost';
import './Home.css'; // Import your CSS file for HomePage styling

const books = [
  { id: 1, title: 'Book Title 1', author: 'Author A', genre: 'Fantasy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Book Title 2', author: 'Author B', genre: 'Science Fiction', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  // Add more books as needed
];

const reviews = [
  { id: 1, title: 'Review of Book 1', author: 'Reviewer X', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Review of Book 2', author: 'Reviewer Y', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  // Add more reviews as needed
];

const blogPosts = [
  { id: 1, title: 'Blog Post 1', author: 'Author Z', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Blog Post 2', author: 'Author W', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  // Add more blog posts as needed
];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="section">
        <h2 className="section-title">Featured Books</h2>
        <div className="book-list">
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Latest Reviews</h2>
        <div className="review-list">
          {reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Recent Blog Posts</h2>
        <div className="blog-post-list">
          {blogPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

