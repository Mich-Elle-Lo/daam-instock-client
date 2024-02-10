import "./Header.scss";
import { useState, useEffect } from "react";
import logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState("warehouses");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveLink("warehouses");
    } else if (pathname === "/inventories") {
      setActiveLink("inventories");
    }
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
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
        </ul>
      </nav>
    </header>
  );
}
