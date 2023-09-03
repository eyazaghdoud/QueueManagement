
import LoginHead from "../Login/LoginHead"
import LoginNav from "../Login/LoginNav"
import classes from "../Login/LoginForm.module.scss"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import UserServices from '../../API/UserServices'

export default function SignUp() {
    let navigate = useNavigate();
    
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "CLIENT"
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const submitHandler = (e) => {
        const signupRequest = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            password: formValues.password,
            role: formValues.role
        };

        e.preventDefault();


        UserServices.signUp(signupRequest)
            .then(response => {
                console.log(response.data)
                if (response.data === 'new user saved') {
                    navigate('/')

                } else if (response.data === 'user with this email already exists') {
                    console.log("exists")
                }
                else if (response.data === 'user with this phone number already exists') {
                    console.log("exists")
                }
            })

            .catch(error => {
                console.log(error)

            });



    }
   
    return (
        <>
            <LoginNav />

            <div class="flex items-center min-h-screen bg-white dark:bg-gray-900" style={{marginTop:'-5%'}}>
                <div class="container mx-auto">
                    <div class="max-w-md mx-auto my-10">
                        <div class="text-center">
                            <LoginHead title='Créer votre compte' desc='Veuillez remplir ces champs'/>
                        </div>
                        <div class="m-7">
                            <form action="post" onSubmit={submitHandler}>
                               <div class="mb-6">
                                    <label for="lastName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nom</label>
                                    <input type="text" 
                                    required
                                    name="lastName" 
                                    id="lastName" placeholder="Nom" 
                                    onChange={handleChange}
                                    value={formValues.lastName}
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Prénom</label>
                                    <input type="text" 
                                    name="firstName" 
                                    required
                                    id="firstName" placeholder="Prénom" 
                                    onChange={handleChange}
                                    value={formValues.firstName}
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="email" 
                                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input type="email" 
                                    name="email" id="email" 
                                    required
                                    onChange={handleChange}
                                    value={formValues.email}
                                    placeholder="email@email.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="tel" 
                                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Numéro de téléphone</label>
                                    <input type="text" 
                                    name="phoneNumber" id="phoneNumber" 
                                    required
                                    onChange={handleChange}
                                    value={formValues.phoneNumber}
                                    placeholder="(+216)" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                    </div>
                                    <input type="password" 
                                    name="password" id="password" 
                                    required
                                    onChange={handleChange}
                                    value={formValues.password}
                                    placeholder="Your Password" 
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <button type="submit" 
                                     className={classes.loginBtn}>
                                        Créer mon compte
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}