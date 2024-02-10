import "./Header.scss";
import logo from "../../Assets/Logo/InStock-Logo.svg";
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
        </ul>
      </nav>
    </header>
  );
}
