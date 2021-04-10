import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

import "./index.css";

function ColorGenerator() {
  const defaultColor = new Values("#800080").all(10);
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [palettes, setPalettes] = useState(defaultColor);

  function submitHandler(e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);

      setPalettes(colors);

    } catch (error) {
      setError(true);

      console.error(error.message);
    }
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
            placeholder="#800080"
            className={error ? "error" : null} />

          <button className="btn" type="submit">submit</button>

        </form>

      </section>

      <section className="colors">
        {palettes.map((color, index) => <SingleColor key={index} color={color} index={index} />)}
      </section>
    </>
  )
}

export default ColorGenerator;
