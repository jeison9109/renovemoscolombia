import React from "react";
import { CandidatoList } from "../Components/candidatos/CandidatoList";

export const CandidatosNacional = () => {
  return (
    <div>
      <h1>Candidatos</h1>
      <hr />

      <CandidatoList publisher="Camara de Representantes" />
    </div>
  );
};
