import React from "react";
import Carousel from "react-elastic-carousel";
import HeroImage from "../HeroImage";

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
        rank={data.rank}
        title={data.title}
      />
    );
  });

  //the width must include the white portion that is 120px. 60px each side.
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ];

  return <Carousel breakPoints={breakPoints}>{allHeroImg}</Carousel>;
};

export default ContainerHeroImage;
