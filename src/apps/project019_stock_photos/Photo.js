import React from "react";

const Photo = (props) => {
  const { alt_description, likes, urls: { regular }, user } = props;
  const { name, portfolio_url, profile_image: { medium } } = user;

  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <h4>{name}</h4>
        <p>{likes} likes</p>
      </div>
      <a href={portfolio_url}>
        <img src={medium} alt={name} className="user-img" />
      </a>
    </article>
  )
}

export default Photo;
