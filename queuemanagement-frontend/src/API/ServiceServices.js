import axios from 'axios';

const API_URL = "http://localhost:8080/service";

/**** service list  ***/
const getAllServices = async () => {
    return await axios.get(API_URL + "/all_services" , 
    {
       headers: {
       'Content-Type': 'application/json',
       }
   })  
 }

 /***one service */
 const getServiceByLibel = async (libel) => {
   return await axios.post(API_URL + "/signle_service" , libel, 
   {
      headers: {
      'Content-Type': 'text/plain',
      }
  }
   )  
}



 export default {
    getAllServices,
    getServiceByLibel
 }