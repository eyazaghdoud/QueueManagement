
import logo from '../../assets/agil.gif';
import { Link } from 'react-router-dom';
import Authentication from '../../Authentication/Authentication';
import { useNavigate } from 'react-router-dom';
export default function Nav() {

    const currentUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogout = () => {
        Authentication.handleLogout();
        navigate('/')

    }
    return (
        <>
<nav class="border-gray-200 mb-10 mt-10" >
    <div class="w-full mx-auto">
        <div class="mx-2 flex flex-wrap items-center justify-between">
            <a href="#" class="flex">
           <img class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none"
    src={logo}/>
                <span class="self-center text-lg font-semibold whitespace-nowrap">Agil-Rendez-vous et file d'attente</span>
            </a>
            <div class="flex md:hidden md:order-2">
                <button data-collapse-toggle="mobile-menu-3" type="button"
                    class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                    aria-controls="mobile-menu-3" aria-expanded="false">
                    <span class="sr-only"></span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
                <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    {currentUser.userInfo.role==="OPERATOR" &&
                    <>
                    <li>
                        <Link to='/Queue'
                            class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                            aria-current="page">File d'attente</Link>
                    </li>
                     <li>
                     <Link to='/appointments'
                         class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                            Rendez-vous</Link>
                 </li>
                 <li>
                     <Link to ='/Account'
                         class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
                            Compte</Link>
                 </li>
                 </>
                    }
                     {currentUser.userInfo.role==="CLIENT" &&
                     <>
                    <li>
                        <Link to='/Ticket'
                            class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                            aria-current="page">Ticket</Link>
                    </li>
                     <li>
                     <Link to='/appointment'
                         class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Rendez-vous</Link>
                 </li>
                 <li>
                     <Link to='/Account'
                         class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Compte</Link>
                 </li>
                 </>
                    }
                   
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
    </div>
</nav>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
</>
    )
};