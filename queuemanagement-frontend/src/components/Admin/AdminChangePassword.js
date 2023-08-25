import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import UserServices from '../../API/UserServices'
import { useEffect} from 'react'
import '../../index.css'


export default function AdminChangePassword() {
    let navigate = useNavigate();
    const [user, setUser] = useState([])
    useEffect(() => {
        UserServices.getSingleUser('flenn@flen')
        .then(response => {
            setUser(response.data)
        })
        .catch(error => {
            console.log(error)
        })

}, [])
    const [formValues, setFormValues] = useState({
        id:user.id,
        oldPwd: "",
        newPwd: "",
        confirmNewPwd: ""
        }
    )
    
    const [formErrors, setFormErrors] = useState({});

    let isDisabled = false;

    const checkError = (password) => {

        let message = '';
        if (password.length < 8) {
            message = "Your password needs a minimum of four characters"
            return { message, value: true }
        } else if (password.search(/[a-z]/) < 0) {
            message = "Your password needs a lower case letter";
            return { message, value: true }
        } else if (password.search(/[A-Z]/) < 0) {
            message = "Your password needs an uppser case letter";
            return { message, value: true }
        } else if (password.search(/[0-9]/) < 0) {
            message = "Your password needs a number";
            return { message, value: true }
        } else if (password.search(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) < 0) {
            message = "Your password needs a special character";
            return { message, value: true }
        } else {
            return { message, value: false };
        }
    }

    const validate = (values) => {

        let errors = {};

        if (values.oldPwd.length === 0) {

            errors.oldPwd = "Ce champ est obligatoire";
        }
        if (values.newPwd === '') {
            errors.newPwd = "Ce champ est obligatoire";
        }
        else if (checkError(values.newPwd).value) {
            errors.newPwd = checkError(values.newPwd).message;
        }
        if (values.confirmNewPwd === '') {
            errors.confirmNewPwd = "Ce champ est obligatoire";
        }
        else if (values.confirmNewPwd !== values.newPwd) {
            errors.confirmNewPwd = "Les mots de passe sont différents";
        }
        return errors;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        const changePwdRequest = {
            id: user.id,
            oldPwd: formValues.oldPwd,
            newPwd: formValues.newPwd,
            confirmNewPwd: formValues.confirmNewPwd
        };

        e.preventDefault();

        setFormErrors(validate(formValues));
        if (Object.keys(validate(formValues)).length === 0) {

            UserServices.changePassword(changePwdRequest)
                .then(response => {
                    if (response.data === "password changed successfully") {
                        navigate('/')
                    }
                    else{
                       console.log(response.data)

                    }
                })
                .catch(error => {
                    console.log(error)
                });


        } else {
            console.log("error");
        }

    }

    return (
        <>
        <DashboardHeader/>

        <div x-data="setup()" class="dark h-full w-120 " >
        <div class=" h-full ml-14 mt-20 mb-10 md:ml-64 dark ">
         <div class="text-black dark:text-white ml-8 mr-8" >
         <div class="md:col-span-2 xl:col-span-3">
        <h3 class="text-xl text-black font-semibold">Changer votre mot de passe</h3>
        </div>
       
        <form onSubmit={handleSubmit} class="h-full dark " style={{ marginTop: '7%' }}>
             <div class="mb-6">
                <label for="oldPwd">
                    <p class="font-medium text-slate-700 pb-2">Ancien mot de passe</p>
                    <input id="oldPwd" 
                    name="oldPwd"
                    onChange={handleChange}
                    value={formValues.oldPwd}  type="password" 
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="***********"/>
                    <p className="error-message">{formErrors.oldPwd}</p>
                </label>
            </div>
                                   
                <label for="newPwd">
                    <p class="font-medium text-slate-700 pb-2">Nouveau mot de passe</p>
                    <input id="newPwd" 
                    name="newPwd"
                    onChange={handleChange}
                    value={formValues.newPwd} 
                    type="password" 
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                   
                    placeholder="***********"/>
                    <p className="error-message">{formErrors.newPwd}</p>
                </label>
                <label for="confirmNewPwd">
                    <p class="font-medium text-slate-700 pb-2">Confirmation du nouveau mot de passe</p>
                    <input id="confirmNewPwd" 
                    name="confirmNewPwd"
                    onChange={handleChange}
                    value={formValues.confirmNewPwd}
                    type="password" 
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    
                    placeholder="***********"/>
                    <p className="error-message">{formErrors.confirmNewPwd}</p>
                </label>
                
               
                <button 
                type="submit"
                class="w-full mt-8 py-3 font-medium text-white bg-blue-950 hover:bg-yellow-300 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                      
                      <span>Confirmer</span>
                </button>
                
        
        </form>
    </div>
    </div>
    </div>

   
   
    

</>
    );
}