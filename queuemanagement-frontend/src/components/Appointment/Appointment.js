import Nav from "../Nav/Navbar";
import appointment from '../../assets/appointment.png'

export default function Appointment() {

    return (
        <>
            <Nav />
            <h1  class="flex py-5 lg:px-20   font-bold text-3xl text-gray-800">
                Rendez-vous
            </h1>
            <h1  class="flex py-1 px-20 m-0 font-bold text-xl text-gray-800" style={{marginTop:'-20px'}}>
                22-08-2023
            </h1>
            <div class='flex items-center justify-center mt-10'>
                <div  
                class="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <img class=" block h-20 w-20 rounded-lg" alt="art cover" loading="lazy" src={appointment} />
                    <div class="sm:w-8/12 pl-0 p-5">
                        <div class="space-y-2">
                            <div class="space-y-4">
                                <h4 class="text-md text-xl font-semibold text-cyan-900 text-justify">
                                    Client: nom et prenom
                                </h4>
                            </div>
                            <div class="flex items-center space-x-4 justify-between">
                                <div class="flex gap-3 space-y-1">
                                    <span class="text-text-xl">Service: service</span>
                                </div>
                                
                            </div>
                            <div class="flex items-center space-x-4 justify-between">
                                <div class="text-grey-500 flex flex-row space-x-1  my-4">
                                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p class="text-l">8h30</p>
                                </div>
                                <div class="flex flex-row space-x-1">
                                    <div
                                        class="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                                        <span>Absence</span>
                                    </div>
                                    <div
                                        class="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                        <span>Cloturer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}