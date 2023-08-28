import Layout from "../Login/Layout";
import classes from "../Login/LoginForm.module.scss";
import BookingForm from "../Booking/BookingForm";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Nav from '../Nav/Navbar';
import TicketServices from '../../API/TicketServices';

function Next() {
  let navigate = useNavigate();
  const [ticketInfo,setTicketInfo] = useState([]);
  const handleAppointmentClick = (event) => {
    event.preventDefault();
    navigate('/Book_appointment');

  };

  const handleTicketClick = (event) => {
    event.preventDefault();
    const bookTicketRequest = {
      service: {
        id: 1,
        libel: "carte agilis"
      },
      client: {
        id: 4,
        firstName: "flen4",
        lastName: "flen4",
        email: "flen4@flen",
        phoneNumber: 31652489,
        role: "CLIENT"
      }
    }
    TicketServices.bookTicket(bookTicketRequest)
    .then(response => {
       setTicketInfo(response.data)
       console.log(response.data)
       navigate('/Ticket')
        
  
    })
    .catch(error => {
        console.log(error)
    })


  };

  return (
    <div>
      <Nav />
      <Layout>
        <div className="mainBox">
          <button onClick={handleTicketClick}
            className={classes.loginBtn}
          >
            Réserver un ticket
          </button>
          <button
            className={classes.loginBtn}
            onClick={handleAppointmentClick}
          >
            Prendre un rendez vous
          </button>
        </div>
      </Layout>

    </div>
  );
}

export default Next;