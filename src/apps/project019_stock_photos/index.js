import React, { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

import "./assets/index.css";

const mainUrl = `https://api.unsplash.com/photos/`
//const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    let urlPage = `&page=${page}`
    let url = `${mainUrl}${clientID}${urlPage}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setPhotos((state) => {
          return [...state, ...data]
        });
      } else {
        setPhotos([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, [page])

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
  }, [loading, page]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" className="form-input" placeholder="search" />
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
