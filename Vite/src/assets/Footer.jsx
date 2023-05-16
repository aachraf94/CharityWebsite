import { ReactComponent as Facebook } from "./FrontAssets/images1/Facebook.svg";
import { ReactComponent as Instagram } from "./FrontAssets/images1/Instagram.svg";
import { ReactComponent as Twitter } from "./FrontAssets/images1/twitter.svg";
import { ReactComponent as Linkedin } from "./FrontAssets/images1/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f9dbbb", color: "#2E3840" }}
      className=" py-4 px-1 sm:px-1 md:px-3 font-semibold"
    >
      <div className="flex flex-row justify-between ">
        <div className="ml-1 md:ml-6 mt-12 flex flex-row">
          <div className="flex flex-col items-center mb-2">
            <Link
              to="https://www.linkedin.com/in/coeur-espoir-729072273/"
              className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3"
            >
              <Linkedin className="w-6 h-6 md:w-12 md:h-12" />
              <span className="ml-2"></span>
            </Link>
            <Link
              to="https://twitter.com/coeur_espoir_10"
              className=" hover:text-gray-300 mr-2 md:mr-6px-1 lg:px-3"
            >
              <Twitter className="w-6 h-6 md:w-12 md:h-12" />
              <span className="ml-2"></span>
            </Link>
          </div>
          <div className="flex flex-col items-center mb-2">
            <Link
              to="https://www.facebook.com/profile.php?id=100092052934713"
              className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3"
            >
              <Facebook className="w-6 h-6 md:w-12 md:h-12" />
              <span className="ml-2"></span>
            </Link>
            <Link
              to="https://www.instagram.com/coeur_espoir_10/"
              className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3"
            >
              <Instagram className="w-6 h-6 md:w-12 md:h-12" />
              <span className="ml-2"></span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center  ">
          <Link to="/Profil">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">Account</p>
          </Link>
          <Link to="/Login">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Se Connecter
            </p>
          </Link>
          <Link to="/Register">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Rejoignez Nous
            </p>
          </Link>
          <Link to="/Choice">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Faites Une Donation
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center  ">
          <Link to="/Evenements">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Notre Espace
            </p>
          </Link>
          <Link to="/Apropos">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              A Propos De Nous
            </p>
          </Link>
          <Link to="/Help">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Besoin D'aide ?
            </p>
          </Link>
          <Link to="/Apropos">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">
              Collaboration
            </p>
          </Link>
        </div>
        <div className="flex flex-col justify-center  ">
          <Link to="/Apropos">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">News</p>
          </Link>
          <Link to="/TousBlogs">
            <p className="px-4 md:px-16 py-1 hover:text-gray-300">Blogs</p>
          </Link>
        </div>
      </div>
      <p className="text-sm text-center  py-1 mt-6 text-xs">
        "Copyright &copy; 2023 Fondation Coeur Espoir , All rights reserved"
      </p>
    </footer>
  );
};

export default Footer;
