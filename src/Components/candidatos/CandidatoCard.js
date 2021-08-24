import React from "react";
import { Link } from "react-router-dom";
import "../../Screens/styles/CandidatoCard.css";

export const CandidatoCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Link to={`./candidato/${id}`} className="my-card">
      <img
        src={`./assets/candidatos/${id}.jpg`}
        className="img img-responsive"
        alt={superhero}
      />
      <div className="profile-name">{superhero}</div>
      <div className="profile-position">{alter_ego}</div>
      <div className="profile-overview">
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <h3>{publisher}</h3>
              <p>
                Primera aparición: <br />
                {first_appearance}
              </p>
              {alter_ego !== characters && <p>{characters}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
