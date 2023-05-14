import "./Login.css";
import img from "./FrontAssets/image login.png";
import log from "./FrontAssets/Logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { RiKeyLine } from "react-icons/ri";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../utils/api";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  // const login = () => {
  //   api.post("/login", {})
  // }
  // const [error, setError] = useState(true);
  const navigate = useNavigate("/");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
    
        axios.post("http://localhost:3030/login", values)
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          console.log("token: ",localStorage.getItem("token"));
          window.location.href="/";
        })
        .catch((err) => {
          alert("Wrong user/password");
        });
    },
  });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Link to="/" className="absolute top-0 left-0 mt-4 ml-4">
        <img
          src={log}
          alt=""
          className="h-12  sm:h-12 md:h-12 lg:h-12 xl:h-12"
        />
      </Link>

      <div className="bg-blue-400 h-screen flex justify-center items-center ">
        <img src={img} alt="" className="h-screen w-full object-cover  " />
        <div className="relative">
          <div className="absolute bottom-[-0.625rem] left-[2.1622%] top-[-1.25rem] h-[9.375rem] w-[92.5%] border-b border-yellow-200 sm:w-[80%] md:w-[90%]"></div>
        </div>
        <span className=" hidden md:inline-block text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-52 flex-none order-0 flex-grow-0 ml-8">
          Vous n'êtes pas un membre?
        </span>
        <div className="fixed top-2 right-0 m-4">
          <Link to="/Rejoignez" className="bg-transparent  rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2">
            Rejoignez-Nous
          </Link>
        </div>
        <div className="box-sizing flex mx-auto  flex-col justify-start items-center p-8 gap-4 text-red absolute  xl:w-4/12 bg-red shadow-lg rounded-lg">
          <h2 className="text-center text-yellow-300 text-4xl font-nohemi">
            Se Connecter
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <form onSubmit={formik.handleSubmit}>
              <div className="relative">
                <input
                  className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mt-11"
                  type="email"
                  placeholder=""
                  id="email"
                  required
                  values={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="Email absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Email
                  <AiOutlineMail
                    className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </span>
              </div>
              <div className="relative">
                <input
                  className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mt-24"
                  placeholder=""
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  values={formik.values.password}
                  onChange={formik.handleChange}
                />
                <span className="Email absolute bottom-4 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Mot de passe
                  <RiKeyLine
                    className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </span>
                <button
                  className="absolute top-20 right-5 p-2"
                  onClick={()=>handleShowPassword()}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-6 w-6 text-gray-500" />
                  ) : (
                    <FaEye className="h-6 w-6 text-gray-500" />
                  )}
                </button>
              </div>
              <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14"
                >
                  Se connecter
                </button>
                <Link
                  to="/forgot"
                  className="text-white hover:text-yellow-300"
                >
                  <h4>Mot de passe oublié?</h4>{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;