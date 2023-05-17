import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "./utils/api";
import EvenementsListadmin from "./assets/Evenements/EvenementsListadmin";
import EvenementsList from "./assets/Evenements/EvenementsList";
import EvenementsListmembre from "./assets/Evenements/EvenementsListmembre";



const Evenements = ({role}) => {
  const [evenements, setEvenements] = useState([]);
  const [eventswithphoto, setEventswithphoto] = useState([]);

      

  useEffect(() => {
  
  
    fetch("http://localhost:3030/getEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(response => response.json())
    .then(data => {
    
      const promises = data.map(evenement => fetchPhotoByTitle(evenement));
      Promise.all(promises).then(eventwithphoto => {
        setEventswithphoto(eventwithphoto);
      });
      

    })
    .catch(error => {
      console.error(error);
    });
      },[])
     
      const fetchPhotoByTitle = (evenement) => {
        return fetch(`http://localhost:3030/getphotobytitle`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "title":evenement.title
          },
        })
          .then(response => response.json())
          .then(data => {
            return { ...evenement, photoUrl: data.url };
          })
          .catch(error => {
            console.error(error);
            return { ...evenement, photoUrl: null };
          });
      }
      
console.log(eventswithphoto)

  if (role === "ADMIN") {    return <EvenementsListadmin evenements={ eventswithphoto } />;
  } else if (role === "MEMBRE") {
    return <EvenementsListmembre evenements={eventswithphoto} />;
  } else {
    return <EvenementsList evenements={eventswithphoto} />;
  }
};

export default Evenements;
