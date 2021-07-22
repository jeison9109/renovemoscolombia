import React from "react";
import "./Valoresyprincipios.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Valoresyprincipios = () => {
  return (
    <>
      <div className="container-2">
        <div className="card">
          <h2>Democracia Participativa</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>

        <div className="card">
          <h2>Responsabilidad Politica</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>

        <div className="card">
          <h2>Transparencia y lucha contra la corrupcion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
        <div className="card">
          <h2>Inclusion Social</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>

        <div className="card">
          <h2>Equidad y Austeridad</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis
            felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
            imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor
            cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
            vel, viverra egestas ligula.
          </p>
        </div>
      </div>
      <div className="footer-1">
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
    </>
  );
};

export default Valoresyprincipios;
