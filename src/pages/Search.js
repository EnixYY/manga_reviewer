import React, { useEffect, useState } from "react";
import ContainerSearchResult from "../components/ContainerSearchResult";

const Search = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDropData, setSearchDropData] = useState([]);
  const [hasButtonSearch, setHasButtonSearch] = useState(false);
  const [hasGenreSearch, setHasGenreSearch] = useState(false);

  const fetchSearchInput = async (event) => {
    event.preventDefault();
    const url = `https://api.jikan.moe/v4/manga?q=${input}`;
    const res = await fetch(url);
    const data = await res.json();

    setSearchData(data.data);
    setInput("");
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
      fetchSearchDropdownList();
      setHasButtonSearch(false);
    }
  }, [select]);

  return (
    <>
      <div>
        <ContainerSearchResult
          resultData={searchData}
          dropResultData={searchDropData}
          handleSearch={fetchSearchInput}
          handleChange={handleInput}
          handleDropdownList={handleSelect}
          inputValue={input}
          handleButtonSearch={hasButtonSearch}
          handleDropSearch={hasGenreSearch}
        />
      </div>
    </>
  );
};

export default Search;
