import axios from 'axios';

const API_URL = "http://localhost:8080/ticket";
const user = JSON.parse(localStorage.getItem("user"));

/**** all tickets  ***/
const getAllTickets = async () => {
    return await axios.get(API_URL + "/all_booked_tickets", {
      //  headers: {Authorization: 'Bearer '+ user.jwttoken }
     } )  
 }

 /*** queue ****/
 const getWaitingTickets = async () => {
    return await axios.get(API_URL + "/waiting_tickets" , {
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     })  
 }

/**** current ticket  ***/
const getCurrentTicket = async() => {
    return await axios.get(API_URL + "/current_ticket", {
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
  
   
    )
}

/**** next ticket  ***/
const passNextTicket = async() => {
    return await axios.get(API_URL + "/next_ticket", {
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
    )  
}


/**** book ticket  ***/
const bookTicket = async(bookTicketRequest) => {
    return await axios.post(API_URL + "/book_ticket", bookTicketRequest, {
     //   headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
    )  
}

/**** cancel ticket  ***/
const cancelTicket = async(ticketNumber) => {
    return await axios.post(API_URL + "/cancel_ticket", ticketNumber,
    {
       headers: {
       'Content-Type': 'application/json',
       //Authorization: 'Bearer '+ user.jwttoken
       }
   }
    )  
}


/**** ticket info ***/
const getTicketInfo = async(clientId) => {
    return await axios.post(API_URL + "/ticket_info", clientId, 
     {
        headers: {
        'Content-Type': 'application/json',
       // Authorization: 'Bearer '+ user.jwttoken
        }
    }
    )
   
}

/**** clear all  ***/
const clearQueue = async() => {
    return await axios.get(API_URL + "/clear_queue",  {
       // headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
  
    )
}


 export default {
    getWaitingTickets,
   getAllTickets,
   getCurrentTicket,
   getTicketInfo,
   passNextTicket,
   bookTicket,
   cancelTicket,
   clearQueue
 }
 