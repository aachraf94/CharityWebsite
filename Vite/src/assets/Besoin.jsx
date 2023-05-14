import "./Besoin.css";
import img from "./FrontAssets/Donation_ Besoin visiteur.png";
import log from "./FrontAssets/Logo.png";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

function Besoin() {
  const formik = useFormik({
    initialValues: {
      nom: "",
      montant: "",
      adresse: "",
      contenu: "",
      numero: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3030/ajouterautre",
          values
        );

        window.location.href = "/Apropos";
      } catch (err) {
        if (err.response.status === 404) {
          console.log("RERERE");
          alert("Email does not exist!");
        } else {
          alert("Wrong password check again...");
        }
      }
    },
  });

  return (
    <>
      <Link
        href="/"
        class="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4"
      >
        <img src={log} alt="" className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12" />
      </Link>
      <div className="relative"></div>
      <span className="text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-44 flex-none order-0 flex-grow-0 ml-7">
        N'est pas encore un membre
      </span>
      <div className="fixed top-2 right-0 m-4">
        <Link
          to="/rejoignez"
          className="bg-transparent rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2"
        >
          Rejoignez Nous
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-blue-400 h-screen flex justify-center items-center">
          <img src={img} alt="" className="h-screen w-full object-cover" />
          <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
            <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
              Besoin
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
              <span className="Wilaya  absolute bottom-3 right-[29%] text-gray-400 text-sm duration-500 pointer-events-none">
                Code CCP
                <AiOutlineMail
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={16}
                />
              </span>
            </div>

            <div className="relative w-full mb-4 flex justify-between items-center ">
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
                Adresse
                <HiIdentification
                  className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </span>
              <input
                className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
                type="text"
                placeholder=""
                id="contenu"
                required
                value={formik.values.contenu}
                onChange={formik.handleChange}
              />
              <span className="Wilaya  absolute bottom-3 right-[30%] text-gray-400  text-sm duration-500 pointer-events-none">
                Contenu
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
                id="description"
                required
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <span className="Wilaya  absolute bottom-3 right-[27.5%] text-gray-400 text-sm duration-500 pointer-events-none">
                Description
              </span>
            </div>

            <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
              <button className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md  py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
                Faire une donation
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Besoin;
