import React from "react";
import { CandidatoList } from "../Components/candidatos/CandidatoList";
import "../Screens/styles/LideresJuveniles.css";
export const LideresJuveniles = () => {
  return (
    <div className="efecto">
      <div className="titulo-juveniles">
        <h1 className="animate__animated animate__heartBeat">
          Lideres Juveniles
        </h1>
      </div>

      <hr />

      <CandidatoList publisher="Lideres Juveniles" />
    </div>
  );
};
