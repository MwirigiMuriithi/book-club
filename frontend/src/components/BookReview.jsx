// Review.jsx
import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="review">
            <h3 className="review-title">{review.title}</h3>
            <p className="review-author">Author: {review.author}</p>
            <p className="review-content">{review.content}</p>
        </div>
    );
};

export default Review;