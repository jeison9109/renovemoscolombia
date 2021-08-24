import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Screens/Home";
import Contacts from "./Screens/Contacts";
import Propuestas from "./Screens/Propuestas";
import Candidatos from "./Screens/Candidatos";
import Historia from "./Screens/Historia";

import Valoresyprincipios from "./Screens/Valoresyprincipios";

import Organigrama from "./Screens/Organigrama";
import { CandidatoScreen } from "./Components/candidatos/CandidatoScreen";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CandidatosNacional } from "./Screens/CandidatosNacional";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Propuestas" component={Propuestas}></Route>
          <Route exact path="/Candidatos" component={Candidatos}></Route>
          <Route exact path="/Contacts" component={Contacts}></Route>
          <Route exact path="/Historia" component={Historia}></Route>
          <Route exact path="/Propuestas" component={Propuestas}></Route>

          <Route
            exact
            path="/CandidatosNacional"
            component={CandidatosNacional}
          />

          <Route
            exact
            path="/Valoresyprincipios"
            component={Valoresyprincipios}
          ></Route>
          <Route exact path="/Organigrama" component={Organigrama}></Route>
          <Route
            exact
            path="/candidato/:candidatoId"
            component={CandidatoScreen}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
