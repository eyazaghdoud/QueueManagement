import classes from "../Login/LoginForm.module.scss";
import Layout from "../Login/Layout";
import classes1 from "../Login/LoginHead.module.scss";
import Nav from "../Nav/Navbar";
import { useState, useEffect } from "react";
import ServiceServices from '../../API/ServiceServices'
import AppointmentServices from '../../API/AppointmentServices'
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { TimePicker } from 'react-ios-time-picker';
//import TimePicker from 'react-time-picker';  

import { format } from 'date-fns';


function BookingForm() {
  let navigate = useNavigate()
 const [options, setOptions] = useState([])
 const [date, setDate] = useState()
 const [time, setTime] = useState();
 const [chosenService, setchosenService] = useState();
 const [service, setService] = useState({});


 const initialValues = {
   
   service: {
         id:1,
         libel:"carte agilis"
     },
  client: { 
   id: 1,
   firstName:"flen",
   lastName: "flenn",
   email: "email@email.com",
   phoneNumber: 5555555,
   role:"CLIENT"
    }
  }
  const [formValues, setFormValues] = useState(initialValues);

 useEffect(() => {
  ServiceServices.getAllServices()
  .then(response => {
      setOptions(response.data)

      

  })
  .catch(error => {
      console.log(error)
  })

}, [])

const handleChange = (e) => {
  e.preventDefault()
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const handleSubmit = (e) => {

 ServiceServices.getServiceByLibel(chosenService)
      .then(response => {
         
          setService(response.data)
          
      })

      .catch(error => {
          console.log(error)

      });

  const appointment = {
    date:format(date,'yyyy-MM-dd'),
    time:format(time,'HH:mm:ss'),
    service: service,
    client: initialValues.client
  };

  e.preventDefault();


    AppointmentServices.bookAppointment(appointment)
      .then(response => {
          console.log(response.data)
          if (response.data === 'new appointment saved') {
              navigate('/appointment')

          } else if (response.data === 'appointment already booked') {
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
       // chosen =format(date,'yyyy-MM-dd');
       // console.log(chosen)
        setDate(date); 
      //  console.log(date);

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
       
    
        <label>Service</label>
          <select className={classes.input}
          id='service'
          name='service'
          value={chosenService}
          onChange={(e)=> setchosenService(e.target.value)}
          
           >
             {options.map(s=> (
              <option key={s.id}>{s.libel}</option>
             ))}
        
          </select>

       <button style={{marginTop:'10px'}}
        className={classes.loginBtn}
        type='submit'
        /*disabled={validUserContext.isLoggedIn}*/
        
      >
        Confirmer
        {/*validUserContext.isLoggedIn ? "Already logged in" : "Login"*/}
      </button>
    </form>
    </Layout>
   </>
    );
  }
  
  export default BookingForm;