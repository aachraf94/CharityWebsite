import notification from '../images1/notification.svg';
import search from '../images1/search.svg';
import deleter from '../images1/delete.svg'
import triangle from '../images1/triangle.svg';
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import StocksNavbar from "../dashboardsNavbars/StocksNavbar";

const Stocks = () => {

  const [stock, setStock] = useState([]);

  const handleMateriel = async () => {
    fetch("http://localhost:3030/trimaterielstock", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
         setStock(data)
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleQuantite = async () => {
    fetch("http://localhost:3030/triquantitestock", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
         setStock(data)
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3030/listestock", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {if (data.length!==0) setStock(data)
      else setStock([])})
  }, []);

    const [isHidden, setIsHidden] = useState(false);

    const handleCheckboxChange = () => {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      let checkedCount = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          checkedCount++;
        }
      });
      setIsHidden(checkedCount >= 1);
    };
    const handleAllChecked = (event) => {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const maincheck = document.getElementsByClassName("maincheck");
        checkboxes.forEach((checkbox) => {
          checkbox.checked = maincheck[0].checked;
        });
        handleCheckboxChange(event);
      };
  
   
      const handleAllCheckboxChange = () => {
        handleCheckboxChange();
        handleAllChecked();
      };
    return ( 
        <div>
            <div className="flex flex-row bg-[#F5F5F5]">
                <StocksNavbar />
                <div className=" w-[100%]">
                    {/* Write your code here */}
                    <div className=" m-8 flex flex-row justify-between ">
                        <div className="bg-white flex flex-row w-[80%] ml-[5%]  py-2 px-3">
                        <img src={search}></img>
                    <input class="border-none outline-none  text-[#4C4C4C] placeholder-[#4C4C4C]  w-[80%] ml-2 focus:placeholder-transparent " type="text" placeholder=" Rechercher un besoin, évenement, blog ..." />   
                    </div>
                    <div className="bg-[#4C4C4C] rounded-full ml-[16%] ">
                        <img src={notification} className="p-2"></img>
                    </div>
                    </div>
                    <div>
                    {isHidden ? null : <div className="flex justify-start ml-6">
                    <h1 className="titre2">Aucune ligne n'est sélectionée</h1>
                    </div>}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="mr-4 ml-6 rounded-xl bg-[#4C4C4C] py-2 px-4">

                            <button className="text-white font-bold">Ajouter &nbsp;&nbsp; +</button>
                        </div>
                        <div className="flex flex-row" >
                        <button className="  font-bold text-[#4C4C4C]  rounded-xl bg-white py-2 px-4 ">Modifier</button>
                        <div className="flex flex-row justify-between rounded-xl bg-[#EF4135] py-2 px-4 ml-4 mr-4">
                        <button className="  font-bold text-white "> Supprimer </button>
                        <img src={deleter} className="w-[18px] ml-2"></img>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-[#2E3840] py-2 ml-8 mt-4  mr-4 flex flex-row justify-between h-14 items-center">
                    <div className=" w-[10%]">
                    <input type="checkbox" onChange={handleAllCheckboxChange} className="maincheck ml-4 mb-2 invert" ></input>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[30%]">
                    <h2 className="text-white font-semibold text-md ">Materiel  </h2>
                   <button onClick={handleMateriel} > <img src={triangle}></img></button>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[30%] ">
                    <h2 className="text-white font-semibold text-md ">Quantité</h2>
                    <button onClick={handleQuantite}> <img src={triangle}></img></button>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[30%] ">
                    <h2 className="text-white font-semibold text-md ">Description</h2>
                    <img src={triangle}></img>
                    </div>
                    </div>
                    <div>
                    {stock.map(stock => (
                    <div className="bg-white py-2 ml-8  mr-4 flex flex-row justify-between h-12 items-center -mt-2 mb-2 border-r-2 border-b-2 border-l-2 ">
                    <div className="flex flex-row justify-between w-[10%]">
                    <input type="checkbox" className="ml-4"onChange={handleCheckboxChange}></input>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[30%]">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{stock.materiel}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[30%] ">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{stock.quantite}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[30%] ">
                    <h2 className="text-[#2E3840] font-extrabold text-md  underline underline-offset-4 ">Voir Plus</h2>
                    </div>
                    </div> 
                      ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Stocks;