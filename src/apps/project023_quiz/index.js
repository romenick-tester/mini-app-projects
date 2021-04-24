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
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if(waiting) {
    return <SetupForm />
  }

  if(loading) {
    return <Loading />
  }

  const { correct_answer, incorrect_answers, question } = questions[index];
  return (
    <>
      <h2>quiz starter</h2>
    </>
  )
}

export default Quiz;
