import Layout from "../Login/Layout";
import classes from "../Login/LoginForm.module.scss";
import BookingForm from "../Booking/BookingForm";
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Navbar';

function Next() {
  let navigate = useNavigate();
  const handleAppointmentClick = (event) => {
    event.preventDefault();
    navigate('/Book_appointment');
   /* validUserContext.apiAuthCheck(
      emailInputRef.current.value,
      passwordInputRef.current.value
    );*/
  };
    return (
      <div> 
        <Nav/>
        <Layout>
          <div className="mainBox">
        <button
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