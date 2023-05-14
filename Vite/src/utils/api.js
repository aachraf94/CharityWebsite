import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3030/",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
   }
   
})
