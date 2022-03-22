import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  return (
    <div className={styles.searchresult}>
      <img src={props.img} />
      <br />
      <p>{props.name}</p>
      <a href={props.link}>Click for more reviews!</a>
    </div>
  );
};

export default SearchResult;
