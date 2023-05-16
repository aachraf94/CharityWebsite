import { useEffect, useState } from 'react';
import {RiErrorWarningLine} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import './PopUpWarning.css';

function PopUpWarning() {
  const [showPopup, setShowPopup] = useState(true);
 
  const handleClosePopup = () => {
    setShowPopup(false);
  }



  const handleConfirm = () => {
    // Handle confirm logic here
  }

  const handleCancel = () => {
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <div className="bg-blue-400 h-screen flex justify-center items-center bg-black opacity-75">
          <div className="box-sizing border-box mx-auto flex flex-col items-center justify-start p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
            <div className="flex items-center justify-between w-full border-b-[1px] border-white pb-1 pr-2">
              <h1 className="text-yellow-300 text-2xl relative">
                <span className="">Confirmer</span>
              </h1>
              <div className="flex self-end items-center">
                <button onClick={handleClosePopup}>
                  <AiOutlineClose size={20} className='' />
                </button>
              </div>
            </div>
            <RiErrorWarningLine size={220}/>
            <h3 className="text-center text-white text-lg font-normal">
              Cette action va être permanente, êtes-vous sûr de cette action?
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
                <button onClick={handleCancel} className="flex justify-center items-center p-2 md:p-4 bg-white text-black text-lg font-bold rounded-xl w-full md:w-auto">
                  Annuler
                </button>
                <button onClick={handleConfirm} className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto">
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpWarning;
