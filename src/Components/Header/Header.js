import "./Header.scss";
import logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getClassName = (path) => {
    return location.pathname === path
      ? "header__nav-item header__nav-item--active"
      : "header__nav-item";
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__link" to="/">
          <img src={logo} alt="InStock Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className={getClassName("/")}>
            <Link className="header__nav-link" to="/">
              Warehouses
            </Link>
          </li>
          <li className={getClassName("/inventories")}>
            <Link className="header__nav-link" to="/inventories">
              Inventory
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
