import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINT, noImage } from "../assets/context";

const SingleMovie = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({show: false, msg: ""});

  const movieID = match.params.id;

  const fetchMovie = async function() {
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINT}&i=${movieID}`);
      const data = await res.json();

      if(data.Response === "True") {
        setMovie(data);
        setError({show: false, msg: ""});
      } else {
        setMovie({});
        setError({ show: true, msg: data.Error });
      }

      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError({ show: true, msg: err.message });
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, [movieID]);

  if(loading) {
    return <div className="loading"></div>
  }

  if(error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">back to movies</Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster === "N/A" ? noImage : poster } alt={title}/>
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">back to movies</Link>
      </div>
    </section>
  )
}

export default SingleMovie;
