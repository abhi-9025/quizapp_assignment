import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__container">
      <Link to="/" className="header__title">Interactive Quiz App</Link>
      <hr className="header__hr"/>
    </div>
  );
};

export default Header;
