import React from "react";
import HeaderQuotes from "./HeaderQuotes";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <HeaderQuotes />
        <div className="header-cta">
          <h1>LULU FITNES STUDIO</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
