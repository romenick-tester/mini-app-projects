import React from "react";
import moment from "moment";

const Article = ({ title, snippet, date, length }) => {

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd MMM Do, YYYY")} ({moment(date).fromNow()})</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article;

// dd Do, YYYY = Su 4th, 2020
// ddd Do, YYYY = Sun 4th, 2020
// MMMM dddd Do, YYYY = October Sunday 4th, 2020