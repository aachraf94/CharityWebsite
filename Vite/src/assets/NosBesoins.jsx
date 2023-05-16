import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import BesoinsListmembre from "./Besoins/BesoinsListmembre";
import BesoinsListadmin from "./Besoins/BesoinsListadmin";
import BesoinsList from "./Besoins/BesoinsList";
const NosBesoins = ({ role }) => {
  const [besoins, setBesoins] = useState([]);
  useEffect(() => {
    api.get("/getBesoins").then((res) => {
      setBesoins(res.data);
    });
  }, []);
  if (role === "ADMIN") {
     return( <BesoinsListadmin besoins={besoins} />);
  } else if (role === "MEMBRE") {
    return(<BesoinsListmembre besoins={besoins} />);
  } else {
    return(<BesoinsList besoins={besoins}/>);
  }
};

export default NosBesoins;
