//import './AjouterBesoin.css';
import { useState } from 'react';
import img from './FrontAssets/image login.png'
import log from './FrontAssets/Logo.png'
import { MdProductionQuantityLimits } from 'react-icons/md';
import {HiIdentification} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillCreditCard } from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import {BiBookContent} from 'react-icons/bi';
import {MdDescription} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaSortAmountUp} from 'react-icons/fa'
import { useFormik } from 'formik';

function AjouterBesoin(){
  
  const formik = useFormik({
    initialValues: {
      nom: "",
      montant: "",
      adresse: "",
      contenu: "",
      numero: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3030/ajouterautre",
          values
        );

        window.location.href = "/Apropos";
      } catch (err) {
        if (err.response.status === 404) {
          console.log("RERERE");
          alert("Email does not exist!");
        } else {
          alert("Wrong password check again...");
        }
      }
    },
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
return(  
<>
<a href="/" class="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
  <img src={log} alt="" className="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>

<div className="bg-blue-400 h-screen flex justify-center items-center w-screen">
  <img src={img} alt="" className="h-screen w-full object-cover"/>
  <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-xl">
    <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">Ajouter un Besoin</h2>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
        type="text"
        placeholder=""
        id="nom"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Nom
      <RxAvatar className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
      <input
        className="w-5/12 h-8 bg-transparent  border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2 "
        type="text"
        
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[30%] text-gray-400 text-sm duration-500 pointer-events-none">
        Contenu
        <BiBookContent className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
    </div>


    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="number"
        placeholder=""
        id="name"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Telephone
        <BsFillTelephoneFill className="absolute right-[4.5rem] top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="text"
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[27.5%] text-gray-400  text-sm duration-500 pointer-events-none">
        Description
        <MdDescription className="absolute right-[4.5rem] top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="password"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Adresse
        <HiIdentification className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="text"
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[30%] text-gray-400 text-sm duration-500 pointer-events-none">
      Quantité
        <MdProductionQuantityLimits className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="confirmPassword"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Priorité
        <FaSortAmountUp className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="password"
        placeholder=""
        id="wilaya"
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[33%] text-gray-400 text-sm duration-500 pointer-events-none">
      CCP  <AiFillCreditCard className="absolute -left-5 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="password"
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Email
        <AiOutlineMail className="absolute right-11 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
        <input
          className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
          type="file"
          placeholder=""
          id="wilaya"
          required
        />
      <span className="Wilaya  absolute bottom-3 right-[26%] text-gray-400 text-sm duration-500 pointer-events-none">
        <label htmlFor="file-input" className="bg-red-500 p-4 rounded-full cursor-pointer">
          <AiOutlinePlus size={32} color="white" />
        </label>
        <input id="file-input" type="file" className="hidden " onChange={handleFileChange} />
        {file && <p>{file.name}</p>}
      </span>
    </div>
    <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <button className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
      Ajouter 
      </button>
    </div>
  </div>

</div>








</>
)
}

export default AjouterBesoin;