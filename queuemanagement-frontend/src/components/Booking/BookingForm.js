import classes from "../Login/LoginForm.module.scss";
import Layout from "../Login/Layout";
import classes1 from "../Login/LoginHead.module.scss";
import Nav from "../Nav/Navbar";
function BookingForm() {
  
    return (
      <>
           <Nav/> 
           <Layout>
      <div>
        <title className={classes1.loginTitle} style={{marginTop:'-20%'}}>Prendre un rendez-vous</title>
        <div>Veuillez choisir la date et l'horaire</div>
      </div>
      <form  className={classes.form}>
        
        
      <label htmlFor="date" >Date:</label>
      
        <input className={classes.input}
          type="date"
          id="date"
         
        />

        <label htmlFor="time">Horaire:</label>
        <input className={classes.input}
          type="time"
          id="time"
         
        />
      <button
        className={classes.loginBtn}
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