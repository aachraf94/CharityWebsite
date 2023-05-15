import "./ModifierProfil.css";
import img from "./FrontAssets/image login.png";
import log from "./FrontAssets/LOGO.png";
import { useState } from "react";
import frm from "./FrontAssets/Vector(1).png";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../utils/api";
import jwt_decode from "jwt-decode"

function ModifierCompte() {
  const [age, setAge] = useState("");
  const email = jwt_decode(localStorage.getItem("token")).user
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('photo', file);

    const response = await fetch("http://localhost:3030/uploadphoto", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  
    const data = await response.json();
    console.log(data);
  }
    
    

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      alert("Veuillez entrer un nombre entre 1 et 58");
      return;
    }
    if (value === "" || (value >= 1 && value <= 58)) {
      setAge(value);
    }
  };
  const GenderInput = () => {
    const [gender, setGender] = useState("");

    const handleChange = (event) => {
      const value = event.target.value.toLowerCase();
      if (value === "homme" || value === "femme") {
        setGender(value);
      }
    };
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <>
      <Link
        to="/"
        className="absolute z-10 top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-10"
      >
        <img src={log} alt="" className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12" />
      </Link>

      <div className="bg-blue-400 h-screen flex  justify-center items-center">
        <img src={img} alt="" className="h-screen w-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center">
            <div className=" bg-opacity-20 backdrop-filter mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
              <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                Compte
              </h2>

              <div className="bg-red   rounded-lg px-4 py-6 mt-4 w-full sm:w-5/6 md:w-1/2 lg:w-2/3 xl:w-4/5 ">
                <div className="flex flex-row justify-between ">
                  <img
                    src={frm}
                    width={64}
                    className="sm:-mt-1 md:-mt-2 lg:-mt-1 xl:-mt-1"
                  />

                  <h4 className="text-center text-white text-xl font-nohemi  xl:mt-3  ">
                    Ajouter une image
                  </h4>
                  <label
                    htmlFor="file-input"
                    className="bg-red-500 p-4 rounded-full cursor-pointer"
                  >
                    <AiOutlinePlus size={32} color="white" />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    className="hidden "
                    onChange={handleFileChange}
                  />
                  {file && <p>{file.name}</p>}
                </div>
                <div className="relative w-full mb-4 flex justify-between items-center">
                  <input
                    className="w-full h-8  mt-16 bg-transparent border-b-2  border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
                    type="text"
                    placeholder=""
                    id="nom"
                    value={email}
                    readOnly
                  />
                  <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                    Email
                  </span>
                </div>
                <div className="relative w-full mb-4 flex justify-between items-center">
                  <input
                    className="w-full h-8 bg-transparent mt-6 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                    type={showPassword1 ? "text" : "password"}
                    placeholder=""
                    id="password"
                    
                  />
                  <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                    Mot de passe
                  </span>
                  <button
                    className="  absolute top-4 right-2 p-2"
                    onClick={handleShowPassword1}
                    type="button"
                  >
                    {showPassword1 ? (
                      <FaEyeSlash className="h-6 w-6 text-gray-500" />
                    ) : (
                      <FaEye className="h-6 w-6 text-gray-500" />
                    )}
                  </button>
                </div>

                <div className="relative w-full mb-4 flex justify-between items-center">
                  <input
                    className="w-full h-8 bg-transparent mt-6 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                    type={showPassword2 ? "text" : "password"}
                    placeholder=""
                    id="confirm"
                    
                  />
                  <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                    Nouveau mot de passe
                  </span>
                  <button
                    className="  absolute top-4 right-2 p-2"
                    onClick={handleShowPassword2}
                    type="button"
                  >
                    {showPassword2 ? (
                      <FaEyeSlash className="h-6 w-6 text-gray-500" />
                    ) : (
                      <FaEye className="h-6 w-6 text-gray-500" />
                    )}
                  </button>
                </div>

                <div class="flex flex-col 4 justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none"></div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14 mt-4 "
              >
                sauvegarder
              </button>
            </div>

        </div>
      </div>
    </>
  );
}

export default ModifierCompte;