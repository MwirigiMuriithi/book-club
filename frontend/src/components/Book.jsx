import React from 'react';
import bookImages from '../assets/constants';

const Book = ({ book }) => {
    const imagePath = bookImages[book.id] || '/path/to/default-image.jpg'; // Fallback if image path is not found

    return (
        <div className="book">
            <img src={imagePath} alt={book.title} className="book-image" />
            <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Author: {book.author}</p>
                <p className="book-genre">Genre: {book.genre}</p>
                <p className="book-description">{book.description}</p>
            </div>
        </div>
    );
};

export default Book;



