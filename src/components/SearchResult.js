import React from "react";

const SearchResult = (props) => {
  return (
    <>
      <img src={props.img} />
      <p>{props.name}</p>
    </>
  );
};

export default SearchResult;
