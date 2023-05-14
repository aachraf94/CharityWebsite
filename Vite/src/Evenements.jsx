import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "./utils/api";
import EvenementsListadmin from "./assets/Evenements/EvenementsListadmin";
import EvenementsList from "./assets/Evenements/EvenementsList";
import EvenementsListmembre from "./assets/Evenements/EvenementsListmembre";
const Evenements = () => {
  const [role, setRole] = useState("");
  const [evenements, setEvenements] = useState([]);
  useEffect(() => {
    try {
      //CHECK IF USER IS LOGGED IN , OR ELSE RETURN KEEP IT VISITOR
      const data = {
        email: jwt_decode(localStorage.getItem("token")).user,
      };
      api.post("/getrole", data).then((res) => setRole(res.data.role));
    } catch (err) {
      setRole("visitor");
    }
    api.get("/getEvents").then((res) => setEvenements(res.data));
    console.log("Ev role:",role);
}, []);
  if (role === "ADMIN") {
    return <EvenementsListadmin evenements={evenements} />;
  } else if (role === "MEMBRE") {
    return <EvenementsListmembre evenements={evenements} />;
  } else {
    return <EvenementsList evenements={evenements} />;
  }
};

export default Evenements;
