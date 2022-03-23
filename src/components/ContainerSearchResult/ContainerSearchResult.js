import React from "react";
import SearchResult from "../SearchResult";
import styles from "./ContainerSearchResult.module.css";

const ContainerSearchResult = (props) => {
  const allResultsForButton = props.resultData.map((result) => {
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

  const allResultsForDrop = props.dropResultData.map((result) => {
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

  const handleDisplay = () => {
    if (props.handleButtonSearch) {
      return (
        <div className={styles.containersearchresult}>
          {allResultsForButton}
        </div>
      );
    }
    if (props.handleDropSearch) {
      return (
        <div className={styles.containersearchresult}>{allResultsForDrop}</div>
      );
    }
    // if (props.handleDropSearch && props.handleButtonSearch){
    //   const dataFilteredSearch = props.dropResultData.filter(function (data) {
    //     return (data.title = props.inputValue);
    //   });
    // }
  };

  return (
    <>
      <div className={styles.containersearchresult}>
        <form onSubmit={props.handleSearch}>
          <input
            value={props.inputValue}
            onChange={props.handleChange}
            placeholder="Enter your Manga here!"
          ></input>
          <button type="submit">Search</button>
          <select onChange={props.handleDropdownList}>
            <option value="">Choose a genre</option>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="30">Sports</option>
            <option value="4">Comedy</option>
            <option value="7">Mystery</option>
          </select>
        </form>
      </div>
      {handleDisplay()}
    </>
  );
};

export default ContainerSearchResult;
