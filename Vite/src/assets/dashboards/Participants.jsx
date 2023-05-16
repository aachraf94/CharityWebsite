import notification from '../images1/notification.svg';
import search from '../images1/search.svg';
import deleter from '../images1/delete.svg'
import triangle from '../images1/triangle.svg';
import React, { useEffect, useState } from 'react';
import ParticipantsNavbar from "../dashboardsNavbars/ParticipantsNavbar";
import PopUpWarning from "../PopUpWarning"
import ModifierParticipant from "../ModifierParticipant"
const Participants = () => {
  
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const handleCheckboxChange = (event, participant) => {
    
    if (event.target.checked) {
      setIsHidden(!isHidden)
      setSelectedParticipants((prevSelectedParticipants) => [...prevSelectedParticipants, participant]);
    } else {
      setIsHidden(!isHidden)
      setSelectedParticipants((prevSelectedParticipants) =>
        prevSelectedParticipants.filter((selectedParticipant) => selectedParticipant.id !== participant.id)
      );
    }
  };
  const [participants, setParticipants] = useState([]);
  const [showPopup1, setShowPopup1] = useState(false);
  const handleModifierClick = () => {
    setShowPopup1(true);
  };
  const handlePopupClose1 = () => {
    setShowPopup1(false);
  };

  const handleDeleteClick = () => {
    setShowPopup2(true);
  };

  useEffect(() => {

    fetch("http://localhost:3030/listeparticipants", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setParticipants(data)
      })
  }, []);

  const handleNom = async () => {
    fetch("http://localhost:3030/trinomparti", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => { 
        setParticipants(data)

      })
    }

    const handleEmail = async () => {
      fetch("http://localhost:3030/triemailparti", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(response => response.json())
        .then(data => { 
          setParticipants(data)
  
        })
      }

  const [isHidden, setIsHidden] = useState(false);

  const handleCheckboxChange2 = () => {
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
      // checkbox.checked = maincheck[0].checked;
      
      checkbox.checked = maincheck[0].checked;
    });
    handleCheckboxChange2(event);
  };

  const handleAllCheckboxChange = () => {
    handleCheckboxChange();
    handleAllChecked();
  };



  return (
    <div>
      <div className="flex flex-row bg-[#F5F5F5]">
        <ParticipantsNavbar />
        <div className=" w-[100%]">
          {/* Write your code here */}
          <div className=" m-8 flex flex-row justify-between ">
            <div className="bg-white flex flex-row w-[80%] ml-[5%]  py-2 px-3">
              <img src={search}></img>
              <input className="border-none outline-none  text-[#4C4C4C] placeholder-[#4C4C4C]  w-[80%] ml-2 focus:placeholder-transparent " type="text" placeholder=" Rechercher un besoin, évenement, blog ..." />
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
              <button onClick={handleModifierClick} className="font-bold text-[#4C4C4C]  rounded-xl bg-white py-2 px-4 ">Modifier</button>
              <div className="flex flex-row justify-between rounded-xl bg-[#EF4135] py-2 px-4 ml-4 mr-4">
                <button className="font-bold text-white "> Supprimer </button>

                <img src={deleter} className="w-[18px] ml-2"></img>
              </div>
            </div>


          </div>
          <div className="rounded-xl bg-[#2E3840] py-2 ml-8 mt-4  mr-4 flex flex-row justify-between h-14 items-center">
            <div className=" w-[8%]">
              <input type="checkbox" onChange={handleAllChecked} className="maincheck ml-4 mb-2 invert" ></input>
            </div>
            <div className="flex flex-row justify-start items-center mb-2 w-[22%]">
              <h2 className="text-white font-semibold text-md ">Nom  </h2>
              <button onClick={handleNom} > <img src={triangle}></img></button>
            </div>
            <div className="flex flex-row justify-start items-center mb-2 w-[30%] ">
              <h2 className="text-white font-semibold text-md ">Email</h2>
              < button onClick={handleEmail} ><img src={triangle}></img></button>
            </div>
            <h2 className="text-white font-semibold text-md mb-2 w-[20%] hidden md:block">Telephone</h2>
            <h2 className="text-white font-semibold text-md mb-2 w-[20%]" >Evenement</h2>
          </div>
          <div>
            {participants.length > 0 ? participants.map(participant => (
              <div key={participant.id} className="bg-white py-2 ml-8  mr-4 flex flex-row justify-between h-12 items-center -mt-2 mb-2 border-r-2 border-b-2 border-l-2 ">
                <div className="flex flex-row justify-between w-[8%]">
                  <input type="checkbox" onChange={(event) => handleCheckboxChange(event, participant)} className="ml-4" ></input>
                </div>
                <div className="flex flex-row justify-start items-center w-[22%]">
                  <h2 className="text-[#2E3840] font-semibold text-md ">{participant.lastname}</h2>
                </div>
                <div className="flex flex-row justify-start items-center w-[30%] ">
                  <h2 className="text-[#2E3840] font-semibold text-md ">{participant.email}</h2>
                </div>
                <h2 className="text-[#2E3840] font-semibold text-md w-[20%] hidden md:block ">{participant.phone}</h2>
                <h2 className="text-[#2E3840] font-semibold text-md w-[20%]">{participant.event_id}</h2>
              </div>
            )) : <p></p>}
          </div>
          {showPopup1 && selectedParticipants.length === 1 && (<ModifierParticipant email={selectedParticipants[0].email}
            onClose={handlePopupClose1} />)}
        </div>
      </div>

    </div>
  );
}
export default Participants;