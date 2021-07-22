import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import Home from "./Screens/Home";
import Bio from "./Screens/Bio";
import Contacto from "./Screens/Contacto";
import Propuestas from "./Screens/Propuestas";
import Candidatos from "./Screens/Candidatos";
import ApoyoSocial from "./Screens/ApoyoSocial";
import Historia from "./Screens/Historia";
import DireccionNacional from "./Screens/DireccionNacional";
import Valoresyprincipios from "./Screens/Valoresyprincipios";
import Organigrama from "./Screens/Organigrama";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Bio" component={Bio}></Route>
          <Route exact path="/ApoyoSocial" component={ApoyoSocial}></Route>
          <Route exact path="/Propuestas" component={Propuestas}></Route>
          <Route exact path="/Candidatos" component={Candidatos}></Route>
          <Route exact path="/Contacto" component={Contacto}></Route>
          <Route exact path="/Historia" component={Historia}></Route>
          <Route
            exact
            path="/DireccionNacional"
            component={DireccionNacional}
          ></Route>
          <Route
            exact
            path="/Valoresyprincipios"
            component={Valoresyprincipios}
          ></Route>
          <Route exact path="/Organigrama" component={Organigrama}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
