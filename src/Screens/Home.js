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
      <div className="">
        <div className="">
          <UncontrolledLottie1 />
        </div>
        <div className="flexbox-container">
          <div className="container-tw">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Renovemos_Colom",
              }}
              options={{
                height: 500,
                width: 350,

                id: "profile: Renovemos_Colom",
              }}
            />
          </div>

          <div className="container-fb">
            <div
              className="fb-page container-fb"
              href="https://www.facebook.com/Gustavo-Guío-102950102099323/"
              tabs="timeline"
              width="350"
              height="500"
              small_header="true"
              adapt_container_width="false"
              data_hide_cover="true"
              data_show_facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/Gustavo-Guío-102950102099323/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/Gustavo-Guío-102950102099323/">
                  Renovemos Colombia
                </a>
              </blockquote>
            </div>
          </div>
        </div>
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

          <a href="">
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
