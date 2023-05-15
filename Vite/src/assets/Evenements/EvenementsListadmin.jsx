import { Link, useNavigate } from "react-router-dom";
import image1 from "../images1/event1.png";
import image2 from "../images1/event2.png";
import image3 from "../images1/event3.png";
import placeicon from "../images1/place.svg";
import { api } from "../../utils/api";
import { useState } from "react";
import Inscription from "./Inscription";
import "../../Evenements.css"

const ablurer =Document.g
const EvenementsListadmin = ({ evenements }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [blurMainPage, setBlurMainPage] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    setBlurMainPage(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setBlurMainPage(false);
  };

  const navigate = useNavigate("/");
  const archiver = (id) => {
    const data = {
      id: id,
    };
    api.post("/archiveEvent", data).catch((err) => {
      alert("Erreur!");
      navigate("/");
    });
    alert("Bien archivées");
    navigate("/");
  };
  const [inscrire, setInscrire] = useState(false);

  const handleInscrire = () => {setInscrire(true);}
  return (
    <div className="" id="blurg">
    <div>
      <div className="bg-[#F9DBBB4C] backdrop-blur-sm Navbar z-1 fixed top-4 left-0 right-0 mt-16 flex flex-row justify-between h-16">
        <h1 className="text-[50px] font-black color-[#2E3840] ml-16 mb-4 -mt-2 ">
          Evenements
        </h1>

        <Link
          to="/AjouterEvent"
          style={{ backgroundColor: "#2E3840" }}
          className="font-extrabold  cart-btn mr-16  py-2  self-center"
        >
          Ajouter un évenement
        </Link>
      </div>
      <div className="evenements-list mt-32">
        {evenements.map((evenement) => (
          <div
            className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between"
            key={evenement.id}
          >
            {evenement.id % 2 === 1 ? (
              <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between">
                <div className="flex justify-start w-[100%] rounded mb-12 px-4">
                  <img
                    src={
                      evenement.photoUrl

                    }
                    alt=""
                  />
                </div>
                <div className="px-8 mr-4 py-12 w-120">
                  <h2
                    style={{ color: "#2E3840" }}
                    className="text-5xl font-bold py-4"
                  >
                    {evenement.title}
                  </h2>

                  <p className="font-bold py-2 flex">
                    <img src={placeicon} alt="" className="px-3" />
                    {evenement.location}
                  </p>
                  <p className="font-black">{evenement.description}</p>
                  <div className="flex space-x-2 mt-6">
                    <button
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Voir Plus
                    </button>
                    {<></>}
                    <button
                      onClick={()=>{
                        const ablurer = document.querySelector("#blurg");
                        if (
                          ablurer.classList.contains("blur")){ablurer.classList.remove("blur");} else {
                            ablurer.classList.add("blur");
                          };
                          const nablurer = document.querySelector("#nblurg");
                        if (
                          nablurer.classList.contains("aaaaa")){ablurer.classList.remove("aaaaa");} else {
                            nablurer.classList.add("aaaaa");
                          }
                          handleInscrire();
                      
                      }}
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Inscrire
                    </button>
                    {inscrire && <Inscription event_id={evenement.id}/>}
                    <button
                      onClick={() => archiver(evenement.id)}
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Archiver
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
            {evenement.id % 2 === 0 ? (
              <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between">
                <div className="px-8 mr-4 py-12 w-120">
                  <h2
                    style={{ color: "#2E3840" }}
                    className="text-5xl font-bold py-4"
                  >
                    {evenement.title}
                  </h2>
                  <p className="font-bold py-2 flex">
                    <img src={placeicon} alt="" className="px-3" />
                    {evenement.location}
                  </p>
                  <p className="font-black">{evenement.description}</p>
                  <div className="flex space-x-2 mt-6">
                  <button
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Voir Plus
                    </button>
                    <button
                      onClick={() => setInscrire(!inscrire)}
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Inscrire
                    </button>
                    {inscrire && <Inscription event_id={evenement.id}/>}
                    <button
                      onClick={() => archiver(evenement.id)}
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Archiver
                    </button>
                  </div>
                </div>
                <div className="flex justify-end w-[100%] rounded mb-12 px-4">
                  <img
                    src={
                      evenement.photoUrl
                                        }
                    alt=""
                  />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EvenementsListadmin;
