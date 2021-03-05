import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';

function Tabs() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState({});
  const [value, setValue] = useState(0);

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

  return (
    <section className="section">

    </section>
  );
}

export default Tabs;
