import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
//import "./NavBar.css";
import "./NavBar2.css";
import logo from "../Images/logo.jpg";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faList,
  faUsers,
  faAddressBook,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const NavBar = () => {
  const [isMenu, setisMenu] = useState(false);

  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <>
      <div className="header1"></div>
      <div className="header1"></div>
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiXCircle />{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiAlignRight />{" "}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <div className="menu-item1">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </a>

                    <a href="https://www.facebook.com/Renovemos-Colombia-148371330712136/">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </a>

                    <a href="">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </a>

                    <a href="">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </a>
                  </div>
                  <li className="menu-item">
                    <NavLink
                      exact
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to={`/`}
                    >
                      {" "}
                      Inicio{" "}
                    </NavLink>
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/LideresJuveniles`}
                    >
                      {" "}
                      Lideres Juveniles{" "}
                    </NavLink>{" "}
                  </li>
                  <li
                    onClick={toggleSubmenu}
                    className="menu-item sub__menus__arrows"
                  >
                    {" "}
                    <Link to="#">
                      {" "}
                      Quienes Somos <FiChevronDown />{" "}
                    </Link>
                    <ul className={boxClassSubMenu.join(" ")}>
                      <li>
                        {" "}
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/Historia`}
                        >
                          {" "}
                          Historia{" "}
                        </NavLink>{" "}
                      </li>

                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/DireccionNacional`}
                        >
                          {" "}
                          Direccion Nacional{" "}
                        </NavLink>{" "}
                      </li>

                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/ValoresyPrincipios`}
                        >
                          {" "}
                          Valores y Principios{" "}
                        </NavLink>{" "}
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/Organigrama`}
                        >
                          {" "}
                          Organigrama{" "}
                        </NavLink>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Propuestas`}
                    >
                      {" "}
                      Propuestas{" "}
                    </NavLink>{" "}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/CandidatosNacional`}
                    >
                      {" "}
                      Candidatos{" "}
                    </NavLink>{" "}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to={`/Contacts`}
                    >
                      {" "}
                      Contactenos{" "}
                    </NavLink>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;

/*import Dropdown from "./Dropdown";
function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="header"></div>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </NavLink>
            </li>

            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a href="">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/Biografia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Quienes Somos
                <i className="fas fa-caret-down"></i>
              </NavLink>
              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/ApoyoSocial"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Apoyo Social
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/Propuestas"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Propuestas
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/Candidatos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Candidatos
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/LideresJuveniles"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Lideres Juveniles
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "0.9rem", color: "white" }}
                />
              </a>
              <NavLink
                to="/Contacts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contactenos
              </NavLink>
            </li>
            <div className="top-redes">
              <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              </a>

              <a href="https://www.facebook.com/jduc19/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              </a>

              <a href="https://www.instagram.com/jduc19/?hl=es-la">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              </a>

              <a href="https://www.instagram.com/jduc19/?hl=es-la">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "1.5rem", color: "white" }}
                />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;*/
