import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

import "./index.css";

function SliderV2() {
  const people = data;
  const [index, setIndex] = useState(0);

  function onClick(direction) {
    if (direction === "prev") {
      setIndex((state) => {
        let index = state - 1;
        if (index < 0) {
          index = people.length - 1;
        }
        return index;
      })
    }

    if (direction === "next") {
      setIndex((state) => {
        let index = state + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      })
    }
  }

  useEffect(() => {
    const x = setInterval(() => {
      setIndex((state) => {
        let index = state + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      })
    }, 3000);

    return () => {
      clearInterval(x);
    }
  }, [index, people]);

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = "lastSlide"
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => onClick("prev")}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => onClick("next")}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default SliderV2;
