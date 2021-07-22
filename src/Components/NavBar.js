import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
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

import Dropdown from "./Dropdown";
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
                to="/Contacto"
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

export default NavBar;
