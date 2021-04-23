import React from "react";
import { useGlobalContext } from "../assets/context";

const Stories = () => {
  const { loading, error, hits: stories, removeArticle } = useGlobalContext();

  if(loading) {
    return <div className="loading"></div>
  }

  function removeHandler(id) {
    removeArticle(id);
  }

  return (
    <section className="stories">
      {stories.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by <span>{author} | </span> {num_comments} comments</p> 
            <div>
              <a 
                href={url} 
                className="read-link" 
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button type="button" className="remove-btn" onClick={() => removeHandler(objectID)} >remove</button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories;
