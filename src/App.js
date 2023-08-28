import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar"; // Import your Navbar component
import Posts from "./components/Posts"; // Import your Section component
import LoginForm from "./components/LoginForm"; // Import your LoginForm component
import AboutUs from "./components/AboutUs"; // Import your AboutUs component

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <Posts searchQuery={searchQuery} />
      {/* <! -- <LoginForm /> a--> */}
      <AboutUs />
    </div>
  );
};

export default App;
