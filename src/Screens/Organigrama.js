import React from "react";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";
import { Tree, TreeNode } from "react-organizational-chart";
import styled, { keyframes } from "styled-components";
import "../Screens/Organigrama.css";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
  margin-top: 10px;
`;

const slideAnim = keyframes`
  100% {
    top: 20px;
    left: 30px;
  }

  @media (max-width: 800px) {
    top: 70px;
    left: 50px;
    }

`;

const Organigrama = () => {
  return (
    <div className="efecto">
      <div className="titulo-1">
        <h1 className="animate__animated animate__heartBeat">
          ESTRUCTURA ORGANIZACIONAL
        </h1>
      </div>
      {/**** ORGANIGRAMA ****/}
      <div className="organ">
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>COMITE NACIONAL</StyledNode>}
        >
          <TreeNode label={<StyledNode>DIRECCION GENERAL</StyledNode>}>
            <TreeNode
              label={<StyledNode>Comision Politica Nacional</StyledNode>}
            />
          </TreeNode>
          <TreeNode label={<StyledNode>SECRETARIA GENERAL</StyledNode>}>
            <TreeNode label={<StyledNode>Direccion administrativa</StyledNode>}>
              <TreeNode label={<StyledNode>Direccion Juridica</StyledNode>} />
              <TreeNode label={<StyledNode>Direccion Financiera</StyledNode>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<StyledNode>CONTROL</StyledNode>}>
            <TreeNode label={<StyledNode>Consejo Etico</StyledNode>} />
            <TreeNode label={<StyledNode>Veedor</StyledNode>} />
          </TreeNode>
        </Tree>
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

export default Organigrama;
