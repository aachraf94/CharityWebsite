import { useNavigate } from 'react-router';
import image1 from '../images1/event1.png';
import image2 from '../images1/event2.png';
import image3 from '../images1/event3.png';
import placeicon from '../images1/place.svg';
import { api } from "../../utils/api";
import Inscription from "./Inscription";
import "../../Evenements.css"
import { useEffect, useState } from "react";

const EvenementsList = ({ evenements }) => {
  const navigate = useNavigate("/");
  const [inscrire, setInscrire] = useState(false);
  const[selectedEventId,setSelectedEventId] = useState(0);
  return (
    <div className="evenements-list">
      {evenements.map((evenement) => (
   
        <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between" key={evenement.id}>
          {(evenement.id % 2 === 1) ? (
           <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between"> 
          <div className="flex justify-start w-[100%] rounded mb-12 px-4">
            <img src={
             evenement.photoUrl
            } alt="" />
          </div>
          <div className="px-8 mr-4 py-12 w-120">
            <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
              {evenement.title}
            </h2>
            
            <p className="font-bold py-2 flex"><img src={placeicon} alt="" className='px-3'  />{evenement.location}</p>
            <p className="font-black">{evenement.description}</p>
            <div className='flex justify-center mt-6'>
           
                                <button
                                
                    onClick={()=>{
                      setInscrire(!inscrire)
                       setSelectedEventId(evenement.id)}
                      }
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btn flex r transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
                    >
                      Inscrire
                    </button>
                    {inscrire && <Inscription event_id={selectedEventId}/>}
              </div>
          </div>
          </div>): null}
          {(evenement.id % 2 === 0) ? (
           <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between"> 
          
          <div className="px-8 mr-4 py-12 w-120">
            <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
              {evenement.title}
            </h2>
            
            <p className="font-bold py-2 flex"><img src={placeicon} alt="" className='px-3'  />{evenement.location}</p>
            <p className="font-black">{evenement.description}</p>
            <div className='flex justify-center mt-6'>
           
            <button  
            
            onClick={()=>{
              setInscrire(!inscrire)
               setSelectedEventId(evenement.id)}
              }
            style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btn flex transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]">Inscrire</button>
              {inscrire && <Inscription event_id={selectedEventId}/>}
              </div>
          </div>
          <div className="flex justify-end w-[100%] rounded mb-12 px-4">
            <img src={
              evenement.photoUrl
            } alt="" />
          </div>
          </div>): null}
        </div>
      ))}
    </div>
  );
};

export default EvenementsList;
