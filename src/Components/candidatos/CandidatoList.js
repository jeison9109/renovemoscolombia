import React, { useMemo } from "react";
import { getCandidatosByPublisher } from "../selectores/getCandidatosByPublisher";
import { CandidatoCard } from "./CandidatoCard";

export const CandidatoList = ({ publisher }) => {
  const candidatos = useMemo(
    () => getCandidatosByPublisher(publisher),
    [publisher]
  );

  //  const candidatos = getCandidatosByPublisher(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {candidatos.map((candidato) => (
        <CandidatoCard key={candidato.id} {...candidato}></CandidatoCard>
      ))}
    </div>
  );
};
