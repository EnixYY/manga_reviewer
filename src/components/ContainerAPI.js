import React, { useState, useEffect } from "react";
import ContainerRecommendations from "./ContainerRecommendations";
import ContainerHeroImage from "./ContainerHeroImage";
import NavBar from "./Navbar";

const ContainerAPI = () => {
  const [heroImage, setHeroImage] = useState([]);
  const [postData, setPostData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroImage = async () => {
    const url = "https://api.jikan.moe/v4/top/manga";
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      const heroImageData = await res.json();
      console.log(heroImageData.data.slice(0, 3));

      setHeroImage(heroImageData.data.slice(0, 3));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const fetchPostImage = async () => {
    const url = `https://api.jikan.moe/v4/manga/${randomInt()}/recommendations`;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      const postData = await response.json();
      console.log(postData.data.splice(0, 5));

      setPostData(postData.data.splice(0, 5));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHeroImage();
    fetchPostImage();
  }, []);

  const randomInt = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
  };

  // let content = "";
  // if (heroImage) {
  //   content = <></>;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>loading</p>;
  // }

  return (
    <div>
      <ContainerHeroImage imgSrc={heroImage} />
      <NavBar />
      <ContainerRecommendations allPostData={postData} />
    </div>
  );
};

export default ContainerAPI;
