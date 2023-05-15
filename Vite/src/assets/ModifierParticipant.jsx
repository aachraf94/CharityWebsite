import { useEffect, useState } from 'react';
import './ModifierParticipant.css';
import {AiOutlineClose} from 'react-icons/ai';
import axios from 'axios';
import { useFormik } from 'formik';
function ModifierParticipant({id}){


  const formik = useFormik({
    initialValues : {
      id : "",
    nom :"" ,
    prenom : "",
    phone : "",
    email : "",

    },

  onSubmit: async (values) => {
    axios.post("http://localhost:3030/updateparticipant",values , {

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }) 

      .catch((error) => {
        console.error(error);
      });
  },
});
 
 id=1;
  const [data,setData]=useState();
  useEffect(()=>{ fetch("http://localhost:3030/getparticipant", {
    method: "GET",
    
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      id : id ,
    }})
  .then(response=>response.json())
  .then(res=>{setData(res)
  formik.setFieldValue("id",res.id)
  formik.setFieldValue("nom", res.lastname); // set initial value of nom field
  formik.setFieldValue("email", res.email);
  formik.setFieldValue("phone", res.phone);})
  },[])

  console.log(data)

return(

  



<>


<div className=" h-screen flex justify-center items-center bg-black">
<div className="absolute inset-0 flex justify-center items-center">

<div className="bg-opacity-20 backdrop-filter mx-auto flex flex-col justify-center items-center p-4 md:p-8 gap-4 text-red w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
  <div className="flex justify-between items-center w-full">
    <h2 className="text-center text-yellow-300 text-4xl font-nohemi">
      Modifier les infos d'un participant
    </h2>
    <button className="focus:outline-none">
      <AiOutlineClose size={48} />
    </button>
  </div>
  <form onSubmit={formik.handleSubmit}>
      <div className="bg-red rounded-lg px-4 py-6 mt-4 w-full sm:w-5/6 md:w-1/2 lg:w-2/3 xl:w-4/5">
        {/* second container */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-[5.8rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Nom</span>
            <input value={formik.values.nom} id="nom" onChange={formik.handleChange} type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2  border-yellow-300" />
          </div>
          <div className="flex items-center justify-center gap-[2.9rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">téléphone</span>
            <input id="phone" value={formik.values.phone} onChange={formik.handleChange}  type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" />
          </div>
          <div className="flex items-center justify-center gap-[4.1rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Adresse</span>
            <input  id="email" value={formik.values.email} onChange={formik.handleChange} readOnly type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" />
          </div>
          <div className="flex items-center justify-center gap-[4.4rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">priorité</span>
            <input type="number" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" />
          </div>
          <div className="flex items-center justify-center gap-[4rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Satisfait</span>
            <input type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" />
          </div>
         
        </div>

      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
          <button className="flex justify-center items-center p-2 md:p-4 bg-white text-black text-lg font-bold rounded-xl w-full md:w-auto">
            Annuler
          </button>
          <button type = 'submit' className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto">
            Sauvegarder 
          </button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>

</>
)
}

export default ModifierParticipant;