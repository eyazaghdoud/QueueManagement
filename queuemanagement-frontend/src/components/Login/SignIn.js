
import LoginHead from "./LoginHead"
import LoginNav from "./LoginNav"
import classes from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import Authentication from '../../Authentication/Authentication';
import { useState } from "react";
import '../../index.css'

export default function SignIn() {

    let navigate = useNavigate();
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [authError,setAuthError] = useState();
  const validate = (values) => {
    const errors = {};
    
    if (values.username === '') {
        errors.username = "Veuillez saisir votre e-mail";
    }
    if (values.password === '') {
        errors.password = "Veuillez saisir votre mot de passe";
    }

    return errors;
}

const handleChange = (e) => {

  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const handleSubmit = (e) => {
  const loginRequest = {
      email: formValues.username,
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
              console.log(response.data)
              if (response.data.userInfo.role==='ADMIN') {
                navigate("/employees")
              } else if (response.data.userInfo.role==='OPERATOR') {
              navigate("/management_menu")}
              else if (response.data.userInfo.role==='CLIENT'){
              navigate("/Menu")
              }

          } else {
            setAuthError("E-mail ou mot de passe incorrect")
              console.log("can't log in")
            
          };

      })
          .catch(error => {
              console.log(error)

          });

  }

  else { console.log("error") }
}

      const signUpHandler = (event) => {
        event.preventDefault();
        navigate('/SignUp');
       
      };
      const resetPwdHandler = (event) => {
        event.preventDefault();
        navigate('/Reset_password');
       
      };


    return (
        <>
            <LoginNav />

            <div className="flex items-center min-h-screen bg-white dark:bg-gray-900" style={{ marginTop: '-8%', marginBottom:'0' }}>
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <LoginHead title='Login' desc='Veuillez saisir votre e-mail et mot de passe'/>
                            </div>
                        <div className="text-center">
                        <p className="error-message">{authError}</p>
                        </div>
                        <div className="m-7">
                        
                            <form action="post" onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input 
                                    type="email" name="username" id="username" 
                                    onChange={handleChange}
                                    value={formValues.username}
                                    placeholder="email@gmail.com" 
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <p className="error-message">{formErrors.username}</p>
                                <div className="mb-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                        <a onClick={resetPwdHandler}
                                        style={{cursor:'pointer'}}
                                        className="text-sm hover:text-blue-950 text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">
                                            Mot de passe oublié?
                                            </a>
                                    </div>
                                    <input type="password" 
                                    name="password" 
                                    id="password" 
                                    onChange={handleChange}
                                    value={formValues.password}
                                    placeholder="***********" 
                                    
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <p className="error-message">{formErrors.password}</p>
                                <div className="mb-6">
                                    <button type="submit" 
                                    
                                     className="w-full py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                        Connexion
                                    </button>
                                </div>
                                <p className="text-sm text-center text-gray-400">Vous n'avez pas de compte? 
                                <a onClick={signUpHandler}
                                className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                                    Créer un compte</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}