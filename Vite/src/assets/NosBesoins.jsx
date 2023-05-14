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
      console.log("besoins: ", besoins);
    });
  }, []);
  console.log("Role besoins: ", role);
  if (role === "ADMIN") {
    console.log("admin = ");
     return( <BesoinsListadmin besoins={besoins} />);
  } else if (role === "MEMBRE") {
    return(<BesoinsListmembre besoins={besoins} />);
  } else {
    return(<BesoinsList besoins={besoins}/>);
  }
};

export default NosBesoins;
