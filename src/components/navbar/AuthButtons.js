import React from "react";
import "../../styles/styles.css";
function AuthButtons() {
  return (
    <>
      <div>
        <a className="navbar-item navbar-login" href="login_page.html">
          Login
        </a>
        <a className="navbar-item navbar-sign-up" href="#">
          Sign Up
        </a>
      </div>
      <div id="postButtonContainer">
        <a href="posting_page.html" class="post-button">
          <span>+</span>
        </a>
      </div>
    </>
  );
}

export default AuthButtons;
