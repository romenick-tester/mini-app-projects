import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import "./index.css";

const url = 'https://course-api.com/react-tabs-project';

function Tabs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState({});
  const [value, setValue] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(jobs);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">

      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>


      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button key={index} onClick={() => setValue(index)} className={`job-btn ${index === value && "active-btn"}`}>
                {job.company}
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>

    </section>
  );
}

export default Tabs;
