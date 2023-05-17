import Logo from '../FrontAssets/images1/LOGO.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Navbarmembre = () => {


  const [url, setUrl] = useState("");
 
  useEffect(() => {
   
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
     setUrl(response.url);

  })
  .catch((error) => {
    console.error(error);
  });

  },[]);

    const handleLogout = async () => {
     
      localStorage.clear();
      window.location.href="/login"
    }
    
  const scrollToBottom = () => {
    window.scrollTo({
      top: 99999,
      left: 99999,
      behavior: "smooth",
    });};
    return (  
    <nav style={{backgroundColor:'#2E3840'}} className="bg-black Navbar z-10 fixed top-0 left-0 right-0  text-white flex items-center justify-between h-20 py-3 px-12">
    <div className="flex items-center justify-start">
    <Link to="/"><img
      src={Logo}
      height="90%"
      weight="90%"
      alt="Logo de la Fondation Coeur Espoir"
      className="h-8 mr-2"
    /></Link>
    </div>
      <div className="  flex flex-row gap-4 justify-center font-ubuntu text-[17px] hidden md:flex" id="menu">
        <p className="mr-6">
        <Link to="/Apropos" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">A propos</Link>
        </p>
        <p className="mr-6">
        <Link to="/Evenements" className="text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Evenements</Link>
        </p>
        <p className="mr-6">
        <Link to="/NosBesoins" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Nos besoins</Link>
        </p>
        <p className="mr-6">
        <Link to="/tousBlogs" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Blogs</Link>
        </p>
        <p className="mr-6">
          <Link
            to="#"
            className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]"
            onClick={scrollToBottom}
          >
            Contactez nous
          </Link>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div  onClick={()=>{const profila = document.querySelector('#profila');
      if (profila.classList.contains('hidden')){
      profila.classList.remove('hidden');
    }else{
      profila.classList.add('hidden');
    }}} className="px-2 ml-8 cursor-pointer" id="profilem">
            <img  className=" rounded-full" src={url} alt="profile pic" style={{ width: "64px", height: "62px" }}/>
          </div>
      </div>
      <div onClick={()=>{const menu2 = document.querySelector('#menu2');
      if (menu2.classList.contains('hidden')){
      menu2.classList.remove('hidden');
    }else{
      menu2.classList.add('hidden');
    }}} className="px-4 cursor-pointer flex flex-row gap-1 justify-between  md:hidden " id="burger">
        <svg className="w-8 bg-[#e57373] rounded-xl ml-0 hover:shadow hover:bg-black transition duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> 
      </div>
      <div style={{backgroundColor: '#F9DBBB' }} className="z-12  hidden font-bold fixed opacity-80 ml-[60%] lg:ml-[84%] sm:ml-[42%] md:ml-[70%] w-44 rounded-xl mt-40 flex justify-center px-1 py-4 mt-[339px]" id="profila">
    <ul className="space-y-3" >
        <li className="mr-4">
            <Link to="/Profil" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Afficher profil</Link>
        </li>
        <li className="mr-4">
            <Link to="/modifierprofil" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Modifier profil</Link>
        </li>
        <li className="mr-4">
            <Link to="/AjouterEvent" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Ajouter Evenement</Link>
        </li>
        <li className="mr-4">
            <Link to="/AjouterBesoin" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Ajouter Besoin</Link>
        </li>
        <li className="mr-4">
            <Link to="/ajouterblog" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Ajouter Blog</Link>
        </li>
        <li className="mr-4">
            <Link to="/AjouterBesoin" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Ajouter Beneficiere</Link>
        </li>
        <li className="mr-4">
            <Link to="#" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');handleLogout();
    }} className=" text-[#E53935] hover:text-gray-300 underline underline-offset-8 opacity-90">Déconexion</Link>
        </li>
    </ul>
  </div>
      <div style={{backgroundColor: '#2E3840'}}  className="z-10 fixed left-0 right-0 float-center  mt-32 justify-center flex md:hidden hidden p-4" id="menu2">
    <p className="mr-6">
    <Link to="/Apropos" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">A propos</Link>
    </p>
    <p className="mr-6">
    <Link to="/Evenements" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Evenements</Link>
    </p>
    <p className="mr-6">
    <Link to="/Besoins" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Nos besoins</Link>
    </p>
    <p className="mr-6">
    <Link to="/Blogs" className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]">Blogs</Link>
    </p>
    <p className="mr-6">
          <Link
            to="#"
            className=" text-[#F9DBBB] hover:text-gray-300 active:text-[#E53935] focus:text-[#E53935]"
            onClick={scrollToBottom}
          >
            Contactez nous
          </Link>
        </p>
  </div>
  </nav>
    );
}
 
export default Navbarmembre;
