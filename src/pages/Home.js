import React, { useState, useEffect } from "react";
import ContainerRecommendations from "../components/ContainerRecommendations";

const Home = () => {
  const [postData, setPostData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostImage = async () => {
    const url = `https://api.jikan.moe/v4/manga/${randomInt()}/recommendations`;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      const postData = await response.json();

      setPostData(postData.data.splice(0, 3));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPostImage();
  }, []);

  const randomInt = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
  };

  return (
    <div>
      <ContainerRecommendations allPostData={postData} />
    </div>
  );
};

export default Home;
