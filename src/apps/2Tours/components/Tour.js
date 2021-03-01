import React, { useState } from 'react';

const Tour = ({ details, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  const { id, name, image, price, info } = details;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {showMore ? info : info.substring(0, 100)}
          <button onClick={() => setShowMore(!showMore)}>...read more</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
};

export default Tour;
