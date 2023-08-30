import Layout from "../Login/Layout";
import classes from "../Login/LoginForm.module.scss";
import BookingForm from "../Booking/BookingForm";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Nav from '../Nav/Navbar';
import TicketServices from '../../API/TicketServices';

function Menu() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [clientTicket, setClientTicket] = useState({})

  let navigate = useNavigate();
  const [ticketInfo,setTicketInfo] = useState([]);
  const handleAppointmentClick = (event) => {
    event.preventDefault();
    navigate('/appointment');

  };

  useEffect(() => {
    TicketServices.getTicketInfo(currentUser.userInfo.id)
    .then(response => {
     
      if (response.data===""){
        setClientTicket(null) 
        console.log('null')
      }
      else {
        setClientTicket(response.data)
        console.log('not null')
      }
        

    })
    .catch(error => {
        console.log(error)
    })
  }, [])
  

  const handleTicketClick = (event) => {
    event.preventDefault();
   
    const bookTicketRequest = {
      service: {
        id: 1,
        libel: "carte agilis"
      },
      client: currentUser.userInfo
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

  const handleTicketInfo = (event) => {
    event.preventDefault(
      navigate('/Ticket')
    )
  }

  return (
    <div>
      <Nav />
      <Layout>
        <div className="mainBox">
          {clientTicket===null &&
          <button onClick={handleTicketClick}
            className={classes.loginBtn}
          >
            Réserver un ticket
          </button>
          }  {clientTicket!==null &&
            <button onClick={handleTicketInfo}
            className={classes.loginBtn}
          >
            Mon ticket
          </button>
          }
          <button
            className={classes.loginBtn}
            onClick={handleAppointmentClick}
          >
            Mes rendez-vous
          </button>
        </div>
      </Layout>

    </div>
  );
}

export default Menu;