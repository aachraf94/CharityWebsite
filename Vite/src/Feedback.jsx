import React from "react";
import sms from "./assets/images1/sms.svg";
import vector from "./assets/images1/Vector.svg";
import location from "./assets/images1/location.svg";
import { useFormik } from "formik";
import { api } from "./utils/api";
const Feedback = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      const data = {
        name: formik.values.name,
        email: formik.values.email,
        message: formik.values.message,
      };
      api.post("/sendFeedBack", data);
      alert("Merci pour le feedback!");
    },
  });
  return (
    <div className="mb-8">
      <h1 className="titre">Contacter nous</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-between -mt-4">
          <div className="w-[50%] bg-[#F9DBBB4C] rounded-xl m-8 border-dashed border-4 border-gray-600 justify-start">
            <h2 className="titre">feedback</h2>
            <input
              className="border-2 border-black mb-4 mt-4 text-[#4C4C4C] p-4 placeholder-[#4C4C4C]  bg-[#F9DBBB4C]  w-[80%] ml-[10%] mr-[10%] h-12"
              type="text"
              placeholder=" Nom"
              id="nom"
              values={formik.values.nom}
              onChange={formik.handleChange}
            />
            <input
              className="border-2 border-black mb-4 mt-4 text-[#4C4C4C] p-4 placeholder-[#4C4C4C]  bg-[#F9DBBB4C]  w-[80%] ml-[10%] mr-[10%] h-12"
              type="text"
              placeholder=" Email"
              id="email"
              values={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              className="border-2 border-black mb-8 mt-4 text-[#4C4C4C] p-4 placeholder-[#4C4C4C]  bg-[#F9DBBB4C]  w-[80%] ml-[10%] mr-[10%] h-44"
              type="text"
              placeholder=" Votre message ... "
              id="message"
              values={formik.values.message}
              onChange={formik.handleChange}
            />
            <div className="flex justify-center">
              <button
                style={{ backgroundColor: "#2E3840" }}
                className="font-extrabold  cart-btn flex justify-center transition duration-500 ease-in-out px-2 py-2 w-32"
              >
                Envoyer
              </button>
            </div>
          </div>
          <div className="w-[30%] bg-[#F9DBBB4C] rounded-xl m-8 border-dashed border-4 border-gray-600  flex flex-col justify-between">
            <div className="m-4">
              <div className="flex flex-row">
                <img alt="1" src={sms} className="w-12 px-2"></img>
                <h1 className="text-2xl font-bold py-2 px-2">Email</h1>
              </div>
              <h1 className="text-xl font-semibold py-2 px-4 underlined">
                espoircoeur10@gmail.com
              </h1>
            </div>
            <div className="m-4">
              <div className="flex flex-row">
                <img alt="1" src={vector} className="w-12 px-2"></img>
                <h1 className="text-2xl font-bold py-2 px-2">Adresse</h1>
              </div>
              <h1 className="text-xl font-semibold py-2 px-4 underlined">
                ALGER‑MOURAD‑DIDOUCHE 16002 119 RUE DIDOUCHE MOURAD
              </h1>
            </div>
            <div className="m-4">
              <div className="flex flex-row">
                <img alt="1" src={location} className="w-12 px-2"></img>
                <h1 className="text-2xl font-bold py-2 px-2">Téléphone</h1>
              </div>
              <h1 className="text-xl font-semibold py-2 px-4 underlined">
                05 40 73 60 90
              </h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
