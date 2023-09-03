import classes from "../Login/LoginForm.module.scss";
import Layout from "../Login/Layout";
import classes1 from "../Login/LoginHead.module.scss";
import Nav from "../Nav/Navbar";
import { useState, useEffect } from "react";
import AppointmentServices from '../../API/AppointmentServices'
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns';
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";


function BookingForm() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate()
 const [date, setDate] = useState()
 const [time, setTime] = useState();
 const [showModal, setShowModal] = useState(false);




 const initialValues = {
   
  client:currentUser.userInfo
  }
const [formValues, setFormValues] = useState(initialValues);



const handleChange = (e) => {
  console.log("User Selected Value - ", e.target.value);
  //e.preventDefault();
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const handleSubmit = (e) => {

  const appointment = {
    date:format(date,'yyyy-MM-dd'),
    time:format(time,'HH:mm:ss'),
    client: initialValues.client
  };

  e.preventDefault();


    AppointmentServices.bookAppointment(appointment)
      .then(response => {
          console.log(response.data)
          if (response.data === 'new appointment saved') {
              navigate('/appointment')

          } else if (response.data === 'appointment already booked') {
            setShowModal(true)
              console.log("exists")
          }
          
      })

      .catch(error => {
          console.log(error)

      });

     
}



    return (
      <>
           <Nav/> 
           <Layout>
      <div>
        <title className={classes1.loginTitle} style={{marginTop:'-20%'}}>Prendre un rendez-vous</title>
        <div>Veuillez choisir la date et l'horaire</div>
      </div>
      <form  className={classes.form} onSubmit={handleSubmit}>
        
        
      <label htmlFor="date" >Date:</label>
      <div >
      <DatePicker 
      className={classes.input} selected={date} 
      dateFormat="dd-MM-yyyy"
      onChange={(date) => {

        setDate(date); 
 

      }
        } />
      </div>
        
        
         
        <label htmlFor="time">Horaire:</label>
        <DatePicker 
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="Heure"
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        className={classes.input} selected={time} onChange={(time) => {
          //chosenT=format(time,'HH:mm:ss')
          setTime(time);
         //console.log(chosenT);
         

      }
        } />
       

       <button style={{marginTop:'10px'}}
        className={classes.loginBtn}
        type='submit'

        
      >
        Confirmer
 
      </button>
    </form>
    </Layout>

    <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-red-800 dark:text-neutral-200">
                Rendez-vous déjà reservé
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>Un rendez-vous est déjà reservé pour cette date et cet horaire. Veuillez choisir une autre date ou horaire.</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowModal(false)}
                >
                  D'accord
                </button>
              </TERipple>
             
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
   </>
    );
  }
  
  export default BookingForm;