import React from "react";
import "./header.css";
import headerImage from "../assets/header-image.jpeg"

const navItems = ["Home", "Favorites"];

const Header = ({ changeView }) => (
    <header>
      <div className="image-container">
        <img class="header-img" src={headerImage} alt="plates of food" />
        <div class="centered">Recipe Finder</div>
      </div>

      <div className="top-right">
      {navItems.map(item => (
        <div className="nav-list-item" onClick={changeView}>
          {item}
        </div>
      ))}
    </div>

    </header>
)

export default Header;