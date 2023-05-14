import Navbaradmin from "./Navbars/Navbaradmin";
import Navbarmembre from "./Navbars/Navbarmembre";
import Nav from "./Navbars/Navbar";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

function NavbarMenu({ role }) {
  console.log("Role nav: ",role);
  if (role === "ADMIN") return <Navbaradmin />;
  else if (role === "MEMBRE") return <Navbarmembre />;
  else return <Nav />
}

export default NavbarMenu;
