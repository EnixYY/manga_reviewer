import React from "react";

const SearchResult = (props) => {
  return (
    <div>
      <img src={props.img} />
      <a href={props.link}>{props.name}</a>
    </div>
  );
};

export default SearchResult;
