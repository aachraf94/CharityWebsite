import { useEffect, useState } from "react";
import DashboardNavbar from "../dashboardsNavbars/DashboardNavbar";
import notification from "../FrontAssets/images1/notification.svg";
import search from "../FrontAssets/images1/search.svg";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { api } from "../../utils/api";
const dashboard = () => {
  const navigate = useNavigate("");
  const[role,setRole]=useState("ADMIN");
  useEffect(() => {
    if(localStorage.getItem("token")==null){
        navigate("/");

        return;
    }
    const data = {
      email: jwt_decode(localStorage.getItem("token")).user,
    };
    console.log("welcome ",data.email);
    api.post("/getrole", data).then(res=>{console.log(res.data.role);setRole(res.data.role)});
    console.log("WEWE ",role);
    if(role!=="ADMIN"){
        navigate("/");
        return;
    }
}

, []);
console.log(role)
  return (
    <div>
      <div className="flex flex-row">
        <DashboardNavbar />
        <div className=" w-[100%]">
          {/* Write your code here */}
          <div className=" m-8 flex flex-row justify-between ">
            <div className="bg-white flex flex-row w-[80%] ml-[5%]  py-2 px-3">
              <img src={search}></img>
              <input
                className="border-none outline-none  text-[#4C4C4C] placeholder-[#4C4C4C]  w-[80%] ml-2 "
                type="text"
                placeholder=" Rechercher un besoin, évenement, blog ..."
              />
            </div>
            <div className="bg-[#4C4C4C] rounded-full ml-[16%] ">
              <img src={notification} className="p-2"></img>
            </div>
          </div>
          <h3 className="font-bold text-2xl text-[#2E3840] ml-16">
            les 30 derniers jours
          </h3>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
