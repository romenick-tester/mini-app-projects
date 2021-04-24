import React from "react";
import phoneImg from "../assets/images/phone.svg";
import { useGlobalContext } from "../assets/context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolor ipsam rerum, minus adipisci      commodi! Quibusdam cupiditate id vero corporis!
          </p>
          <button className="btn">
            start now
          </button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero;
