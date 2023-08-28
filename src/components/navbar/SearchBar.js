import React from "react";
import { Search } from "lucide-react";
import "../../styles/styles.css";

function SearchBar({ searchQuery, onSearchQueryChange }) {
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    onSearchQueryChange(newQuery);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search events"
          id="search-input"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {/* <Search className="searchButton" /> */}
        <button type="submit" id="search-button"></button>
      </form>
    </>
  );
}

export default SearchBar;
