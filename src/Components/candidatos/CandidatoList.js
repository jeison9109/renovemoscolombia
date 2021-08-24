import React from "react";
import { getCandidatosByPublisher } from "../selectores/getCandidatosByPublisher";
import { CandidatoCard } from "./CandidatoCard";

export const CandidatoList = ({ publisher }) => {
  const candidatos = getCandidatosByPublisher(publisher);

  return (
    <div className="card-columns">
      {candidatos.map((candidato) => (
        <CandidatoCard key={candidato.id} {...candidato}></CandidatoCard>
      ))}
    </div>
  );
};
