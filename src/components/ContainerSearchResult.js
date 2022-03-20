import React from "react";
import SearchResult from "./SearchResult";

const ContainerSearchResult = (props) => {
  const allResults = props.resultData.map((result) => {
    const hyperLink = `${result.url}/reviews`;
    return (
      <SearchResult
        key={result.mal_id}
        img={
          result.images.webp.image_url
            ? result.images.webp.image_url
            : "https://cdn.browshot.com/static/images/not-found.png"
        }
        name={result.title}
        link={hyperLink}
      />
    );
  });

  return (
    <>
      <form onSubmit={props.handleSearch}>
        <input
          value={props.inputValue}
          onChange={props.handleChange}
          placeholder="Enter your Manga here!"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>{allResults}</div>
    </>
  );
};

export default ContainerSearchResult;
