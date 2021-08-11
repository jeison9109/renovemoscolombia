import React from "react";
import "./Historia.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";

const Historia = () => {
  return (
    <div className="efecto">
      <div className="row">
        <div className="column">
          <h2>Mision</h2>
          <p>
            Renovemos Colombia busca a través del ejercicio democrático, en
            desarrollo del derecho a la participación política, el derecho al
            trabajo, el derecho a la salud, el derecho a la educación, el
            derecho al desarrollo del campo y al disfrute de un medio ambiente
            sostenible desde una ecología integral, animalista, y así fortalecer
            la administración pública e impulsar el desarrollo económico, social
            y cultural, basados en los principios de la confianza, la
            cooperación, la fraternidad, la libertad, la inclusión y la igualdad
          </p>
        </div>

        <div className="column">
          <h2>Historia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
            eget elementum magna tristique. Quisque vehicula, risus eget aliquam
            placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
            Praesent scelerisque tortor sed accumsan convallis.
          </p>
        </div>

        <div className="column">
          <h2>Vision</h2>
          <p>
            En el 2024, Renovemos Colombia tendrá un posicionamiento como
            alternativa de poder, con representación a nivel municipal,
            departamental y nacional, en el Congreso de la República, aportará
            de manera con la finalidad de transformar significativamente a la
            transformación de un mejor al país, fortaleciendo y generando nuevas
            propuestas que permitan la su consolidación desde desarrollo
            político, económico, social y cultural. de nuestro país.
          </p>
        </div>
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

export default Historia;
