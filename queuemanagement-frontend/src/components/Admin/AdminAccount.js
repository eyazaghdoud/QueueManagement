import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom";
import './dashboard.css';
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../../API/UserServices'
import { Link } from "react-router-dom"

export default function AdminAccount() {


    let navigate = useNavigate();

    const [user, setUser] = useState([])
    const initialValues = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        role: user.role
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
            UserServices.getSingleUser('flenn@flen')
            .then(response => {
                setUser(response.data)
                setFormValues(initialValues);                
                
            })
            .catch(error => {
                console.log(error)
            })

    }, [])
 
    const handleSubmit = (e) => {

        const updateInfoRequest = {
            id:initialValues.id,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,

        };
        e.preventDefault();


        UserServices.updateInfo(updateInfoRequest)
            .then(response => {
                console.log(response.data)
                if (response.data === 'user info updated successfully') {
                    window.location.reload(); 

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
        

    };


    return (
        <>

            <DashboardHeader />


            <div x-data="setup()" class="dark h-full " >
                <div class=" h-full ml-14 mt-20 mb-10 md:ml-64 dark ">
                    <form onSubmit={handleSubmit} class="h-full dark " style={{ marginTop: '7%' }} >

                        <div class=" ml-8 mr-8 border-b-2 bg-gray-800 dark md:flex">

                            <div class=" md:w-2/5 p-4 sm:p-6 lg:p-8 dark shadow-md ">
                                <div class="flex justify-between">

                                    <span class="text-xl text-gray-300 font-semibold block">{user.firstName} {user.lastName}</span>
                                    <button 
                                    type='submit'
                                    class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                        Edit</button>
                                </div>

                                <span class="text-gray-200">Informations de connexion</span>

                                <div class="w-full p-8 mx-2 flex justify-center">
                                </div>

                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input type="email" name="email" id="email" 
                                    onChange={handleChange}
                                    value={formValues.email}
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div >
                                    <div class="mb-6">
                                        <div class="flex justify-between mb-2">
                                            <label 
                                            for="password" 
                                            class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                        </div>
                                        <input type="password" name="password" id="password"
                                            placeholder="*********" disabled
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <Link to="/admin_change_password"
                                        class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                        Changer le mot de passe</Link>

                                </div>
                            </div>

                            <div class="w-full md:w-3/5 p-8 dark lg:ml-4 shadow-md">
                                <div class="rounded  shadow p-6">
                                    <div class="mb-6">
                                        <label for="lastName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nom</label>
                                        <input type="text"
                                            name="lastName"
                                            id="lastName"
                                            onChange={handleChange}
                                            value={formValues.lastName}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Prénom</label>
                                        <input type="text"
                                            name="firstName"
                                            id="firstName" 
                                            onChange={handleChange}
                                           value={formValues.firstName}
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <div class="mb-6">
                                        <label for="phoneNumber"
                                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Numéro de téléphone</label>
                                        <input type="text"
                                            name="phoneNumber" id="phoneNumber"
                                            onChange={handleChange}
                                            value={formValues.phoneNumber} 
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>
                </div>
    </div>



        </>
    )
}