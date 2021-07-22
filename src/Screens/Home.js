import React from "react";
import "./Home.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Images/naturaleza.jpg";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const Home = () => {
  return (
    <>
      <div className="container-inicio">
        <h1>RENOVEMOS COLOMBIA JUNTOS</h1>

        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
          aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
          pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet
          nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at
          porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
          egestas ligula. Curabitur vehicula tellus neque, ac ornare ex
          malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
          Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
          pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
          quam nec lacus varius commodo et a urna. Ut id ornare felis, eget
          fermentum sapien.
        </p>

        <p>
          Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
          malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
          facilisis sed est. Nam id risus quis ante semper consectetur eget
          aliquam lorem. Vivamus tristique elit dolor, sed pretium metus
          suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu
          urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt
          eget purus in interdum. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
      </div>

      <div className="contenedor-logo">
        <div className="logo-1">
          <img src={logo} alt="logo"></img>
          <div class="texto-encima">UNIDOS MARCAMOS LA DIFERENCIA</div>
        </div>
      </div>

      {/*SOCIAL FEED*/}
      <div className="twitter">
        <p> Social Feed</p>
        <TwitterTimelineEmbed
          sourceType="profile"
          // The preferred screen name goes next:
          screenName="MartinSantosR"
          // Style options goes here:
          options={{ height: 600, width: 400 }}
        />
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

export default Home;
