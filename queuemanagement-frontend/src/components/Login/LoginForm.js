import { useRef, useEffect, useContext } from "react";

import classes from "./LoginForm.module.scss";
import usernameIcon from "../../assets/akar-icons_person.svg";
import passwordIcon from "../../assets/carbon_password.svg";
//import ValidUserContext from "../../authCheck";
import LoginHead from './LoginHead.js';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../Authentication/Authentication';
import { useState } from "react";


import Layout from "./Layout";

let isInitial = true;

function LoginForm() {

  let navigate = useNavigate();
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {

    const errors = {};
    if (values.username === '') {
        errors.username = "Username is required!";
    }
    if (values.password === '') {
        errors.password = "Password is required!";
    }

    return errors;
}

const handleChange = (e) => {

  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const handleSubmit = (e) => {
  const loginRequest = {
      username: formValues.username,
      password: formValues.password,
  };

  e.preventDefault();


  setFormErrors(validate(formValues));


  if (Object.keys(validate(formValues)).length === 0) {


   /***********  calling the function authentication from AuthProvider ************/

      Authentication.authentication(loginRequest)
      .then((response) => {
          if (response.data.jwttoken !== "failed") {

              localStorage.setItem("user", JSON.stringify(response.data));
              localStorage.setItem("password", loginRequest.password);   
              navigate("/Menu")

          } else {

              console.log("can't log in")
            
          };

      })
          .catch(error => {
              console.log(error)

          });

  }

  else { console.log("error") }
}


  return (
    <Layout>
        <LoginHead />
    <form onSubmit={handleSubmit} className={classes.form}>

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
          onChange={handleChange}
          value={formValues.username}
        ></input>

      </div>
      <p>{formErrors.username}</p>
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
          onChange={handleChange}
          value={formValues.password}
        ></input>
      </div>
      <p>{formErrors.password}</p>
      <button
        className={classes.loginBtn}
        type='submit'
        
      >
        Login
       
      </button>
    </form>
    </Layout>
  );
}

export default LoginForm;
