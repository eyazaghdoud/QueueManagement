import axios from 'axios';

const API_URL = "http://localhost:8080/appointment";

/**** appointment list  ***/
const getAllAppointments = async () => {
    return await axios.get(API_URL + "/all_appointments" )  
 }

/**** book appointment  ***/
const bookAppointment = async (appointment) => {  
    return await axios.post(API_URL + '/book_appointment', appointment
    )
 
 }

 export default {
    getAllAppointments,
    bookAppointment
 }


