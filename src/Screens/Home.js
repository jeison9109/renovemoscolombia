import React from "react";
import "./styles/Home.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Images/naturaleza.jpg";
//import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import { Timeline } from "react-twitter-widgets";
import UncontrolledLottie1 from "../Components/UncontrolledLottie1";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";

const Home = () => {
  return (
    <div className="efecto">
      <div className="container-inicio efecto">
        <h1 className="animate__animated animate__heartBeat">
          RENOVEMOS COLOMBIA JUNTOS
        </h1>

        <p>
          {" "}
          Somos un movimiento político renovador, con pensamiento incluyente, en
          donde con las distintas posiciones ideológicas, religiosas, raciales,
          sociales, económicas y de género, podamos construir un nuevo proyecto
          de nación. Basados en la libertad de un pensamiento vanguardista y
          defensor incansable de los Derechos Constitucionales.
        </p>

        <p>
          Conformada por líderes empresariales, juventudes, campesinos,
          religiosos, culturales y sociales, libres e independientes, con
          vocación de participación política a nivel local, regional y nacional,
          como alternativa de pensamiento ideológico y participativo en
          Colombia.
        </p>
      </div>

      <div className="contenedor-logo">
        <div className="logo-1 efecto">
          <img src={logo} alt="logo"></img>
          <div class="texto-encima">
            {/* <p>UNIDOS MARCAMOS LA DIFERENCIA</p>*/}
          </div>
        </div>
      </div>

      {/*SOCIAL FEED*/}
      <div className="twitter efecto">
        <div className="titulo-twitter">
          <UncontrolledLottie1 />
          <h2> Social Feed </h2>
        </div>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "CamaraColombia" }}
          options={{ height: 800, width: 600, id: "profile: CamaraColombia" }}
        />
      </div>

      <div className="footer-1">
        <UncontrolledLottie2 />
        <p>Contactanos: Whatsapp +57 316 8215321</p>
        <p>Siguenos en nuestras redes sociales...</p>
        <div className="top-redes">
          <a href="">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: "1.5rem", color: "white" }}
            />
          </a>

          <a href="https://www.facebook.com/Renovemos-Colombia-148371330712136/">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "1.5rem", color: "white" }}
            />
          </a>

          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "1.5rem", color: "white" }}
            />
          </a>

          <a href="">
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

export default Home;
