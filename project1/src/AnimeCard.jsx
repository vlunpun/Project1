import React from "react";

const AnimeCard = ({ image, title, genre, link }) => {
  return (
    <div className="anime-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{genre}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View More</button>
      </a>
    </div>
  );
};

export default AnimeCard;