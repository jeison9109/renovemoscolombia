import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getCandidatosById } from "../selectores/getCandidatosById";

export const CandidatoScreen = ({ history }) => {
  const { candidatoId } = useParams();

  const candidato = useMemo(
    () => getCandidatosById(candidatoId),
    [candidatoId]
  );

  //  const candidato = getCandidatosById(candidatoId);

  if (!candidato) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    candidato;

  return (
    <div className="row mt-5">
      <div className="col-6">
        <img
          src={`../assets/candidatos/${candidatoId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
        <div className="col-8 animate__animated animate__fadeIn">
          <h3> {superhero}</h3>
          <div className="col-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Profesion: </b>
                {alter_ego}
              </li>

              <li className="list-group-item">
                <b>Candidatura: </b>
                {publisher}
              </li>

              <li className="list-group-item">
                <b>Experiencia: </b>
                {first_appearance}
              </li>
            </ul>
            <h5>Info llamativa:</h5>
            <p>{characters}</p>
            <button className="btn btn-outline-info" onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
