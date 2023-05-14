import TransactionsNavbar from "../dashboardsNavbars/TransactionsNavbar";
import notification from '../images1/notification.svg';
import search from '../images1/search.svg';
import deleter from '../images1/delete.svg'
import triangle from '../images1/triangle.svg';
import React, { useState } from 'react';

const Transactions = () => {
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
    const [transactions, setTransactions] = useState([
        {
          id: 1,
          date:'02/02/2023',
          codeOp:'067HJRG',
          ccp:'9955286532',
          nom: 'Bouacha',
          email: 'lc_bouacha@esi.dz',
          montant:'+6000,00',
          solde:'4803,00'
        },
        {
            id: 2,
            date:'01/01/2022',
            codeOp:'895VURG',
            ccp:'5264832895',
            nom: 'Baiteche',
            email: 'ls_baiteche@esi.dz',
            montant:'-3000,00',
            solde:'2013,00'
          },
          {
            id: 3,
            date:'02/06/2021',
            codeOp:'067VHJK',
            ccp:'5115215634',
            nom: 'Benyahia',
            email: 'ly_benyahia@esi.dz',
            montant:'+2000,00',
            solde:'6993,00'
          },
          {
            id: 4,
            date:'21/12/2022',
            codeOp:'856GHYJ',
            ccp:'1112225553',
            nom: 'Melzi',
            email: 'la_melzi@esi.dz',
            montant:'+1000,00',
            solde:'8043,00'
          }
      ]);
      const handleAllCheckboxChange = () => {
        handleCheckboxChange();
        handleAllChecked();
      };
    return ( 
        <div>
            <div className="flex flex-row bg-[#F5F5F5]">
                <TransactionsNavbar />
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
                    <div className=" w-[6%]">
                    <input type="checkbox" onChange={handleAllCheckboxChange} className="maincheck ml-4 mb-2 invert" ></input>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[15%]">
                    <h2 className="text-white font-semibold text-md ">Date  </h2>
                    <img src={triangle}></img>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[13%] hidden md:inline-flex">
                    <h2 className="text-white font-semibold text-md ">Code Op</h2>
                    <img src={triangle}></img>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[16%] ">
                    <h2 className="text-white font-semibold text-md ">CCP</h2>
                    <img src={triangle}></img>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[13%] ">
                    <h2 className="text-white font-semibold text-md ">Nom</h2>
                    <img src={triangle}></img>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[20%] hidden lg:inline-flex">
                    <h2 className="text-white font-semibold text-md ">Email</h2>
                    <img src={triangle}></img>
                    </div>
                    <h2 className="text-white font-semibold text-md mb-2 w-[15%] ">Montant</h2>
                    <h2 className="text-white font-semibold text-md mb-2 w-[12%]" >Solde</h2>
                    </div>
                    <div>
                    {transactions.map(transaction => (
                    <div className="bg-white py-2 ml-8  mr-4 flex flex-row justify-between h-12 items-center -mt-2 mb-2 border-r-2 border-b-2 border-l-2 ">
                    <div className=" w-[6%]">
                    <input type="checkbox" onChange={handleAllCheckboxChange} className="maincheck ml-4 mb-2 " ></input>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[15%]">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{transaction.date} </h2>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[13%] hidden md:inline-flex">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{transaction.codeOp}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[16%] ">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{transaction.ccp}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[13%] ">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{transaction.nom}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[20%] hidden lg:inline-flex">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{transaction.email}</h2>
                    </div>
                    <h2 className="font-semibold text-md mb-2 w-[15%]" style={{ color: transaction.montant.startsWith('+') ? '#2ECC71' : '#F60505' }}>{transaction.montant}</h2>
                    <h2 className="text-[#2E3840] font-semibold text-md mb-2 w-[12%]" >{transaction.solde}</h2>
                    </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Transactions;
