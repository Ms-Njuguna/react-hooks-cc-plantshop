import React from "react";

function Search({onSearch, search}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
