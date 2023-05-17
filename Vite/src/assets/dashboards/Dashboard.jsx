import image from "../FrontAssets/images1/Chamel.png";
import Logo from "../FrontAssets/images1/LOGO.png";
import dash from "../FrontAssets/images1/dashboard.svg";
import dash2 from "../FrontAssets/images1/dash2.svg";
import dash3 from "../FrontAssets/images1/dash9.svg";
import dash4 from "../FrontAssets/images1/dash4.svg";
import dash5 from "../FrontAssets/images1/dash5.svg";
import dash6 from "../FrontAssets/images1/dash6.svg";
import dash7 from "../FrontAssets/images1/dash7.svg";
import dash8 from "../FrontAssets/images1/dash8.svg";
import notification from "../FrontAssets/images1/notification.svg";
import search from "../FrontAssets/images1/search.svg";
import img from "../FrontAssets/images1/Ajouter Un Evenement.png";
import img1 from "../FrontAssets/images1/event1.png"
import img2 from "../FrontAssets/images1/event2.png"
import img3 from "../FrontAssets/images1/event3.png"
import { RiCloseCircleFill } from "react-icons/ri";
import Dashboardnavbar from "../dashboardsNavbars/DashboardNavbar";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router";
const DashboardNavbar = ({ role }) => {
  const [stock, setStock] = useState([]);
  const [besoins, setBesoins] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate("");
  if (role !== "ADMIN") {
    navigate("/");
    return;
  } else {
    useEffect(() => {
      fetch("http://localhost:3030/listestock", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) setStock(data);
          else setStock([]);
        });
    }, []);

    useEffect(() => {
      fetch("http://localhost:3030/listebesoins", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) setBesoins(data);
          else setBesoins([]);
        });
    }, []);
    useEffect(() => {
      fetch("http://localhost:3030/listeevenements", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) setEvenements(data);
          else setEvenements([]);
        });
    }, []);

    useEffect(() => {
      fetch("http://localhost:3030/waitings_dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
    }, []);

    return (
      <div>
        <div className="flex flex-row">
          <Dashboardnavbar />
          <div className=" w-[100%]">
            <div className=" m-8 flex flex-row justify-between">
              <div className="bg-white flex flex-row w-[80%] ml-[5%]  py-2 px-3">
                <img src={search}></img>
                <input
                  class="  text-[#4C4C4C] placeholder-[#4C4C4C]  w-[80%] ml-2 "
                  type="text"
                  placeholder=" Rechercher un besoin, évenement, blog ..."
                />
              </div>
              <div className="bg-[#4C4C4C] rounded-xl ml-[16%] ">
                <img src={notification} className="p-2 "></img>
              </div>
            </div>
            <div className="flex flex-row  w-[100%]  ">
              <div className="ml-[4%]  w-[20%] ">
                <img src={img} className=" rounded-xl  " alt="Preview" />
              </div>
              <div className="ml-[2%]  w-[20%] ">
                <img src={img1} className=" rounded-xl" alt="Preview" />
              </div>
              <div className="ml-[2%]  w-[20%] ">
                <img src={img2} className=" rounded-xl" alt="Preview" />
              </div>
              <div className="ml-[2%]  w-[20%] ">
                <img src={img3} className=" rounded-xl" alt="Preview" />
              </div>
              <div className="ml-[2%] mr-[4%]  w-[20%] ">
                <img src={img} className=" rounded-xl" alt="Preview" />
              </div>
            </div>
            <div className="mt-6 mr-12 mb-8">
              <div className="flex flex-row  ">
                <div className="bg-white shadow-xl w-full mt-[1%] ml-[4%] h-full rounded-xl p-8">
                  <p className="font-bold mt-[4%] ml-[1%] text-3xl ">
                    Evenements
                  </p>
                  <div className="flex items-center justify-between w-full border-b-[1px] border-white   mt-6">
                    <p className=" w-[50%] font-bold">Nom</p>
                    <p className="w-[30%] font-bold">Endroit</p>
                    <p className="w-[20%] font-bold ">Date</p>
                  </div>
                  {evenements.map((Evenement) => (
                    <div
                      key={Evenement.id}
                      className="flex items-center justify-between w-full  border-white   mt-6"
                    >
                      <p className="  w-[50%]">{Evenement.title}</p>
                      <p className=" w-[30%]">{Evenement.location}</p>
                      <p className=" w-[20%]">{Evenement.date}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white shadow-xl  p-8 mt-[1%] ml-[3%]  h-full w-full rounded-xl ">
                  <p className="font-bold mt-4 ml-1 text-3xl">Stock</p>
                  <div className="flex items-center justify-between w-full border-b-[1px] border-white  mt-6">
                    <p className="w-[70%] font-bold ">Materiel</p>
                    <p className=" w-[30%] font-bold ">Quantite:</p>
                  </div>
                  {stock.map((stock) => (
                    <div
                      key={stock.id}
                      className="flex items-center justify-between w-full  border-white   mt-6"
                    >
                      <p className="w-[70%] ">{stock.materiel}</p>
                      <p className=" w-[30%]">{stock.quantite}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white shadow-xl w-full mt-[1%] ml-[3%]  p-8  h-full rounded-xl ">
                  <p className="font-bold mt-4  text-3xl text-center  ">
                    Besoin
                  </p>
                  <div className="flex items-center justify-between w-full border-b-[1px] border-white  mt-6">
                    <p className=" font-bold w-[60%]">Materiel</p>
                    <p className="font-bold w-[40%] ">Quantite:</p>
                  </div>

                  {besoins.map((Besoin) => (
                    <div
                      key={Besoin.id}
                      className="flex items-center justify-between w-full  border-white  mt-6"
                    >
                      <p className=" w-[60%]">{Besoin.content}</p>
                      <p className=" w-[40%]">{Besoin.quantite}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white shadow-xl w-[63%] p-8 ml-[4%]   rounded-xl ">
                <p className="font-bold mt-4 ml-1 text-3xl  ">
                  Les demandes d'adhesion{" "}
                </p>
                <div className="flex items-center justify-between w-full border-b-[1px] border-white  mt-6">
                  <p className=" w-[25%] font-bold ">Nom</p>
                  <p className=" w-[25%] font-bold">Prenom</p>
                  <p className=" w-[25%] font-bold">Wilaya</p>
                  <p className=" w-[25%] font-bold">Email</p>
                </div>
                {users.map((Adhesion) => (
                  <div
                    key={Adhesion.id}
                    className="flex  justify-between w-full  border-white  mt-[4%]"
                  >
                    <p className="w-[25%] ">{Adhesion.lastname}</p>
                    <p className=" w-[25%]">{Adhesion.firstname}</p>
                    <p className="w-[25%]">{Adhesion.wilaya}</p>
                    <p className="w-[25%]">{Adhesion.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardNavbar;
