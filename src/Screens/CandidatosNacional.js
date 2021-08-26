import React from "react";
import { CandidatoList } from "../Components/candidatos/CandidatoList";

export const CandidatosNacional = () => {
  return (
    <div className="efecto">
      <div className="titulo-1">
        <h1 className="animate__animated animate__heartBeat">Candidatos</h1>
      </div>

      <CandidatoList publisher="Camara de Representantes" />
    </div>
  );
};
