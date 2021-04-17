import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

import "./assets/index.css";

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
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
        console.log(data);
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

  if (loading) {
    return <h2>loading...</h2>
  }

  return (
    <h2>stock photos starter</h2>
  )
}

export default App;
