import { useEffect, useState } from 'react';
import './ModifierUtilisateur.css';
import {AiOutlineClose} from 'react-icons/ai';
import jwt_decode from "jwt-decode" 
import { useFormik } from 'formik';
import axios from 'axios';

function ModifierUtilisateur(){


    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [departement, setDepartement] = useState("");

    useEffect(() => {
        fetch("http://localhost:3030/getuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setPrenom(data.firstname);
            setNom(data.lastname);
            setEmail(data.email);
            setTelephone(data.phone);
            setDepartement(data.departement);
            formik.setFieldValue("nom", data.lastname); // set initial value of nom field
            formik.setFieldValue("prenom", data.firstname);
            formik.setFieldValue("email", data.email);
            formik.setFieldValue("phone", data.phone);
            formik.setFieldValue("departement", data.departement);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    
    const formik = useFormik({
        initialValues : {
        nom :"" ,
        prenom : "",
        phone : "",
        email : "",
        departement : "",

        },
   
      onSubmit: async (values) => {
        axios.post("http://localhost:3030/updateuser",values , {

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
    
    

   
 



return(

  
<>


<div className="h-screen flex justify-center items-center bg-black">
<div className="absolute inset-0 flex justify-center items-center">

<div className="bg-opacity-20 backdrop-filter mx-auto flex flex-col justify-center items-center p-4 md:p-8 gap-4 text-red w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
<h2 className="text-center text-yellow-300 text-4xl font-nohemi">
      Modifier un utilisateur
    </h2>
    <form onSubmit={formik.handleSubmit} >
      <div className="bg-red rounded-lg px-4 py-6 mt-4 w-full sm:w-5/6 md:w-1/2 lg:w-2/3 xl:w-4/5">
        {/* second container */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-[5.8rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Nom</span>
            <input  value={formik.values.nom} onChange={formik.handleChange} id="nom"type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2  border-yellow-300"  />
          </div>
          <div className="flex items-center justify-center gap-[4.2rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Prénom</span>
            <input  value={formik.values.prenom} onChange={formik.handleChange}id="prenom" type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" defaultValue={prenom}  />
          </div>
          <div className="flex items-center justify-center gap-[5.6rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap">Email</span>
            <input type="email" readOnly className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" defaultValue={email}  />
          </div>
          <div className="flex items-center justify-center gap-[2.9rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap" >Téléphone</span>
            <input   value={formik.values.phone} onChange={formik.handleChange}  id="phone"type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" defaultValue={telephone} />
          </div>
          <div className="flex items-center justify-center gap-[1.5rem]">
            <span className="text-yellow-300 text-xl font-medium whitespace-nowrap" >Departement</span>
            <input   value={formik.values.departement} onChange={formik.handleChange} id="departement" type="text" className="w-full rounded-md py-2 px-3 bg-transparent focus:outline-none border-x-2 border-y-2 border-yellow-300" defaultValue={departement} />
          </div>
         
        </div>

      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
         < a href="/dashboard"> <button type="button"className="flex justify-center items-center p-2 md:p-4 bg-white text-black text-lg font-bold rounded-xl w-full md:w-auto">
            Annuler
          </button></a>
          <button type="submit" className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto">
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

export default ModifierUtilisateur;