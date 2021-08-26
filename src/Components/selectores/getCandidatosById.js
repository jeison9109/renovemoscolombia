import { candidatos } from "../../data/candidatos";

export const getCandidatosById = (id) => {
  return candidatos.find((candidato) => candidato.id === id);
};
