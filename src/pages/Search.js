import React, { useEffect, useState } from "react";
import ContainerSearchResult from "../components/ContainerSearchResult";

const searchHeader = {
  textAlign: "center",
  textShadow: "0 0 3px white",
};

const Search = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDropData, setSearchDropData] = useState([]);
  const [hasButtonSearch, setHasButtonSearch] = useState(false);
  const [hasGenreSearch, setHasGenreSearch] = useState(false);
  const [dataFilteredSearch, setDataFilteredSearch] = useState([]);

  const fetchSearchInput = async () => {
    const url = `https://api.jikan.moe/v4/manga?q=${input}`;
    const res = await fetch(url);
    const data = await res.json();

    setSearchData(data.data);
    setInput("");
    setSelect("");
    setHasButtonSearch(true);
  };

  const fetchSearchDropdownList = async () => {
    const url = `https://api.jikan.moe/v4/manga?genres=${select}`;
    const res = await fetch(url);
    const data = await res.json();

    setSearchDropData(data.data);
    setHasGenreSearch(true);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    if (select.length) {
      console.log("hi");
      fetchSearchDropdownList();
      setHasButtonSearch(false);
    }
  }, [select]);

  const handleTwoState = (event) => {
    event.preventDefault();
    if (hasGenreSearch) {
      setHasButtonSearch(true);
      setSelect("");
      setDataFilteredSearch(
        searchDropData.filter(function (data) {
          return data.title.includes(input);
        })
      );
    } else {
      fetchSearchInput();
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setInput("");
    setSelect("");
    setHasButtonSearch(false);
    setHasGenreSearch(false);
  };

  return (
    <>
      <div>
        <h1 style={searchHeader}>Search</h1>
        <ContainerSearchResult
          resultData={searchData}
          dropResultData={searchDropData}
          resultDataFiltered={dataFilteredSearch}
          handleSearch={handleTwoState}
          handleChange={handleInput}
          handleDropdownList={handleSelect}
          inputValue={input}
          selectValue={select}
          handleReset={handleClick}
          handleButtonSearch={hasButtonSearch}
          handleDropSearch={hasGenreSearch}
        />
      </div>
    </>
  );
};

export default Search;
