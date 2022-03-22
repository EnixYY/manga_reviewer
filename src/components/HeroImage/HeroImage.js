import React from "react";
import style from "./HeroImage.module.css";

const HeroImage = (props) => {
  return (
    <div className={style.card}>
      <a href={props.link}>
        <img src={props.img} alt="Manga Image" />
      </a>
      <p>Rank {props.rank}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default HeroImage;
