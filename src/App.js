import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
