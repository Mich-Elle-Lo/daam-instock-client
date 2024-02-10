import "./Header.scss";
import { useState } from "react";
import logo from "../../Assets/Logo/InStock-Logo.svg";
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActiveExact = (path) => {
    return location.pathname === path;
  };

  const isActiveIncludes = (keyword) => {
    return location.pathname.includes(keyword);
  };

  const getClassName = (exactPath, keyword) => {
    if (exactPath && isActiveExact(exactPath)) {
      return "header__nav-item header__nav-item--active";
    } else if (keyword && isActiveIncludes(keyword)) {
      return "header__nav-item header__nav-item--active";
    }
    return "header__nav-item";
=======
import { Link } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState("warehouses");

  const handleLinkClick = (link) => {
    setActiveLink(link);
>>>>>>> develop
  };

  return (
    <header className="header">
<<<<<<< HEAD
      <div className="header__logo">
        <Link className="header__link" to="/">
          <img src={logo} alt="InStock Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className={getClassName("/", "warehouse")}>
            <Link className="header__nav-link" to="/">
              Warehouses
            </Link>
          </li>
          <li className={getClassName(null, "inventories")}>
            <Link className="header__nav-link" to="/inventories">
              Inventory
            </Link>
          </li>
=======
      <Link to="/" className="header__logo">
        <img src={logo} alt="InStock Logo" />
      </Link>
      <nav>
        <ul className="header__nav-list">
          <Link
            to="/"
            className={`header__nav-item ${
              activeLink === "warehouses" ? "header__nav-item--clicked" : ""
            }`}
            onClick={() => handleLinkClick("warehouses")}
          >
            <li>Warehouses</li>
          </Link>
          <Link
            to="/inventories"
            className={`header__nav-item ${
              activeLink === "inventories" ? "header__nav-item--clicked" : ""
            }`}
            onClick={() => handleLinkClick("inventories")}
          >
            <li>Inventory</li>
          </Link>
>>>>>>> develop
        </ul>
      </nav>
    </header>
  );
}
