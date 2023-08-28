import axios from 'axios';

const API_URL = "http://localhost:8080/ticket";

/**** all tickets  ***/
const getAllTickets = async () => {
    return await axios.get(API_URL + "/all_booked_tickets" )  
 }

 /*** queue ****/
 const getWaitingTickets = async () => {
    return await axios.get(API_URL + "/waiting_tickets" )  
 }

/**** current ticket  ***/
const getCurrentTicket = async() => {
    return await axios.get(API_URL + "/current_ticket", 
  
   
    )
}

/**** next ticket  ***/
const passNextTicket = async() => {
    return await axios.get(API_URL + "/next_ticket", 
    )  
}


/**** book ticket  ***/
const bookTicket = async(bookTicketRequest) => {
    return await axios.post(API_URL + "/book_ticket", bookTicketRequest
    )  
}

/**** ticket info ***/
const getTicketInfo = async(clientId) => {
    return await axios.post(API_URL + "/ticket_info", clientId, 
     {
        headers: {
        'Content-Type': 'application/json',
        }
    }
    )
   
}


 export default {
    getWaitingTickets,
   getAllTickets,
   getCurrentTicket,
   getTicketInfo,
   passNextTicket,
   bookTicket    
 }
 