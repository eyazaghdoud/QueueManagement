import axios from 'axios';

const API_URL = "http://localhost:8080/appointment";
const user = JSON.parse(localStorage.getItem("user"));

/**** appointment list  ***/
const getAllAppointments = async () => {
    return await axios.get(API_URL + "/all_appointments" ,  {
     // headers: { Authorization: 'Bearer '+ user.jwttoken }
   })  
 }

/**** appointment list per day ***/
const getAppointmentsPerDay = async (date) => {
   return await axios.post(API_URL + "/appointments_per_day", date, 
   {
      headers: {
      'Content-Type': 'application/json',
     // Authorization: 'Bearer '+ user.jwttoken
      }
  } )  
}

/**** appointment list per client ***/
const getAppointmentsPerClient = async (clientId) => {
   return await axios.post(API_URL + "/client_total_appointments", clientId, 
   {
      headers: {
      'Content-Type': 'application/json',
     // Authorization: 'Bearer '+ user.jwttoken
      }
  } )  
}


/**** pending appointment  per client ***/
const getPendingAppointmentPerClient = async (clientId) => {
   return await axios.post(API_URL + "/client_pending_appointment", clientId, 
   {
      headers: {
      'Content-Type': 'application/json',
      //Authorization: 'Bearer '+ user.jwttoken
      }
  } )  
}

/**** book appointment  ***/
const bookAppointment = async (appointment) => {  
    return await axios.post(API_URL + '/book_appointment', appointment, {
     // headers: { Authorization: 'Bearer '+ user.jwttoken }
   }
    )
 
 }

 /**** enclose appointment  ***/
const encloseAppointment = async (appId) => {  
   return await axios.post(API_URL + '/enclose_appointment', appId,
   {
      headers: {
      'Content-Type': 'application/json',
      //Authorization: 'Bearer '+ user.jwttoken
      }
  }
   )

}

 /**** absence appointment  ***/
 const markAbsenceAppointment = async (appId) => {  
   return await axios.post(API_URL + '/mark_absence_appointment', appId,
   {
      headers: {
      'Content-Type': 'application/json',
     // Authorization: 'Bearer '+ user.jwttoken
      }
  }
   )
}

 /**** cancel appointment  ***/
 const cancelAppointment = async (appId) => {  
   return await axios.post(API_URL + '/cancel_appointment', appId,
   {
      headers: {
      'Content-Type': 'application/json',
     // Authorization: 'Bearer '+ user.jwttoken
      }
  }
   )

}

 export default {
    getAllAppointments,
    bookAppointment,
    getAppointmentsPerDay,
    encloseAppointment, 
    markAbsenceAppointment,
    getAppointmentsPerClient,
    getPendingAppointmentPerClient,
    cancelAppointment
 }


