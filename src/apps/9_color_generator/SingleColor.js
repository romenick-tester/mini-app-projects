import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const { rgb, weight, hex } = color;

  const bgColor = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const alerT = setTimeout(() => {
      setAlert(false);
    }, 3000)
    return () => {
      clearTimeout(alerT);
    }
  }, [alert]);

  function clickHandler() {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={clickHandler}>

      <p className="percent-value">{weight}%</p>

      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert">copied to clipboard</p>}

    </article>
  )
}

export default SingleColor;
