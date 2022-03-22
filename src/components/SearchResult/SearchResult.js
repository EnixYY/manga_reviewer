import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  return (
    <div className={styles.searchresult}>
      <img src={props.img} />
      <a href={props.link}>{props.name}</a>
    </div>
  );
};

export default SearchResult;
