import image from '../images1/Chamel.png';
import Logo from '../images1/LOGO.png' ;
import dash from '../images1/dashboard.svg'
import dash2 from '../images1/dash2.svg'
import dash3 from '../images1/dash9.svg'
import dash4 from '../images1/dash4.svg'
import dash5 from '../images1/dash5.svg'
import dash6 from '../images1/dash6.svg'
import dash7 from '../images1/dash7.svg'
import dash8 from '../images1/dash8.svg'
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const NécessiteuxNavbar = () => {

    const handleLogout = async () => {
        localStorage.clear();
        window.location.href = "/login";
      };

    const [url, setUrl] = useState("");
    const [email,setEmail]=useState("");
    useEffect(() => {
      const data={
        email:jwt_decode(localStorage.getItem("token"))
      }
      setEmail(data.email.user)

     
      fetch("http://localhost:3030/getphoto", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
  
    },
  })
    .then((response) => response.json())
    .then((response) => {
      setUrl(response.url);
    })
    .catch((error) => {
      console.error(error);
    });
  
    },[]);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    useEffect(() => {
      
      fetch('http://localhost:3030/getuser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setFirstname(data.firstname);
          setLastname(data.lastname);
      
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    return ( 
            <div className="w-64  flex flex-col bg-[#2E3840]">
                <div className="flex items-center justify-center mt-4 mb-2 mr-4 ml-4">
                    <a href="/"><img
                    src={Logo}
                    height="100%"
                    weight="100%"
                    alt="Logo de la Fondation Coeur Espoir"
                    className="h-8   "
                    /></a>
                </div>
                <div className=" mb-4 flex flex-col items-center justify-center">
                    <div className="image p-4 m-1 w-32  ">
                        <img src={url} className='rounded-full ' style={{ width: "96px", height: "94px" }} ></img>
                    </div>
                    <div className='rounded-xl mt-1 mb-2 '>
                        <h1 className='text-3xl text-white'>{ lastname + " " +firstname } </h1>
                    </div>
                    <div className='rounded-xl  mb-4'>
                        <h2 className='text-l text-[#808080]'>{email}</h2>
                    </div>
                </div>
                <div className='rounded-xl mt-1  flex flex-row items-center justify-center'>
                    <img src={dash} className='mr-2 w-4'></img>
                    <h1 className='text-xl text-white font-semibold'>Menu Admin</h1>
                </div>
                <div className=' h-[1px] bg-white mb-1 mr-4 ml-4 mt-1 '>
                </div>
                <div>
                    <div className='rounded-lg mt-4  flex flex-row items-center justify-start p-1 bg-[#2E3840]  '>
                        <img src={dash2} className='mr-2 w-4 ml-12 '></img>
                     < a href="/dashboard">   <h1 className='text-xl text-white font-semibold '>Dashboard</h1></a>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash3} className='mr-2 w-4 ml-12'></img>
                     <a href="/utilisateurs">   <h1 className='text-xl text-white font-semibold '>Utilisateurs</h1></a>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash4} className='mr-2 w-4 ml-12 '></img>
                       <a href="/transactions"> <h1 className='text-xl text-white  font-semibold  '>Transactions</h1></a>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-white  '>
                        <img src={dash5} className='mr-2 w-4 ml-12 invert'></img>
                      <a href="/necessiteux">  <h1 className='text-xl text-black  font-semibold '>Nécessiteux</h1></a>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash6} className='mr-2 w-4 ml-12'></img>
                      <a href="/stock">  <h1 className='text-xl text-white font-semibold '>Stock</h1></a>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash7} className='mr-2 w-4 ml-12'></img>
                 <a href="/participants">       <h1 className='text-xl text-white font-semibold '>Participants</h1></a>
                    </div>
                    <div className='rounded-lg mt-16  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash8} className='mr-2 w-4 ml-12 '></img>
                     <button onClick={() => handleLogout()}   ><h1 className='text-xl text-white font-semibold '>Déconnexion</h1></button>
                    </div>
                </div>
                <div className=' h-[1px] bg-white mb-24 mr-8 ml-8 mt-1 '>
                </div>
                    
            </div>
     );
}
 
export default NécessiteuxNavbar;