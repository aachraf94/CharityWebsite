import photo1 from './FrontAssets/images1/photo17.png'
import photo2 from './FrontAssets/images1/photo18.png'
import photo3 from './FrontAssets/images1/photo19.png'
import photo4 from './FrontAssets/images1/photo20.png'
import photo5 from './Frontassets/images1/photo21.png'
const  Partenaires= () => {
    return ( 
        <div className='flex flex-col items-center mt-8 mb-32 ml-8 mr-8'>
  <h1 className='titre'>Nos partenaires</h1>
  <div className="flex flex-row justify-between mt-6 ">
    <div className="border-dashed flex justify-center border-4 border-gray-600 rounded-3xl bg-white ml-6 mr-6 w-full md:px-4 md:py-4 hover:transform hover:scale-110">
      <img src={photo5} className=''></img>
    </div>
    <div className="border-dashed flex justify-center border-4 border-gray-600 rounded-3xl bg-white ml-6 mr-6 w-full md:px-4 md:py-4 hover:transform hover:scale-110">
      <img src={photo4}></img>
    </div>
    <div className="border-dashed flex justify-center border-4 border-gray-600 rounded-3xl bg-white ml-6 mr-6 w-full md:px-4 md:py-4 hover:transform hover:scale-110">
      <img src={photo3}></img>
    </div>
    <div className="border-dashed flex justify-center border-4 border-gray-600 rounded-3xl bg-white ml-6 mr-6 w-full md:px-4 md:py-4 hover:transform hover:scale-110">
      <img src={photo2}></img>
    </div>
    <div className="border-dashed flex justify-center border-4 border-gray-600 rounded-3xl bg-white ml-6 mr-6 w-full md:px-4 md:py-4 hover:transform hover:scale-110">
      <img src={photo1}></img>
    </div>
  </div>
</div>

     );
}
 
export default Partenaires ;