import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AjouterBesoin from "./assets/AjouterBesoin";
import Navbar from "./assets/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path ="/"></Route>
          <Route
            exact
            path="/ajouterBesoin"
            element={
              <>
                <Navbar />
                <AjouterBesoin />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
