import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AjouterBesoin from "./assets/AjouterBesoin";
import Login from "./assets/Login";
import Register from "./assets/Register";
import Choice from "./assets/Choice";
import Don from "./assets/Don";
import Besoin from "./assets/Besoin";
import AjouterBlog from "./assets/AjouterBlog";
import ModifierProfil from "./assets/ModifierProfil";
import Apropos from "./assets/Apropos";
import NavbarMenu from "./assets/Navbar";
import HP1user from "./assets/Homes/HP1user";
import jwt_decode from "jwt-decode";
import Footer from "./assets/Footer";
import Profil from "./assets/Profil";
import { useEffect, useState } from "react";
import { api } from "./utils/api";
import Evenements from "./Evenements";
import Forgot from "./Forgot";
import Reset from "./Reset";
import Deconnexion from "./assets/dashboards/Déconnexion"
import Utilisateurs from "./assets/dashboards/Utilisateurs"
import Transactions from "./assets/dashboards/Transactions"
import Necessiteux from "./assets/dashboards/Nécessiteux"
import Stock from "./assets/dashboards/Stocks"
import Participants from './assets/dashboards/Participants'
import DemandesList from "./assets/DemmandesList";
import ModifierCompte2 from "./assets/ModifierCompte2";
import ModifierUtilisateur from "./ModifierUtilisateur";
import NosBesoins from "./assets/NosBesoins";
import Blogs from "./assets/Blogs/Blogs";
import Feedback from "./Feedback";
import ModifierParticipant from "./assets/ModifierParticipant";
import BlogsTous from "./assets/Blogs/BlogTous";
import Dashboard from "./assets/dashboards/Dashboard"
import PageNotFound from "./assets/NotFoundPage"
import AjouterEvent from "./assets/Evenements/AjouterEvent";
import Description from "./assets/Evenements/DescriptionEvenement"
import Help from "./Help";


function App() {
  const [role, setRole] = useState();
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
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarMenu role={role} />
                <HP1user />
                <Feedback />
                <Footer />
              </>
            }
          />
          <Route path="/tousBlogs" element={<><NavbarMenu role={role} /><BlogsTous /><Footer /></>} />
          <Route path="/Blogs" element={<><NavbarMenu role={role} /><Blogs role={role} /></>} />
          <Route path="/login" element={<Login role={role} />} />
          <Route path="/Rejoignez" element={<Register role={role} />} />
          <Route path="/choice" element={<Choice role={role} />} />
          <Route path="/don" element={<Don role={role} />} />
          <Route path="/deconnexion" element={<Deconnexion />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/demandes" element={<><DemandesList /><NavbarMenu role={role} /><Footer /></>} />
          <Route path="/modifiercompte2" element={<><ModifierCompte2 /></>} />
          <Route path="/besoin" element={<><Besoin role={role} /></>} />
          <Route path="/participant" element={<ModifierParticipant />} />
          <Route path="/description" element={<Description />} />

          <Route
            path="/Evenements"
            element={
              <>
                <NavbarMenu role={role} />
                <Evenements role={role} />
                <Footer />
              </>
            }
          />

          <Route path="/reset/:id/:token" element={<Reset />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/ajouterbesoin" element={<AjouterBesoin />} />
          <Route path="/ajouterblog" element={<AjouterBlog role={role} />} />
          <Route path="/AjouterEvent" element={<AjouterEvent role={role} />} />
          <Route path="/modifierprofil" element={<><ModifierProfil /></>} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/necessiteux" element={<Necessiteux />} />
          <Route path="/modifierutilisateur" element={<ModifierUtilisateur />} />
          <Route
            path="/Apropos"
            element={
              <>
                <Apropos />
                <NavbarMenu role={role} />
                <Footer />
              </>
            }
          />
          <Route
            path="/profil"
            element={
              <>
                <Profil role={role} />
              </>
            }
          />
          <Route path="" />
          <Route path="/Help" element={<><NavbarMenu role={role}/><Help /><Footer/></>} />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard role={role} />
              </>
            }
          />
          <Route
            path="/NosBesoins"
            element={
              <>
                <NavbarMenu role={role} />
                <NosBesoins role={role} />
                <Footer />
              </>
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
