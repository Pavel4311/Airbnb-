import { useState } from "react";
import menuIcon from "./nav.svg";
import "./style.scss";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="image-menu">
      <img src={menuIcon} alt="" className="menu-image" onClick={toogleMenu} />
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#home" onClick={closeMenu} className="link_menu">
              Главная
            </a>
          </li>
          <li>
            <button onClick={closeMenu} className="link_menu">
              <Link to="/Form">Регистрация</Link>
            </button>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="link_menu">
              Наши контакты
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Menu;
