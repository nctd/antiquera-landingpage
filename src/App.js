import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
