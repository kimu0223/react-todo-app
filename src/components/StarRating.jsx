import React from 'react';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            className={ratingValue <= rating ? 'on' : 'off'}
            onClick={() => setRating && setRating(ratingValue)}
            style={{ cursor: setRating ? 'pointer' : 'default' }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
