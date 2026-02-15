import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const totalStars = 5;

  return (
    <div className="puzzle-section">
      <h2>Challenge 03: Star Rating</h2>
      <p>Interactive star rating component with hover effect.</p>
      
      <div style={{ fontSize: '40px', cursor: 'pointer' }}>
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              style={{
                color: starValue <= (hover || rating) ? '#ffc107' : '#ddd',
                transition: 'color 0.2s',
              }}
            >
              ★
            </span>
          );
        })}
      </div>
      
      <p style={{ marginTop: '15px' }}>
        {rating ? `You rated ${rating} star${rating !== 1 ? 's' : ''}` : 'Click to rate'}
      </p>
      
      <h3>Requirements:</h3>
      <ul style={{ marginLeft: '20px' }}>
        <li>Display 5 clickable stars</li>
        <li>Click to set rating</li>
        <li>Hover to preview rating</li>
        <li>Show current rating text</li>
      </ul>
    </div>
  );
}
