import React from "react";

const HeroImage = (props) => {
  return (
    <div className="card">
      <a href={props.link}>
        <img className="img" src={props.img} alt="Manga Image" />
      </a>
      <p className="rank">Rank {props.rank}</p>
      <p className="title">{props.title}</p>
    </div>
  );
};

export default HeroImage;
