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
const DéconnexionNavbar = () => {
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
                        <img src={image} className='rounded-full '></img>
                    </div>
                    <div className='rounded-xl mt-1 mb-2 '>
                        <h1 className='text-3xl text-white'>Melzi Amine</h1>
                    </div>
                    <div className='rounded-xl  mb-4'>
                        <h2 className='text-l text-[#808080]'>la-melsi@esi.dz</h2>
                    </div>
                </div>
                <div className='rounded-xl mt-1  flex flex-row items-center justify-center'>
                    <img src={dash} className='mr-2 w-4'></img>
                    <h1 className='text-xl text-white font-semibold'>Menu Admin</h1>
                </div>
                <div className=' h-[1px] bg-white mb-1 mr-4 ml-4 mt-1 '>
                </div>
                <div>
                    <div className='rounded-lg mt-4  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840]  '>
                        <img src={dash2} className='mr-2 w-4 ml-12 '></img>
                        <h1 className='text-xl text-white font-semibold cursor-pointer'>Dashboard</h1>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash3} className='mr-2 w-4 ml-12'></img>
                        <h1 className='text-xl text-white font-semibold cursor-pointer'>Utilisateurs</h1>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash4} className='mr-2 w-4 ml-12 '></img>
                        <h1 className='text-xl text-white  font-semibold cursor-pointer '>Transactions</h1>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1  bg-[#2E3840]  '>
                        <img src={dash5} className='mr-2 w-4 ml-12 '></img>
                        <h1 className='text-xl text-white   font-semibold cursor-pointer'>Nécessiteux</h1>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash6} className='mr-2 w-4 ml-12'></img>
                        <h1 className='text-xl text-white font-semibold cursor-pointer'>Stock</h1>
                    </div>
                    <div className='rounded-lg mt-1  flex flex-row items-center justify-start cursor-pointer p-1 bg-[#2E3840] '>
                        <img src={dash7} className='mr-2 w-4 ml-12 '></img>
                        <h1 className='text-xl text-white  font-semibold cursor-pointer'>Participants</h1>
                    </div>
                    <div className='rounded-lg mt-16  flex flex-row items-center justify-start cursor-pointer p-1 bg-white  '>
                        <img src={dash8} className='mr-2 w-4 ml-12 invert'></img>
                        <h1 className='text-xl text-black font-semibold cursor-pointer'>Déconnexion</h1>
                    </div>
                </div>
                <div className=' h-[1px] bg-white mb-24 mr-8 ml-8 mt-1 '>
                </div>
                    
            </div>
     );
}
 
export default DéconnexionNavbar;