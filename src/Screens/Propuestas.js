import React from "react";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";
import "./Propuestas.css";
import UncontrolledLottie3 from "../Components/UncontrolledLitte3";

const Propuestas = () => {
  return (
    <div className="efecto">
      <div className="titulo-1">
        <h1 className="animate__animated animate__heartBeat">OBJETIVOS DE RENOVEMOS COLOMBIA</h1>
        <p>
          Mi sueño es generar cambios económicos y sostenibles que nos incluyan
          y fortalezcan a todos los jóvenes. Tenemos que consolidar procesos de
          desarrollo local y regional que contribuyan a la construcción de la
          paz. Sueño con una sociedad donde los jóvenes entiendan que no somos
          el futuro sino el presente.
        </p>
        <UncontrolledLottie3 />
      </div>
      <div className="sub-titulo1">
        <h2>Medio Ambiente</h2>
        <p>Adaptarnos y reducir los efectos del cambio climatico</p>
        <h2>Salud y Educacion</h2>
        <p>Adaptarnos y reducir los efectos del cambio climatico</p>
        <h2>Empleo</h2>
        <p>Adaptarnos y reducir los efectos del cambio climatico</p>
        <h2>Equidad y oportunidad</h2>
        <p>Adaptarnos y reducir los efectos del cambio climatico</p>
        <h2>Sotenibilidad</h2>
        <p>Adaptarnos y reducir los efectos del cambio climatico</p>
      </div>

      <div className="footer-1">
        <UncontrolledLottie2 />
        <p>Contactanos: Whatsapp +57 300 123 4567</p>
        <p>Siguenos en nuestras redes sociales...</p>
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
      </div>
      <footer>
        <p>Renovemos Colombia</p>
        <p class="copyrigth">&copy;Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Propuestas;
