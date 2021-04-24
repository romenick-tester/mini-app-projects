import React from "react";
import { AppProvider, useGlobalContext } from "./assets/context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

import "./assets/index.css";

function Quiz() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
    )
};

function Index() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

  if(waiting) {
    return <SetupForm />
  }

  if(loading) {
    return <Loading />
  }

  const { correct_answer, incorrect_answers, question } = questions[index];
  //const answers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];

  const tempIndex = Math.floor(Math.random() * (incorrect_answers.length+1));
  
  if(tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">correct answers : {correct} / {index}</p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button 
                  key={index} 
                  className="answer-btn"
                  onClick={() => checkAnswer(answer === correct_answer)} 
                  dangerouslySetInnerHTML={{__html: answer}} 
                />
              )
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>next question</button>
      </section>
    </main>
  )
}

export default Quiz;
