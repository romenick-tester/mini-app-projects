import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const { rgb, weight, hex } = color;

  const bgColor = rgb.join(",");
  const hexValue = `#${hex}`;

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `rgb(${bgColor})` }} >

      <p className="percent-value">{weight}%</p>

      <p className="color-value">{hexValue}</p>

    </article>
  )
}

export default SingleColor
