import Layout from "../Login/Layout";
import classes from "../Login/LoginForm.module.scss";
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Navbar';


function OperatorMenu() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();
 
  const handleAppointmentClick = (event) => {
    event.preventDefault();
    navigate('/appointments');

  };

  

  const handleQueueClick = (event) => {
    event.preventDefault();
    navigate('/Queue')
  }

  return (
    <div>
      <Nav />
      <Layout>
        <div className="mainBox">
       
            <button onClick={handleQueueClick}
            className={classes.loginBtn}
          >
            Gestion de la file d'attente
          </button>
          
          <button
            className={classes.loginBtn}
            onClick={handleAppointmentClick}
          >
            Cloture des rendez-vous
          </button>
        </div>
      </Layout>

    </div>
  );
}

export default OperatorMenu;