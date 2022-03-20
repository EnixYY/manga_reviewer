import React from "react";

const SearchResult = (props) => {
  return (
    <>
      <img src={props.img} />
      <a href={props.link}>{props.name}</a>
    </>
  );
};

export default SearchResult;
