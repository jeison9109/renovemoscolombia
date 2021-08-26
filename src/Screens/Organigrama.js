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
import "./styles/Organigrama.css";

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
      <div className="titulo-organigrama">
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
          label={<StyledNode>Congreso Nacional</StyledNode>}
        >
          <TreeNode label={<StyledNode>Dirección Nacional </StyledNode>}>
            <TreeNode label={<StyledNode>Presidencia</StyledNode>} />
            <TreeNode
              label={<StyledNode>Comité Ejecutivo Nacional </StyledNode>}
            />
          </TreeNode>
          <TreeNode
            label={<StyledNode>Dirección Ejecutiva Nacional</StyledNode>}
          >
            <TreeNode label={<StyledNode></StyledNode>}>
              <TreeNode label={<StyledNode></StyledNode>} />
              <TreeNode label={<StyledNode></StyledNode>} />
            </TreeNode>
          </TreeNode>

          <TreeNode label={<StyledNode>Secretaría General </StyledNode>}>
            <TreeNode label={<StyledNode></StyledNode>} />
            <TreeNode label={<StyledNode></StyledNode>} />
          </TreeNode>
        </Tree>
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

export default Organigrama;
