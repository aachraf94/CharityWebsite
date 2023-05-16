import ReactPlayer from "react-player";
const Help = () => {
    const srcvideo2="videos/Acceuil.mp4";
    const srcvideo1="videos/Donnation.mp4";
    const srcvideo3="videos/InscrireEvenement.mp4";
    const srcvideo4="videos/Feedback_contact.mp4";
    return ( 
        <div className="m-4 mt-24 mb-12">

        <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl p-4 underline underline-offset-4">Bienvenue Dans La Page D'aide</h1>
        <p className="p-2 text-lg mt-2">Ici Vous Trouverez Comment Utiliser Notre Site Web</p>
        </div>
        
        <div className="mt-12 mb-12   flex justify-start "> 
        <div  className="border-dashed border-4 border-gray-600 p-2 rounded-xl" width="50%">
        <ReactPlayer url={srcvideo1} 
        controls    />
        </div>
        <h1 className="font-bold text-xl md:text-3xl p-2 lg:p-8 mt-[10%] w-[50%]">1- Comment Faire Une Donation?</h1>
        </div>

        <div className="mt-12 mb-12   flex justify-end"> 
        <h1 className="font-bold text-xl md:text-3xl  p-2 lg:p-8 mt-[10%] w-[50%]">2- Comment Nous Rejoindre?</h1>
        <div  className="border-dashed border-4 border-gray-600 p-2 rounded-xl" width="50%">
        <ReactPlayer url={srcvideo2} 
        controls    />
        </div>
        </div>

        <div className="mt-12 mb-12   flex justify-start"> 
        <div  className="border-dashed border-4 border-gray-600 p-2 rounded-xl" width="50%">
        <ReactPlayer url={srcvideo3} 
        controls    />
        </div>
        <h1 className="font-bold text-xl md:text-3xl p-2 lg:p-8 mt-[10%] w-[50%]">3- Comment Participer A Un Evenement?</h1>
        </div>

        <div className="mt-12 mb-12   flex justify-end"> 
        <h1 className="font-bold text-xl md:text-3xl p-2 lg:p-8 mt-[10%] w-[50%]">4- Contacter Nous Si Vous Savez Quelqu'un En Besoin ?</h1>
        <div  className="border-dashed border-4 border-gray-600 p-2 rounded-xl" width="50%">
        <ReactPlayer url={srcvideo4} 
        controls    />
        </div>
        </div>
        </div>
     );
}
 
export default Help;