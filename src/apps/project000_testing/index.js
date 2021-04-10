import React from 'react';
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import "./index.css";

function Test() {
    const people = data;

    return (
        <section className="section">
            {people.map((person) => {
                const { id, name, image, title, quote } = person;
                return (
                    <article key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                )
            })}
        </section>
    )
}

export default Test;
