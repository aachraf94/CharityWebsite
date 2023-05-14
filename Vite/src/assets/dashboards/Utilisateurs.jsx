import UtilisateursNavbar from "../dashboardsNavbars/UtilisateursNavbar";
import notification from '../images1/notification.svg';
import search from '../images1/search.svg';
import deleter from '../images1/delete.svg'
import triangle from '../images1/triangle.svg';
import React, { useEffect, useState } from 'react';



const Utilisateurs = () => {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    fetch("http://localhost:3030/users_dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const promises = data.map(user => fetchPhotoByEmail(user));
        
        Promise.all(promises).then(usersWithPhotoUrls => {
          setUsers(usersWithPhotoUrls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
 const handleNom = async () => {
    fetch("http://localhost:3030/trinomuti", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const promises = data.map(user => fetchPhotoByEmail(user));
        
        Promise.all(promises).then(usersWithPhotoUrls => {
          setUsers(usersWithPhotoUrls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handlePrenom = async () => {
    fetch("http://localhost:3030/triprenomuti", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const promises = data.map(user => fetchPhotoByEmail(user));
        
        Promise.all(promises).then(usersWithPhotoUrls => {
          setUsers(usersWithPhotoUrls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleEmail = async () => {
    fetch("http://localhost:3030/triemailuti", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const promises = data.map(user => fetchPhotoByEmail(user));
        
        Promise.all(promises).then(usersWithPhotoUrls => {
          setUsers(usersWithPhotoUrls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  const fetchPhotoByEmail = (user) => {
    return fetch(`http://localhost:3030/getphotobyemail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "email":user.email
      },
    })
      .then(response => response.json())
      .then(data => {
        return { ...user, photoUrl: data.url };
      })
      .catch(error => {
        console.error(error);
        return { ...user, photoUrl: null };
      });
  }





  
    const [isHidden, setIsHidden] = useState(false);

    const handleCheckboxChange = () => {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      let checkedCount = 0;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          checkedCount++;
        }
      });
      setIsHidden(checkedCount >= 1);
    };
    const handleAllChecked = (event) => {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        const maincheck = document.getElementsByClassName("maincheck");
        checkboxes.forEach((checkbox) => {
          checkbox.checked = maincheck[0].checked;
        });
        handleCheckboxChange(event);
      };
  
      const handleAllCheckboxChange = () => {
        handleCheckboxChange();
        handleAllChecked();
      };

 
      


      

    return ( 
        <div>
            <div className="flex flex-row bg-[#F5F5F5]">
                <UtilisateursNavbar />
                <div className=" w-[100%]">
                    {/* Write your code here */}
                    <div className=" m-8 flex flex-row justify-between ">
                        <div className="bg-white flex flex-row w-[80%] ml-[5%]  py-2 px-3">
                        <img src={search}></img>
                    <input class="border-none outline-none  text-[#4C4C4C] placeholder-[#4C4C4C]  w-[80%] ml-2 focus:placeholder-transparent " type="text" placeholder=" Rechercher un besoin, évenement, blog ..." />   
                    </div>
                    <div className="bg-[#4C4C4C] rounded-full ml-[16%] ">
                        <img src={notification} className="p-2"></img>
                    </div>
                    </div>
                    <div>
                    {isHidden ? null : <div className="flex justify-start ml-6">
                    <h1 className="titre2">Aucune ligne n'est sélectionée</h1>
                    </div>}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="mr-4 ml-6 rounded-xl bg-[#4C4C4C] py-2 px-4">

                            <button className="text-white font-bold">Ajouter &nbsp;&nbsp; +</button>
                        </div>
                        <div className="flex flex-row" >
                        <button className="  font-bold text-[#4C4C4C]  rounded-xl bg-white py-2 px-4 ">Modifier</button>
                        <div className="flex flex-row justify-between rounded-xl bg-[#EF4135] py-2 px-4 ml-4 mr-4">
                        <button className="  font-bold text-white "> Supprimer </button>
                        <img src={deleter} className="w-[18px] ml-2"></img>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-[#2E3840] py-2 ml-8 mt-4  mr-4 flex flex-row justify-between h-14 items-center">
                    <div className=" w-[8%]">
                    <input type="checkbox" onChange={handleAllCheckboxChange} className="maincheck ml-4 mb-2 invert" ></input>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[17%]">
                    <h2 className="text-white font-semibold text-md ">Nom  </h2>
                   <button onClick={handleNom}>  <img src={triangle}></img></button>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[17%]">
                    <h2 className="text-white font-semibold text-md ">Prenom</h2>
                 <button onClick={handlePrenom} >   <img src={triangle}></img></button>
                    </div>
                    <div className="flex flex-row justify-start items-center mb-2 w-[20%] hidden md:inline-flex">
                    <h2 className="text-white font-semibold text-md ">Email</h2>
                    <button onClick={handleEmail} >    <img src={triangle}></img></button>
                    </div>
                    <h2 className="text-white font-semibold text-md mb-2 w-[15%] hidden xl:block">Telephone</h2>
                    <h2 className="text-white font-semibold text-md mb-2 w-[15%]" >Departement</h2>
                    <h2 className="text-white font-semibold text-md  mb-2 w-[8%] hidden xl:block">Détailles</h2>
                    <h2 className="text-white font-semibold text-md mb-2  w-[8%]  xl:hidden "> + </h2>
                    </div>
                    <div>
                    {users.map(user => (
                    <div key={user.id} className="bg-white py-2 ml-8  mr-4 flex flex-row justify-between h-12 items-center -mt-2 mb-2 border-r-2 border-b-2 border-l-2 ">
                    <div className="flex flex-row justify-between w-[8%]">
                    <input type="checkbox" className="ml-4"onChange={handleCheckboxChange}></input>
                    <div >
                    <img src={user.photoUrl}  className="rounded-full w-4  mr-6 hidden lg:block" alt="profil photo" style={{ width: "16px", height: "16px" }} ></img>
                    </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[17%]">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{user.lastname}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[17%]">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{user.firstname}</h2>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[20%] hidden md:block">
                    <h2 className="text-[#2E3840] font-semibold text-md ">{user.email}</h2>
                    </div>
                    <h2 className="text-[#2E3840] font-semibold text-md w-[15%] hidden xl:block">{user.phone}</h2>
                    <h2 className="text-[#2E3840] font-semibold text-md w-[15%]">{user.departement}</h2>
                   <a href="/user"><button  className="text-[#2E3840] font-extrabold text-md underline underline-offset-4 w-[8%] hidden xl:block mr-4" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Voir Plus</button></a>
                    <h2 className="text-[#2E3840] font-extrabold text-md   w-[8%]  xl:hidden "> + </h2>
                    </div> 
                      ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Utilisateurs;