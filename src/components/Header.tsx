import "../assets/css/Header.css";
import { useContext } from "react";
import { MenuContext } from "../context/menuContext";
import { Link } from "react-scroll";

import Logo from "../assets/images/logo.png";
import Bars from "../assets/images/bars.png";

const data = [
  { id: "Hero", title: "Home" },
  { id: "Programs", title: "Programs" },
  { id: "Reasons", title: "Why us?" },
  { id: "Plans", title: "Plans" },
  { id: "Test", title: "Testimonials" },
];

const Header = () => {
  const isMobile = window.innerWidth <= 768 ? true : false;

  const menuContext = useContext(MenuContext);
  const { menuOpen, setMenuOpen } = menuContext || {};

  return (
    <div className="header" id="Header">
      <img src={Logo} alt="logo" className="logo" />

      {menuOpen === false && isMobile ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (setMenuOpen) {
              setMenuOpen(true);
            }
          }}
          className="hamberger__icon"
        >
          <img src={Bars} alt="hamberger-menu" />
        </div>
      ) : (
        <ul className="header__menu" onClick={(e) => e.stopPropagation()}>
          {data.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                onClick={() => {
                  if (setMenuOpen) {
                    setMenuOpen(false);
                  }
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
