import React from 'react';
import data from "./source/data";
import SingleQuestion from './components/Question';
import "./source/index.css"

function Accordion() {
  const questions = data ? data : [{ info: "", title: "" }];

  return (
    <main>
      <div className="container">
        <h3>questions</h3>
        <section className="info">
          {questions.map((question, index) => {
            return <SingleQuestion key={index} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default Accordion;
