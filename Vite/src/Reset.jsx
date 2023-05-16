import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "./utils/api";
import { useFormik } from "formik";
import img from './assets/images1/aniss1.png'
import log from './assets/images1/aniss2.png'
import { RiKeyLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Reset = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const { id, token } = useParams();
  const navigate = useNavigate("");
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    onSubmit: async (values) => {
      if (password !== confirm) {
        alert("Veuillez confirmer correctement!");
        return;
      } else {
        const data={
            id:id
        }
        api.post("/reset_password",data);
        alert("Mise à jour avec succés");
        navigate("/login");
      }
    },
  });
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/");
      return;
    } else {
      api.post(`/reset_password/${id}/${token}`).catch(err=>{
        navigate("/");
      });
    }
  }, []);
  return (
    <>
      <Link to="/" class="absolute top-0 left-0 mt-4 ml-4">
        <img src={log} alt="" class="h-12  sm:h-12 md:h-12 lg:h-12 xl:h-12" />
      </Link>

      <div class="bg-blue-400 h-screen flex justify-center items-center ">
        <img src={img} alt="" class="h-screen w-full object-cover  " />
        <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-8 gap-4 text-red absolute w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 bg-[#f9dbbb4c] shadow-lg rounded-lg">
          <h2 className="text-center text-[#f9dbbb] text-4xl font-nohemi">
            Changement de mot de passe
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
              <div className="relative">
                <input
                  className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black mt-11"
                  type={showPassword1 ? "text" : "password"}
                  placeholder=""
                  required
                  id="password"
                  values={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
                <span className="Email absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Nouveau mot de passe
                  <RiKeyLine
                    className="absolute right-36 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </span>
                <button
                  className="  absolute top-8 right-5 p-2"
                  onClick={handleShowPassword1}
                >
                  {showPassword1 ? (
                    <FaEyeSlash className="h-6 w-6 text-gray-500" />
                  ) : (
                    <FaEye className="h-6 w-6 text-gray-500" />
                  )}
                </button>
              </div>
              <div className="relative">
                <input
                  className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black mt-24"
                  placeholder=""
                  id="confirmpassword"
                  type={showPassword2 ? "text" : "password"}
                  required
                  values={formik.values.confirm}
                  onChange={formik.handleChange}
                />
                <span className="Email absolute bottom-4 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Confirmez le mot de passe
                  <RiKeyLine
                    className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </span>
                <button
                  className="absolute top-20 right-5 p-2"
                  onClick={handleShowPassword2}
                >
                  {showPassword2 ? (
                    <FaEyeSlash className="h-6 w-6 text-gray-500" />
                  ) : (
                    <FaEye className="h-6 w-6 text-gray-500" />
                  )}
                </button>
              </div>
              <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-[#2e3840] rounded-xl shadow-md py-4 px-8 text-[#f9dbbb] text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14"
                >
                  Confirmer{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
