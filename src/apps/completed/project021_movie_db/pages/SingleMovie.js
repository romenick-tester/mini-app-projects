import React from "react";
import { Link } from "react-router-dom";
import { noImage } from "../assets/context";
import useFetch from "../assets/useFetch";

const SingleMovie = ({ match }) => {
  const movieID = match.params.id;

  const { loading, error, data: movie } = useFetch(`&i=${movieID}`);

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
