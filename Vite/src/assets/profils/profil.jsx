import {  useState } from "react";
import Afficherprofil from './Afficherprofil';
import axios from "axios";
import { useEffect } from "react";

const Profil = ({role}) => {

  const [profils, setprofils] = useState([])
  useEffect(() => {
    
    fetch('http://localhost:3030/getuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
    
      setprofils([{ nom: data.lastname, prenom: data.firstname, role: data.role, departement:  data.departement , id: 1 }]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

   
    return ( 
      <div className="profil">
      <Afficherprofil profils={profils} role={role} />
    </div>
     );
}
 
export default Profil;