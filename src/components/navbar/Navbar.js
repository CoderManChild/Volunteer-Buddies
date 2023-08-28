// src/components/Navbar.js
import React from "react";
import "../../styles/styles.css";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
const Navbar = ({ searchQuery, onSearchQueryChange }) => {
  const handleSearchQueryChange = (newQuery) => {
    onSearchQueryChange(newQuery);
  };
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-container">
        <NavLinks />
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
      </div>
      <div className="search-input">
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Navbar;
