import React from "react";
import { useGlobalContext } from "./assets/context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>setup quiz</h2>
        {/* amount */}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input 
            type="number"
            min={3}
            max={50}
            className="form-input" 
            name="amount" 
            id="amount" 
            value={quiz.amount} 
            onChange={handleChange}
          />
        </div>
        {/* category */}
        <div className="form-control">
          <label htmlFor="category">select category</label>
          <select 
            className="form-input" 
            name="category"
            id="category" 
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="politics">politics</option>
            <option value="history">history</option>
          </select>
        </div>
        {/* difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select 
            className="form-input" 
            name="difficulty"
            id="difficulty" 
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && <p className="error">cannot generate questions, please try different option.</p>}
        <button type="submit" onClick={handleSubmit} className="submit-btn">start</button>
      </form>
    </section>
  )
}

export default SetupForm;
