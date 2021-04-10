import React, { useState } from 'react';
import people from "../source/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  function checkNum(number) {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  function changePerson(direction) {
    if (direction === "prev") {
      setIndex((state) => {
        let newIndex = state - 1;
        return checkNum(newIndex);
      })
    } else {
      setIndex((state) => {
        let newIndex = state + 1;
        return checkNum(newIndex);
      });
    }
  }

  function randomPerson() {
    let randNum = Math.floor(Math.random() * people.length - 1);
    if (randNum === index) {
      randNum = index + 1;
    }
    setIndex(checkNum(randNum));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => changePerson("prev")}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => changePerson("next")}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        lottery
        </button>
    </article>
  )
};

export default Review;
