import { candidatos } from "../../data/candidatos";

export const getCandidatosByPublisher = (publisher) => {
  const validPublishers = ["Camara de Representantes"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher"${publisher}"no es correcto`);
  }
  return candidatos.filter((candidato) => candidato.publisher === publisher);
};
