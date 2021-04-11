import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour, resetHandler }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.length === 0 && <div><h3>No tours left... <button className="btn" onClick={() => resetHandler()}>refresh</button></h3></div>}
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} details={tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  );
};

export default Tours;
