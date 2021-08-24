import { candidatos } from "../../data/candidatos";

export const getCandidatosByPublisher = (id) => {
  return candidatos.find((candidato) => candidato.id === id);
};
