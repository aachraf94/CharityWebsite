// import './AjouterEvent.css';
import img from '../images1/aniss1.png'
import log from '../images1/aniss2.png'
import {HiIdentification} from 'react-icons/hi'
import {MdOutlinePlace} from 'react-icons/md'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { api } from '../../utils/api';

function AjouterEvent(){
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      description: "",
      location: "",
      photo: 0,
    },
    onSubmit: async (values) => {
      const data = {
        title: formik.values.title,
        date: formik.values.date,
        description: formik.values.date,
        location: formik.values.location,
        photo: formik.values.photo,
      };
      api.post("/addEvent", data).then((res) => {
        alert("Evenement ajouté avec succés");
        navigate("/");
      });
    },
  });
return(
<>
<Link to="/" className="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
  <img src={log} alt="" className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</Link>

<div className="bg-blue-400 h-screen flex justify-center items-center">
  <img src={img} alt="" className="h-screen w-full object-cover"/>
  <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-[#f9dbbb4c] absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-[#f9dbbb4c] shadow-lg rounded-lg">
    <h2 className="text-center text-[#f9dbbb] text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">Ajouter un évènement</h2>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black mr-2"
        type="text"
        placeholder=""
        id="nom"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Titre
      </span>
      <input
        className="w-5/12 h-8 bg-transparent  border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black ml-2 "
        type="number"
        min={1}
        max={58}
        // value={age}
        // onChange={handleInputChange}
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[19%] text-gray-400 text-sm duration-500 pointer-events-none">
        Liste des participants
        <HiIdentification className="absolute right-[8.5rem] top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

      </span>
    </div>


    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black"
        type="datetime-local"
        placeholder=""
        id="name"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Date
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black ml-2"
        type="text"
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[27.7%] text-gray-400  text-sm duration-500 pointer-events-none">
        Description
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black"
        type="text"
        placeholder=""
        id="password"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Endroit
        <MdOutlinePlace className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#2e3840] focus:text-black ml-2"
        type="file"
        placeholder=""
        id="wilaya"
        required
      />
    
    </div>
   
    
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <Link to="/" className="flex justify-center items-center bg-[#2e3840] rounded-xl shadow-md py-4 px-8 text-[#f9dbbb] text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
      Ajouter 
      </Link>
    </div>
  </div>

</div>








</>
)
}

export default AjouterEvent;