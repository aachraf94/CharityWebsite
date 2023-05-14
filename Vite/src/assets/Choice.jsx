import { Link } from 'react-router-dom';
import './Choice.css';
import img from './FrontAssets/image login.png'
import log from './FrontAssets/LOGO.png'
import { useNavigate } from 'react-router';



function Choice(){
  let navigate = useNavigate("")
return (
    
     <>
   <a href="/" class="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
  <img src={log} alt="" classNa="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>


<div className='relative'>
      </div>
      <span className='text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-52 flex-none order-0 flex-grow-0 ml-8'>Vous n'êtes pas un membre?</span>
      <div className="fixed top-2 right-0 m-4">
      <button onClick={() =>navigate("/register")} className="bg-transparent   rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2">
        
  Rejoignez-Nous
</button>
</div>



<div className="bg-blue-400 h-screen flex justify-center items-center">
  <img src={img} alt="" className="h-screen w-full object-cover"/>
  <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
    <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">Donation</h2>
    <h3 className="text-center text-white text-lg font-normal mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">Choisissez le type de don que vous voulez faire ?</h3>
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
        <Link to="/Don" className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto">
          Don D'argent
        </Link>
        <Link to="/besoin" className="flex justify-center items-center p-2 md:p-4 bg-blue-500 text-yellow-300 text-lg font-bold rounded-xl w-full md:w-auto">
          Besoin
        </Link>
      </div>
    </div>
  </div>
</div>




    
    
    
    </>
)



}
export default Choice;