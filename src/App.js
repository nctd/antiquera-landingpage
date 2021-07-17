import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CorreoPage from "./pages/correo/correo.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/contacto" component={CorreoPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
