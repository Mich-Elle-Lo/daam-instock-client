import "./Header.scss";
import logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="header__logo">
//         <img src={logo} alt="InStock Logo" />
//       </div>
//       <nav>
//         <ul className="header__nav-list">
//           <li className="header__nav-item">
//             <a href="/">Warehouses </a>
//           </li>

//           <li className="header__nav-item">
//             <a href="/inventories">Inventory </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="InStock Logo" />
      </div>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">Warehouses</Link>
          </li>

          <li className="header__nav-item">
            <Link to="/inventories">Inventory</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
