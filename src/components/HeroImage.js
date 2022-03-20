import React from "react";

const HeroImage = (props) => {
  return (
    <>
      <a href={props.link}>
        <img src={props.img} alt="Manga Image" />
      </a>
    </>
  );
};

export default HeroImage;
