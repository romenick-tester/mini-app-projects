import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

import "./index.css";

function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [palettes, setPalettes] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log("hello");
  }

  return (
    <>
      <section className="container">

        <h3>color generator</h3>

        <form onSubmit={submitHandler}>

          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025" />

          <button className="btn" type="submit">submit</button>

        </form>

      </section>

      <section className="colors">

        <h4>List goes here...</h4>

      </section>
    </>
  )
}

export default ColorGenerator;
