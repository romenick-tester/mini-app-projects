import React from 'react';
import { FaTimes } from "react-icons/fa";

const List = ({ people, removePerson }) => {

  return (
    <>
      {people.map((item) => {
        const { id, name, age, image } = item;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <div className="btn">
              <button onClick={() => removePerson(id)}><FaTimes /></button>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
