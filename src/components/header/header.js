import React from "react";
import "./header.css";
import headerImage from "../assets/header-image.jpeg"

const navItems = ["Home", "Favorites"];

const Header = ({ viewChange }) => (
    <header>
      <div className="image-container">
        <img class="header-img" src={headerImage} alt="plates of food" />
        <div class="centered">Recipe Finder</div>
      </div>
    </header>
)

export default Header;