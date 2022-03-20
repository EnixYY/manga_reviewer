import React from "react";
import HeroImage from "./HeroImage";

const ContainerHeroImage = (props) => {
  const allHeroImg = props.imgSrc.map((data) => {
    return (
      <HeroImage
        key={data.mal_id}
        img={
          data.images.webp.large_image_url
            ? data.images.webp.large_image_url
            : "https://cdn.browshot.com/static/images/not-found.png"
        }
        link={data.url}
      />
    );
  });

  return <div>{allHeroImg}</div>;
};

export default ContainerHeroImage;
