import { useEffect, useState } from 'react';
import good from './images1/good.svg';
import bad from './images1/bad.svg';

const DemandesList = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    fetch("http://localhost:3030/waitings_dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data)

  }) },[]);
  
  const handleRefus = async (email) => {
    console.log("Amine");
  
    try {
      await fetch("http://localhost:3030/refuseUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email }),
      });
  
      // Remove the user from the list
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.email !== email)
        
      );
      console.log(users)
    } catch (error) {
      console.error(error);
    }
  };


  const handleAcceptation = async (email) => {
    console.log("Amine");
  
    try {
      await fetch("http://localhost:3030/acceptUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email }),
      });
  
      // Remove the user from the list
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.email !== email)
        
      );
      console.log(users)
    } catch (error) {
      console.error(error);
    }
  };



  const handleBlogExpand = (blogId) => {
    if (blogId === expandedBlogId) {
      setExpandedBlogId(null);
    } else {
      setExpandedBlogId(blogId);
    }
  };


console.log(users.length )
console.log( users + "4654")
  return (
    <div className='mt-24'>
        <h2 style={{fontSize:42 ,font:"bold" }} className="titre p-4 ">Les demandes d'adhesion</h2>
    <div className="flex justify-between  mb-16">
        
        <div className="flex flex-col w-2/3">
        {users.length>0 &&expandedBlogId !== null && (
            <div
            className="evenement-preview  mt-4 rounded-xl"
            key={expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.id}
          >
            <div className='flex flex-row justify between mb-4'>
            <div>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Nom : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Prenom : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Sex : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Tel : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Email : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Adresse : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Wilaya : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-60 py-4">
               Dep demandé : 
              </p>
              <p className="mb-4 text-2xl font-extrabold  px-2 w-40 py-4">
               Motivation : 
              </p>
              </div>
                
                <div>
                <p className="mb-4 text-2xl  font-semibold py-4">
                {expandedBlogId && users.find((demande) => demande.id === expandedBlogId)?.lastname}
              </p>
              <p className="mb-4 text-2xl  font-semibold  py-4">
               {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.firstname}
              </p>
              <p className="mb-4 text-2xl font-semibold  py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.gender}
              </p>
              <p className="mb-4 text-2xl  font-semibold  py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.phone}
              </p>
              <p className="mb-4 text-2xl  font-semibold py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.email}
              </p>
              <p className="mb-4 text-2xl font-semibold  py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.address}
              </p>
              <p className="mb-4 text-2xl  font-semibold py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.wilaya}
              </p>
              <p className="mb-4 text-2xl  font-semibold py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.departement}
              </p>
              <p className="mb-4 text-2xl  font-semibold  py-4">
              {expandedBlogId &&  users.find((demande) => demande.id === expandedBlogId)?.motivation}
              </p>
              
              
              </div>
              </div> 
              <div className='flex justify-between mr-[25%] ml-[25%] mt-12  '>
              <div className="   flex justify-start rounded-full  w-20 bg-[#F9DBBB] hover:bg-[#00FF00] hover:shadow-md hover:shadow-[#00FF00]  ">
              <button onClick={() => handleAcceptation(users.find((demande) => demande.id === expandedBlogId).email)}> <img alt="1" src={good} className='hover:invert' /></button>

              </div>
              <div className="  flex justify-end rounded-full w-20 bg-[#F9DBBB] hover:bg-[#C70039] hover:shadow-md hover:shadow-[#C70039] ">
              <button onClick={() => handleRefus(users.find((demande) => demande.id === expandedBlogId).email)}> <img alt="1" src={bad} className='hover:invert' /></button>

              </div>
            </div>
            </div>
        )}
      </div>
      <div className="flex flex-col evenements-list  mr-4">
        { users.length > 0 ? users.map((demande) => (
            <div className='p-1 mt-4 rounded-xl  border-dashed border-4 border-gray-600 hover:scale-105 transition duration-500'>
          <div
            style={{ backgroundColor: '#F9DBBB4C' }}
            className="evenement-preview p-2 md:p-4  rounded-xl  hover:cursor-pointer "
            key={demande.id}
          >
            <div className="px-2 py-1 w-120  " >
                <div className='flex flex-row justify between mb-4' onClick={() => handleBlogExpand(demande.id)}>
                    <div>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl font-black py-2 w-40 "
              >
               Nom :
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl font-black py-2 w-40"
              >
               Prenom :
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl font-black py-2 w-40"
              >
               Wilaya :
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl font-black py-2 w-40 "
              >
               Email :
              </h2>
              </div>
                
                <div>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl  py-2 w-60"
              >
              {demande.lastname}
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl  py-2 w-60"
              >
              {demande.firstname}
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl  py-2 w-60"
              >
              {demande.wilaya}
              </h2>
              <h2
                style={{ color: '#2E3840' }}
                className="text-2xl  py-2 w-60"
              >
              {demande.email}
              </h2>
              </div>
              </div>
              <div className='flex justify-between mr-24 ml-24'>
              <div className="   flex justify-start rounded-full  w-16 bg-[#F9DBBB] hover:bg-[#00FF00] hover:shadow-md hover:shadow-[#00FF00] hover:scale-105 ">
              <button onClick={() => handleAcceptation(users.find((demande) => demande.id === expandedBlogId).email)}> <img alt="1" src={good} className='hover:invert' /></button>
              </div>
              <div className="flex justify-end rounded-full w-16 bg-[#F9DBBB] hover:bg-[#C70039] hover:shadow-md hover:shadow-[#C70039]  hover:scale-105 ">
              <button onClick={() => handleRefus(users.find((demande) => demande.id === expandedBlogId).email)}> <img alt="1" src={bad} className='hover:invert' /></button>
              </div>
            </div>
            </div>
            </div>
           
          </div>
        )) :(<div className="absolute inset-0 flex items-center justify-center mb-20">
       < h2 style={{fontSize:42 ,font:"bold" }} className="titre p-4 ">Pas de demandes d'adhesion pour le moment</h2>
      </div>
      
      )}
      </div>
      
    </div>
    </div>
  );
};

export default DemandesList
