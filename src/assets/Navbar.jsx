import Logo from './FrontAssets/images1/LOGO.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 99999,
      left: 99999,
      behavior: "smooth",
    });};
    return (  
    <nav style={{backgroundColor:'#2E3840'}} className=" Navbar z-10 fixed top-0 left-0 right-0  text-white flex items-center justify-between h-20 py-3 px-12">
    <div className="flex items-center justify-start">
    <a href="/"><img
      src={Logo}
      height="90%"
      weight="90%"
      alt="Logo de la Fondation Coeur Espoir"
      className="h-8 mr-2"
    /></a>
    </div>
      <div className="  flex flex-row gap-4 justify-center font-ubuntu text-[17px] hidden md:flex" id="menu">
        <p className="mr-6">
        <a href="/Apropos" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">A propos</a>
        </p>
        <p className="mr-6">
        <a href="/Evenements" className="text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Evenements</a>
        </p>
        <p className="mr-6">
        <a href="/Besoins" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Nos besoins</a>
        </p>
        <p className="mr-6">
        <a href="/BlogsTous" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Blogs</a>
        </p>
        <p className="mr-6">
        <a href="#" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600" onClick={scrollToBottom}>Contactez nous</a>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <a href='/Login'>
          <button className="bg-white text-[#2E3840] rounded-xl font-bold px-6 hover:bg-black hover:text-white mt-1 py-3  mr-3 transition duration-500 ease-in-out">
            Login
          </button>
        </a>
        <a href='/Rejoignez'>
          <button className="bg-white text-[#2E3840] rounded-xl px-6 font-bold hover:bg-black hover:text-white  mt-1 py-3 mr-3 transition duration-800 ease-in-out">
            Rejoignez nous
          </button>
        </a>
      </div>
      <div onClick={()=>{const menu2 = document.querySelector('#menu2');
      if (menu2.classList.contains('hidden')){
      menu2.classList.remove('hidden');
    }else{
      menu2.classList.add('hidden');
    }}}  className="px-4 cursor-pointer flex flex-row gap-1 justify-between  md:hidden " id="burger">
        <svg className="w-8 bg-red-300 rounded-xl ml-0 hover:shadow hover:bg-black transition duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> 
      </div>
      <div style={{backgroundColor: '#2E3840'}}  className="z-10 fixed left-0 right-0 float-center  mt-32 justify-center flex md:hidden hidden p-4" id="menu2">
    <p className="mr-6">
    <a href="/Apropos" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">A propos</a>
    </p>
    <p className="mr-6">
    <a href="/Evenements" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Evenements</a>
    </p>
    <p className="mr-6">
    <a href="/Besoins" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Nos besoins</a>
    </p>
    <p className="mr-6">
    <a href="/BlogsTous" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600">Blogs</a>
    </p>
    <p className="mr-6">
    <a href="#" className=" text-[#F9DBBB] hover:text-gray-300 active:text-red-600 focus:text-red-600" onClick={scrollToBottom}>Contactez nous</a>
    </p>
  </div>
  </nav>
    );
}
 
export default Navbar;