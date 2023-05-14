import "./Don.css";
import img from "./FrontAssets/Donation_don Visiteur.png";
import log from "./FrontAssets/LOGO.png";
import { HiIdentification } from "react-icons/hi";

import { AiOutlineMail } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { useEffect, useState } from "react";

function Don({role}) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      montant: "",
      adresse: "",
      numero: "",
      code: "",
    },
    onSubmit: async (values) => {
      try {
        api.post("/ajouterdon",formik.values).catch(err=>{
          alert("Error,veuillez checker le input");return;});
          alert("Merci beaucoup!");
          navigate("/");
        } catch (err) {
      }
    },
  });

  const [aff,setAff] = useState();
  useEffect(()=>{
    role=="ADMIN" || role=="MEMBER" ?setAff(false): setAff(true);
  },[])

  console.log(role)
  return (
    <>
      <Link
        to="/"
        className="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4"
      >
        <img src={log} alt="" className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12" />
      </Link>
      { aff && (
      <div className="relative">
      
      <span className="text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-44 flex-none order-0 flex-grow-0 ml-7">
        N'est pas encore un membre
      </span>
      <div className="fixed top-2 right-0 m-4">
        <Link to="/Rejoignez">
          <button className="bg-transparent   rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2">
            Rejoignez Nous
          </button>
        </Link>
      </div>
      </div> )}
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-blue-400 h-screen flex justify-center items-center">
          <img src={img} alt="" className="h-screen w-full object-cover" />
          <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
            <h2 className="text-center text-yellow-300  text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
              Don
            </h2>
            <div className="relative w-full mb-4 flex justify-between items-center">
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
                type="text"
                placeholder=""
                id="nom"
                required
                value={formik.values.nom}
                onChange={formik.handleChange}
              />
              <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                Nom
              </span>
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
                type="text"
                placeholder=""
                id="numero"
                required
                value={formik.values.numero}
                onChange={formik.handleChange}
              />
              <span className="Wilaya  absolute bottom-3 right-[6%] text-gray-400 text-sm duration-500 pointer-events-none">
                Le numéro de votre Carte de débit{" "}
                <FaRegCreditCard
                  className="absolute right-56 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </span>
            </div>

            <div className="relative w-full mb-4 flex justify-between items-center ">
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                type="text"
                placeholder=""
                id="prenom"
                required
                value={formik.values.prenom}
                onChange={formik.handleChange}
              />
              <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                prénom
              </span>
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                type="text"
                placeholder=""
                id="adresse"
                required
                value={formik.values.adresse}
                onChange={formik.handleChange}
              />
              <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                
                <HiIdentification
                  className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </span>
            </div>
            <div className="relative w-full mb-4 flex justify-between items-center">
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                type="text"
                placeholder=""
                id="montant"
                required
                value={formik.values.montant}
                onChange={formik.handleChange}
              />
              <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                Montant
                <MdAttachMoney
                  className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </span>
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
                type="text"
                placeholder=""
                id="code"
                required
                value={formik.values.code}
                onChange={formik.handleChange}
              />
              <span className="Wilaya  absolute bottom-3 right-[27.5%] text-gray-400 text-sm duration-500 pointer-events-none">
                CVV/CVC
                <AiOutlineMail
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </span>
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
              <button 
              type="submit"
              className="flex justify-center items-center  bg-blue-500 rounded-xl shadow-md py-4 px-8 text-white text-xl font-bold text-yellow-300  uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
                Faire une donation
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Don;
