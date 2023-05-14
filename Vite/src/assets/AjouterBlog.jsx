import "./AjouterBlog.css";
import img from "./FrontAssets/Donation_ Besoin visiteur.png";
import log from "./FrontAssets/Logo.png";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { useFormik } from "formik";
import { api } from "../utils/api";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function AjouterBlog({ role }) {
  const navigate = useNavigate("");
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: () => {
      const data = {
        authorMail: jwt_decode(localStorage.getItem("token")).user,
        content: formik.values.content,
        title: formik.values.title,
      };
      api.post("/addBlog", data).then((err) => console.log(err));
      alert("blog posted successfully");
    },
  });
  if (role !== "ADMIN" && role !== "MEMBRE") {
    navigate("/");
    return;
  } else {
    return (
      <>
        <Link
          to="/"
          className="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4"
        >
          <img
            src={log}
            alt=""
            className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"
          />
        </Link>

        <form onSubmit={formik.handleSubmit}>
          <div className="bg-blue-400 h-screen flex justify-center items-center">
            <img src={img} alt="" className="h-screen w-full object-cover" />
            <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
              <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                Ajouter un Blog
              </h2>
              <div className="relative w-full mb-4 flex justify-between items-center">
                <input
                  className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
                  type="text"
                  placeholder=""
                  required
                  id="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Titre
                </span>
              </div>

              <div className="relative w-full mb-4 flex justify-between items-center ">
                <input
                  className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                  type="text"
                  placeholder=""
                  required
                  id="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
                <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
                  Blog
                  <HiIdentification
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                </span>
              </div>

              <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md  py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default AjouterBlog;
