import axios from 'axios'
import { useEffect, useState } from 'react';

const Afficherprofil = ({profils,role}) => {

    const [url , setUrl ] =  useState("");
    useEffect(() => {
      fetch('http://localhost:3030/getphoto', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => response.json())
    
    .then(data => {
     setUrl(data.url)
    })
    .catch(error => {
      console.error(error);
    });})




    return ( 
        <div className='flex flex-row justify-center mb-8'>
        {profils.map(profil => (
        <div className="profil-preview  flex flex-col justify-center" key={profil.id} >
            <div className='w-full flex justify-center'>
            <div className='w-[200px] h-[200px] mt-24 mb-12 mr-16 flex justify-center'> 
              <img
                src={url}
                alt=""
                className="border-dashed border-4 border-gray-600 p-2 hover:rotate-[360deg] hover:duration-700 rounded-full"
              />
              </div>
              </div>
              <div className='flex flex-row justify-between w-[100%]'>
              <div className='flex flex-col justify-start'>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Nom  : </h2>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Prenom  : </h2>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Role  : </h2>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Departement  : </h2>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Evenements  : </h2>
          <h2 className='text-4xl p-6 underline underline-offset-8'>Blogs : </h2>
          </div>

          <div className='flexflex-col justify-end mb-24'>
          <h2 className='text-4xl font-black p-6'>{ profil.nom }</h2>
          <h2 className='text-4xl font-black p-6'>{ profil.prenom }</h2>
          <h2 className='text-4xl font-black p-6'>{ profil.role }</h2> 
          <h2 className='text-4xl font-black p-6'>{ profil.departement }</h2>
          <h2 className='text-4xl font-black p-6'>{ profil.evenements }</h2> 
          <h2 className='text-4xl font-black p-6'>{ profil.blogs }</h2>
          </div>
          </div>
        </div>
        ))}
        </div>
     );
}
 
export default Afficherprofil;