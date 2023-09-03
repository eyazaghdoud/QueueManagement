import LoginNav from "../Login/LoginNav";
import UserServices from "../../API/UserServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import '../../index.css';

export default function CodeConfirmation() {
    const navigate = useNavigate();
    const [formCode, setFormCode] = useState();
    const [codeError,setCodeError] = useState();
    const number = JSON.parse(localStorage.getItem("phoneNumber"));

    useEffect(() => {
      console.log(number)
    
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const codeConfirmationRequest = {
            phoneNumber: number,
            code:formCode
        }
        UserServices.verifyCode(codeConfirmationRequest)
        .then(response => {
            console.log(response.data)
            if (response.data === "wright code") {
                navigate("/new_password")
            }
            else {
                setCodeError("Le code saisit ne correspond pas au code envoyé!")
                console.log("wrong code")
            }
        })

        .catch(error => {
            console.log(error)

        });

    }
    return (
        <>
        <LoginNav/>

    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
       <div className="text-center">
        <h1 className="text-3xl font-medium">Réinitialiser votre mot de passe</h1>
        <p className="text-slate-500">Veuillez entrer le code envoyé au {number}</p>
       </div>
        <form onSubmit={handleSubmit} className="my-10">
            <div className="flex flex-col space-y-5">
                <label for="formCode">
                    <p className="font-medium text-slate-700 pb-2">Code</p>
                    <div className="text-center">
                        <p className="error-message">{codeError}</p>
                        </div>
                    <input id="formCode" name="formCode"
                     value={formCode}
                     onChange={(e)=>setFormCode(e.target.value)}
                     type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                     placeholder="****"
                     required/>
                </label>
               
                <button className="w-full py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Confirmer</span>
                </button>
                
            </div>
        </form>
    </div>
    

</>
    );
}