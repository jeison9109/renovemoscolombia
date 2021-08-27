import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Screens/Home";
import Contacts from "./Screens/Contacts";
import Propuestas from "./Screens/Propuestas";

import Historia from "./Screens/Historia";

import Valoresyprincipios from "./Screens/Valoresyprincipios";
import { DireccionNacional } from "./Screens/DireccionNacional";
import Organigrama from "./Screens/Organigrama";
import { CandidatoScreen } from "./Components/candidatos/CandidatoScreen";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { CandidatosNacional } from "./Screens/CandidatosNacional";
import { LideresJuveniles } from "./Screens/LideresJuveniles";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Propuestas" component={Propuestas}></Route>
          <Route
            exact
            path="/DireccionNacional"
            component={DireccionNacional}
          ></Route>
          <Route exact path="/Contacts" component={Contacts}></Route>
          <Route exact path="/Historia" component={Historia}></Route>
          <Route exact path="/Propuestas" component={Propuestas}></Route>
          <Route exact path="/LideresJuveniles" component={LideresJuveniles} />

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

          {/*<Redirect to="/inicio" />*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
