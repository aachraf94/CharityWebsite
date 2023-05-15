import { useFormik } from "formik";
import './Inscription.css';
import React from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Inscription = ({ event_id }) => {
  const navigate = useNavigate("");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      event_id: event_id,
    },
    onSubmit: async (values) => {
      const data = {
        firstname: formik.values.firstname,
        lastname: formik.values.lastname,
        email: formik.values.email,
        phone: formik.values.phone,
        event_id: formik.values.event_id,
      };
      api.post("/addParticipant", data);
      alert("Vous y etes inscrit!");
      navigate("/");
    },
  });
  return (
    <>
      <div className=" top-[30%]  left-[40%] fixed translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-10 aaaaa" id="nblurg">
        <form onSubmit={formik.handleSubmit}>
          <div className=" border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-auto sm:w-auto md:w-auto lg:w-auto xl:w-96 bg-red shadow-lg rounded-lg">
            <h2 className="text-center  text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
              S'inscrire{" "}
            </h2>
            <div className="relative w-full mb-4 flex justify-between items-center">
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
                type="text"
                placeholder=""
                id="lastname"
                required
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              <span className=" absolute bottom-3 left-[5%] text-gray-400 text-sm duration-500 pointer-events-none">
                Nom
              </span>
              <input
                className="w-5/12 h-8 bg-transparent  border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2 "
                type="email"
                placeholder=""
                id="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span className="  absolute bottom-3 right-[20%] text-gray-400 text-sm duration-500 pointer-events-none">
                Email
                <AiOutlineMail
                  className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </span>
            </div>

            <div className="relative w-full mb-4 flex justify-between items-center ">
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
                type="text"
                placeholder=""
                id="firstname"
                required
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              <span className=" absolute bottom-3 left-[5%] text-gray-400 text-sm duration-500 pointer-events-none">
                Prénom
              </span>
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
                type="text"
                placeholder=""
                id="phone"
                required
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <span className="  absolute bottom-3   right-[12%] text-gray-400  text-sm duration-500 pointer-events-none">
                Téléphone
                <BsFillTelephoneFill
                  className="absolute right-[100%] top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
                <button
                  type="submit"
                  className="flex justify-center items-center p-2 md:p-4 bg-white text-black text-lg font-bold rounded-xl w-full md:w-auto"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto"
                >
                  Confirmer
                </button>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inscription;
