import { Button } from "@material-ui/core"
import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom";
import './dashboard.css'

export default function AdminAccount() {

    let navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();

    };


    return (
        <>

            <DashboardHeader />


            <div x-data="setup()" class="dark h-full " >
                <div class=" h-full ml-14 mt-20 mb-10 md:ml-64 dark ">
                    <form class="h-full dark " style={{ marginTop: '7%' }} >

                        <div class=" ml-8 mr-8 border-b-2 bg-gray-800 dark md:flex">

                            <div class=" md:w-2/5 p-4 sm:p-6 lg:p-8 dark shadow-md ">
                                <div class="flex justify-between">

                                    <span class="text-xl text-gray-300 font-semibold block">Nom et prénom</span>
                                    <button href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                        Edit</button>
                                </div>

                                <span class="text-gray-200">Informations de connexion</span>

                                <div class="w-full p-8 mx-2 flex justify-center">
                                </div>

                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div >
                                    <div class="mb-6">
                                        <div class="flex justify-between mb-2">
                                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>
                                        </div>
                                        <input type="password" name="password" id="password"
                                            placeholder="Your Password"
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <button
                                        class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                        Changer le mot de passe</button>

                                </div>
                            </div>

                            <div class="w-full md:w-3/5 p-8 dark lg:ml-4 shadow-md">
                                <div class="rounded  shadow p-6">
                                    <div class="mb-6">
                                        <label for="lastname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nom</label>
                                        <input type="text"
                                            name="lastname"
                                            id="lastname" placeholder="Nom"
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label for="firstname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Prénom</label>
                                        <input type="text"
                                            name="firstname"
                                            id="firstname" placeholder="prenom"
                                            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <div class="mb-6">
                                        <label for="tel"
                                            class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Numéro de téléphone</label>
                                        <input type="text"
                                            name="tel" id="tel" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
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