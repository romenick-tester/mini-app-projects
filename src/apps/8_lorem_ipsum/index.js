import React, { useState } from 'react';
import data from './data';

import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(count);
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem-ipsum</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount"> paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fuga!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fuga!</p>
      </article>
    </section>
  )
}

export default App;
