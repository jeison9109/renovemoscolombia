import React from "react";
import "./styles/Valoresyprincipios.css";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";

const Valoresyprincipios = () => {
  return (
    <>
      <div className="efecto">
        <div className="titulo-principios">
          <h1 className="animate__animated animate__heartBeat">
            NUESTROS PILARES
          </h1>
        </div>
      </div>
      <div className="container-2 efecto">
        <div className="card">
          <h2>La Confianza</h2>
          <p>
            Consiste en la buena relación entre los hombres las comunidades
            vivientes, es la proyección de la buena fe, que debe presumirse
            siempre entre las autoridades y los particulares, partiendo de la
            necesidad que tienen los ciudadanos y ciudadanas de ser protegidos
            frente a actos arbitrarios autoritarios, repentinos, improvisados o
            similares por parte del Estado, y propiciar hacia la participación
            desde el diálogo, la comprensión, el respeto y la tolerancia.
          </p>
        </div>

        <div className="card">
          <h2>La Cooperación</h2>
          <p>
            Es tan importante que representa la base de muchos valores humanos,
            como la solidaridad y el mutualismo, la amistad, el compañerismo, la
            lealtad y el honor
          </p>
        </div>

        <div className="card">
          <h2>La Libertad</h2>
          <p>
            La libertad de la persona humana y de los grupos humanos ya sean
            instituciones, razas o naciones, y en todos sus aspectos, es decir,
            libertad de pensamiento y de movimientos. La libertad es un concepto
            construido por la sociedad para alcanzar una convivencia plena y
            constructiva, se caracteriza por oponerse a los sistemas de opresión
            creados por los seres humanos para controlar e instrumentalizar a
            sus iguales. Se opone a la esclavitud, al irrespeto por la vida
            provenga de donde provenga, a la servidumbre forzada, la coacción,
            la manipulación, el chantaje, la amenaza y la vigilancia constante.
            Es la facultad o capacidad del ser humano de actuar según sus
            valores, criterios, razón y voluntad, sin más limitaciones que el
            respeto por los demás.
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
          <h2>Igualdad</h2>
          <p>
            La igualdad de rechos y obligaciones de los individuos y grupos
            humanos sin distinción de religión, raza o nacionalidad. La igualdad
            en la sociedad vela por el derecho de cada ciudadano,
            independientemente de su clase social, lugar de residencia, sexo,
            raza o religión, de exigir el mismo trato, las mismas oportunidades
            y las mismas obligaciones frente a una misma situación, guardando
            siempre la equidad. Es la intervención en situaciones o sobre
            factores que provoquen discriminación, intolerancia y desigualdad
            para evitar repetir los errores de injusticias en la historia de la
            humanidad como la esclavitud o la xenofobia.
          </p>
        </div>

        <div className="card">
          <h2>La Fraternidad</h2>
          <p>
            Fraternidad de todos los hombres, y de todos los pueblos y naciones;
            porque todos los seres humanos nacen libres e iguales en derechos y
            en dignidad. Un alto espíritu de fraternidad debe inspirar los actos
            de toda la sociedad. Es un término derivado del latín frater, que
            significa parentesco entre hermanos o hermandad, como concepto
            filosófico, no queremos una sociedad polarizada ni de odios por
            pensar distinto, queremos construir una sociedad de libre
            pensamiento, pero sobre todo el respeto por pensar diferente. Es la
            filosofía del amor, el de ser respetuosos y empáticos los unos con
            los otros.
          </p>
        </div>

        <div className="card">
          <h2>La Inclusion</h2>
          <p>
            La inclusión integra a los grupos de personas que son considerados
            como minorías en la sociedad. No consideramos minorías o mayorías,
            consideramos a las personas como iguales, representamos la unión de
            todos, representamos sus fortalezas, por ende, luchamos por los
            derechos fundamentales y constitucionales de todos y todas.
          </p>
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
    </>
  );
};

export default Valoresyprincipios;
