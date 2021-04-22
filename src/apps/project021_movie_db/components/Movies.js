import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext, noImage } from "../assets/context";

const Movies = () => {
  const { loading, movies } = useGlobalContext();

  if(loading) {
    return <div className="loading"></div>
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}?title=${title}`} key={id} className="movie" >
            <article>
              <img src={poster === "N/A" ? noImage : poster} alt={title}/>
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies;
