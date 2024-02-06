import "./Header.scss";
import logo from "../../Assets/Logo/InStock-Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="InStock Logo" />
      </div>
      <nav>
        <ul className="header__nav-list">
          <button className="header__nav-item header__nav-item--active">
            <li>Warehouses</li>
          </button>
          <button className="header__nav-item">
            <li>Inventory</li>
          </button>
        </ul>
      </nav>
    </header>
  );
}
