import { Link } from 'react-router-dom';
import image1 from '../images1/event1.png';
import image2 from '../images1/event2.png';
import image3 from '../images1/event3.png';
import quantité from '../images1/quantité.svg';

const BesoinsListadmin = ({ besoins }) => {
  
  return (
    <div>
      <div className='bg-[#F9DBBB4C] backdrop-blur-sm Navbar z-1 fixed top-4 left-0 right-0 mt-16 flex flex-row justify-between h-16'>
        <h1 className='text-[50px] font-black color-[#2E3840] ml-16 mb-4 -mt-2 '>Besoins</h1>

        <Link to="/AjouterBesoin" style={{ backgroundColor: '#2E3840' }}
          className="font-extrabold  cart-btnn mr-16  py-2  self-center">Ajouter un besoin</Link>
      </div>
      <div className="evenements-list mt-32">
        {besoins.map((besoin) => (
          <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between" key={besoin.id}>
            {(besoin.id % 2 === 1) ? (
              <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between">
                <div className="flex justify-start w-[40%] rounded mb-12 px-4">
                  <img src={
                    besoin.id % 3 === 1 ? image1 :
                      besoin.id % 3 === 2 ? image2 :
                        image3
                  } alt="" />
                </div>
                <div className="px-8 mr-4 py-12 w-120">
                  <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
                    {besoin.content}
                  </h2>

                  <p className="font-bold py-2 flex"><img src={quantité} alt="" className='px-3' />quantité : {besoin.quantite}</p>
                  <p className="font-black mb-4">{besoin.description}</p>
                  <div className='flex justify-center mt-6'>
                    <Link to="/Besoin" style={{ backgroundColor: '#2E3840' }} className='cart-btnn  font-extrabold transition duration-500 ease-in-out px-2 py-2  ml-4'>Faites Une Donation</Link>
                   </div>
                </div>
              </div>) : null}
            {(besoin.id % 2 === 0) ? (
              <div className="evenement-preview flex flex-row p-4 mt-4 w-full justify-between">

                <div className="px-8 mr-4 py-12 w-120">
                  <h2 style={{ color: "#2E3840" }} className="text-5xl font-bold py-4">
                    {besoin.content}
                  </h2>
                  <p className="font-bold py-2 flex"><img src={quantité} alt="" className='px-3' />quantité : {besoin.quantite}</p>
                  <p className="font-black mb-4">{besoin.description}</p>
                  <div className='flex justify-center mt-6'>
                    <Link to="/Besoin" style={{ backgroundColor: '#2E3840' }} className='cart-btnn text-center p-10 font-extrabold transition duration-500 ease-in-out px-2 py-2  ml-4'>Faites Une Donation</Link>
                   </div>
                </div>
                <div className="flex justify-end w-[40%] rounded mb-12 px-4">
                  <img src={
                    besoin.id % 3 === 1 ? image1 :
                      besoin.id % 3 === 2 ? image2 :
                        image3
                  } alt="" />
                </div>
              </div>) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BesoinsListadmin;
