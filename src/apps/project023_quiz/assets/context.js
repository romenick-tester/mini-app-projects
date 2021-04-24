import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = "https://opentdb.com/api.php?";

//const tempURL = `${API_ENDPOINT}amount=10&category=21&difficulty=easy&type=multiple`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [quiz, setQuiz] = useState({ amount: 10, category: "sports", difficulty: "easy" });
  
  const fetchQuestions = async function(url) {
    setLoading(true);
    setWaiting(false);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if(data && data.results.length > 0) {
        setQuestions(data.results);
        setError(false);
        setLoading(false);
        setWaiting(false); //must switch to true later
      } else {
        setWaiting(true);
        setError(true);
      }
    } catch (err) {
      console.error(err.message);
      setError(true);
      setLoading(false);
      setWaiting(true);
    }
  };

  const nextQuestion = function() {
    setIndex((currentValue) => {
      let index = currentValue + 1;
      if(index > questions.length - 1) {
        index = 0;
        openModal();
      }
      return index;
    })
  }

  const checkAnswer = function(value) {
    if(value) {
      setCorrect((currentValue) => currentValue + 1)
    }
    nextQuestion();
  }

  const openModal = function(){
    setModal(true);
  };
  
  const closeModal = function(){
    setWaiting(true);
    setCorrect(0);
    setModal(false);
  };

  const handleChange = function(e) {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    fetchQuestions(url);
  };

  const values = {
    waiting, loading, questions, index, correct, error, modal, quiz,
    nextQuestion, checkAnswer, closeModal, handleChange, handleSubmit };
  return (
    <AppContext.Provider value={{...values}}>{children}</AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext)
};

export { useGlobalContext, AppProvider }
