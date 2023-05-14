import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavbarMenu from "./Navbar";
import Prof from "./profils/profil"
import { useEffect, useState } from "react";


const Profil = ({role}) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (role !== "ADMIN" && role !== "MEMBRE") {
      window.location.href="/";
    } else {
      setShowComponent(true);
    }
  }, [role]);

  return (
    <>
      {showComponent && (
        <>
          <Prof role={role} />
          <NavbarMenu role={role} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Profil;
