import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempURL = `${API_ENDPOINT}amount=10&category=21&difficulty=easy&type=multiple`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  
  const fetchQuestions = async function() {
    setLoading(true);
    setWaiting(false);

    try {
      const res = await fetch(tempURL);
      const data = await res.json();

      if(data && data.results.length > 0) {
        setQuestions(data.results);
        setError(false);
        setLoading(false);
        setWaiting(true);
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

  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const values = { waiting, loading, questions, index, correct, error, modal };
  return (
    <AppContext.Provider value={{...values}}>{children}</AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext)
};

export { useGlobalContext, AppProvider }
