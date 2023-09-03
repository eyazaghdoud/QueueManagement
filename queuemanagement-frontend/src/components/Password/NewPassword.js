import LoginNav from "../Login/LoginNav";
import UserServices from "../../API/UserServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../index.css';
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";

export default function NewPassword() {
    const navigate = useNavigate();
    const initialValues = { newPwd: "", confirmNewPwd: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [matchError,setMatchError] = useState();
    const phoneNumber = JSON.parse(localStorage.getItem("phoneNumber"));

    const validate = (values) => {
        const errors = {};
        
        if (values.newPwd === '') {
            errors.newPwd= "Veuillez saisir votre nouveau mot de passe";
        }
        if (values.confirmNewPwd === '') {
            errors.confirmNewPwd = "Veuillez confirmer votre nouveau mot de passe";
        }
    
        return errors;
    }

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      }

    const handleSubmit = (e) => {
        const resetPwdRequest = {
            phoneNumber:phoneNumber,
            newPwd: formValues.newPwd,
            confirmNewPwd:formValues.confirmNewPwd
        }

        e.preventDefault();

        setFormErrors(validate(formValues));


  if (Object.keys(validate(formValues)).length === 0) {
        UserServices.resetPassword(resetPwdRequest)
        .then(response => {
            console.log(response.data)
            if (response.data === "password has been reset") {
                navigate("/")
            }
            else {
               setMatchError("Les mots de passe ne correspondent pas")
                console.log("wrong code")
            }
        })

        .catch(error => {
            console.log(error)

        });

    }
    }
    return (
        <>
        <LoginNav/>

    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
       <div className="text-center">
        <h1 className="text-3xl font-medium">Réinitialiser votre mot de passe</h1>
        <p className="text-slate-500">Veuillez choisir votre nouveau mot de passe</p>
       </div>
        <form onSubmit={handleSubmit} className="my-10">
            <div className="flex flex-col space-y-5">
            <div className="text-center">
                        <p className="error-message">{matchError}</p>
                        </div>
                <label for="newPwd">
                    <p className="font-medium text-slate-700 pb-2">Mot de passe</p>
                  
                    <input id="newPwd" name="newPwd"
                     value={formValues.newPwd}
                     onChange={handleChange}
                     type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                     placeholder=""/>
                    <p className="error-message">{formErrors.newPwd}</p>
                </label>

                <label for="confirmNewPwd">
                    <p className="font-medium text-slate-700 pb-2">Confirmation du mot de passe</p>
                    
                    <input id="confirmNewPwd" name="confirmNewPwd"
                     value={formValues.confirmNewPwd}
                     onChange={handleChange}
                     type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                     placeholder=""/>
                      <p className="error-message">{formErrors.confirmNewPwd}</p>
                </label>
               
                <button className="w-full py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Réinitialiser</span>
                </button>
                
            </div>
        </form>
    </div>
    

</>
    );
}