import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import UserServices from '../../API/UserServices'


export default function NewEmployeeForm() {

    let navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();

    };

    const roles = ["ADMIN", "OPERATOR"];
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const options = ["ADMIN", "OPERATOR"];

    const onOptionChangeHandler = (e) => {
        console.log("User Selected Value - ", e.target.value)
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        const signupRequest = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            password: formValues.password,
            role: formValues.role
        };

        e.preventDefault();




        /***********  calling the function addUser from Services.js ************/

        UserServices.signUp(signupRequest)
            .then(response => {
                console.log(response.data)
                if (response.data === 'new user saved') {
                    navigate('/employees')

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

            <DashboardHeader />


            <div x-data="setup()" class="dark h-full" >
                <div class=" h-full ml-14 mt-20 mb-10 md:ml-64 dark">
                    <div class="text-black dark:text-white ml-8 mr-8" >
                        <div class="md:col-span-2 xl:col-span-3">
                            <h3 class="text-xl text-black font-semibold">Ajouter un nouvel employé</h3>
                        </div>
                        <div >
                            <div class="rounded bg-gray-200 dark:bg-gray-800 p-3 " >
                                <div class="flex justify-between py-1 text-black dark:text-white">
                                    <h3 class="text-l font-semibold">Veuillez remplir ces champs</h3>
                                    <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                                </div>
                                <form action="post" onSubmit={handleSubmit}>
                                    <div class="mb-6">
                                        <label for="lastName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nom</label>
                                        <input type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Nom"
                                            onChange={handleChange}
                                            value={formValues.lastName}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Prénom</label>
                                        <input type="text"
                                            name="firstName"
                                            id="firstName" placeholder="prenom"
                                            onChange={handleChange}
                                            value={formValues.firstName}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                        <input type="email"
                                            name="email" id="email"
                                            placeholder="email@email.com"
                                            onChange={handleChange}
                                            value={formValues.email}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="phoneNumber"
                                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Numéro de téléphone</label>
                                        <input type="text"
                                            name="phoneNumber" id="phoneNumber"
                                            placeholder="(+216)"
                                            onChange={handleChange}
                                            value={formValues.phoneNumber}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="role" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Role</label>
                                        <select class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                            id='role'
                                            name='role'

                                            onChange={onOptionChangeHandler}
                                            value={formValues.role}
                                        >


                                            {options.map((option, index) => {
                                                return <option key={index} >
                                                    {option}
                                                </option>
                                            })}
                                        </select>
                                    </div>


                                    <div class="mb-6">
                                        <div class="flex justify-between mb-2">
                                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                        </div>
                                        <input type="password" name="password" id="password"
                                            placeholder="Your Password"
                                            onChange={handleChange}
                                            value={formValues.password}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <button type="submit"
                                        >
                                            Ajouter
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}