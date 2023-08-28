import React from "react";
import "../../styles/styles.css";
function NavLinks() {
  return (
    <>
      <a className="navbar-item" href="index.html">
        Main Page
      </a>
      <a className="navbar-item">User Info</a>
      <a className="navbar-item" href="about_us.html">
        About Us
      </a>
    </>
  );
}

export default NavLinks;
