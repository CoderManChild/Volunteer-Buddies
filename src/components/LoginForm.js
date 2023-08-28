// src/components/LoginForm.js
import React from "react";
import "../styles/login_styles.css";
const LoginForm = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login to VolunteerBuddies</h2>
      <form className="login-form" id="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Username"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="create-account-link">
        Don't have an account? <a href="signup_page.html">Create one here</a>
      </div>
    </div>
  );
};

export default LoginForm;
