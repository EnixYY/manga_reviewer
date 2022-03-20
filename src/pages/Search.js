import React, { useState } from "react";
import ContainerSearchResult from "../components/ContainerSearchResult";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearch = async (event) => {
    event.preventDefault();
    const url = `https://api.jikan.moe/v4/manga?q=${input}`;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setSearchData(data.data);
      setInput("");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div>
        <ContainerSearchResult
          resultData={searchData}
          handleSearch={fetchSearch}
          handleChange={handleInput}
          inputValue={input}
        />
      </div>
    </>
  );
};

export default Search;
