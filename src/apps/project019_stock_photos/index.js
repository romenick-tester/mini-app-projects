import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

import "./assets/index.css";

const mainUrl = `https://api.unsplash.com/photos/`
//const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([])

  async function fetchImages() {
    setLoading(true);
    let url = `${mainUrl}${clientID}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setPhotos(data)
      } else {
        setPhotos([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  if (loading) {
    return <h2>loading...</h2>
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
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />
          })}
        </div>
        {loading && <h2 className="loading">loading...</h2>}
      </section>
    </main>
  )
}

export default App;
