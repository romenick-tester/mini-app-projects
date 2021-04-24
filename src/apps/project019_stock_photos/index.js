import React, { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

import "./assets/index.css";

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const fetchImages = useCallback(async () => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    let url;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setPhotos((state) => {
          if (query && page === 1) {
            return data.results;
          } else if (query) {
            return [...state, ...data.results];
          } else {
            return [...state, ...data]
          }
        });
      } else {
        setPhotos([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, [page, query])

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 5 && !loading) {
        setPage((state) => {
          return state + 1;
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    }
  }, [loading]);

  function handleSubmit(e) {
    e.preventDefault();
    setPage(1);
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit} >
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={photo.id + index} {...photo} />
          })}
        </div>
        {loading && <h2 className="loading">loading...</h2>}
      </section>
    </main>
  )
}

export default App;
