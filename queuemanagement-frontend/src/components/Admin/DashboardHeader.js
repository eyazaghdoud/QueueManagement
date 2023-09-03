import './dashboard.css'
import logo from '../../assets/agil.gif'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Authentication from '../../Authentication/Authentication'

export default function DashboardHeader() {

    const navigate = useNavigate()
    const handleLogout = () => {
        Authentication.handleLogout();
        navigate('/')

    }
    return (
        <>

<div x-data="setup()" class="dark">
                <div class="flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

                    {/* <-- ./Header -->*/}
                    <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
                        <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                            <img class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={logo} />
                            <span class="hidden md:block">ADMIN</span>
                        </div>
                        <div class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                            <div class="flex items-center w-full max-w-xl mr-4 p-2">
                               
                            </div>
                            <ul class="flex items-center">
                                
                                <li>
                                    <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                                </li>
                                <li>
                                    <a onClick={handleLogout} class="flex items-center mr-4 hover:text-blue-100">
                                        <span class="inline-flex mr-1">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        </span>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- ./Header -->*/}

                </div>
                  {/* <-- ./Sidebar -->*/}
                  <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                        <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                            <ul class="flex flex-col py-4 space-y-1">
                                <li class="px-5 hidden md:block">
                                    <div class="flex flex-row items-center h-8">
                                        <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                                    </div>
                                </li>
                                
                                <li>
                                    <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">
                                           <Link to='/employees'> Employés </Link>
                                            </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">
                                        <Link to='/clients'>Clients</Link>
                                        </span>
                                    </a>
                                </li>
                                
                                <li class="px-5 hidden md:block">
                                    <div class="flex flex-row items-center mt-5 h-8">
                                        <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                        <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">
                                        <Link to='/admin_account'>Compte</Link>
                                        </span>
                                    </a>
                                </li>
                               
                            </ul>
                            
                        </div>
                    </div>
                    </div>

                    {/* <!-- ./Sidebar -->*/}
              



            </>
            );
}