import { useRef, useEffect, useContext } from "react";

import classes from "./LoginForm.module.scss";
import usernameIcon from "../../assets/akar-icons_person.svg";
import passwordIcon from "../../assets/carbon_password.svg";
//import ValidUserContext from "../../authCheck";
import LoginHead from './LoginHead.js';
import { useNavigate } from 'react-router-dom';

import Layout from "./Layout";

let isInitial = true;

function LoginForm() {
 //const validUserContext = useContext(ValidUserContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  let navigate = useNavigate();

  /*useEffect(() => {
    if (isInitial) {
      validUserContext.localAuthCheck();
      isInitial = false;
    }
  }, [validUserContext]);*/

  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/Menu');
   /* validUserContext.apiAuthCheck(
      emailInputRef.current.value,
      passwordInputRef.current.value
    );*/
  };

  return (
    <Layout>
        <LoginHead />
    <form onSubmit={submitHandler} className={classes.form}>

      <div>
        <img
          className={classes.icon}
          src={usernameIcon}
          alt="Username icon"
          htmlFor="user-name"
        ></img>
        <input
          className={classes.input}
          type="email"
          id="user-name"
          name="user-name"
          autoComplete="on"
          placeholder="E-mail"
          ref={emailInputRef}
         /* required={!validUserContext.isLoggedIn}*/
        ></input>
      </div>

      <div>
        <img
          className={classes.icon}
          src={passwordIcon}
          alt="Password icon"
          htmlFor="user-password"
        ></img>
        <input
          className={classes.input}
          type="password"
          id="user-password"
          name="user-password"
          autoComplete="off"
          placeholder="Mot de passe"
          ref={passwordInputRef}
         /* required={!validUserContext.isLoggedIn}*/
        ></input>
      </div>
      <button
        className={classes.loginBtn}
        /*disabled={validUserContext.isLoggedIn}*/
        
      >
        Login
        {/*validUserContext.isLoggedIn ? "Already logged in" : "Login"*/}
      </button>
    </form>
    </Layout>
  );
}

export default LoginForm;
