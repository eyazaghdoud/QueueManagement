import Nav from "../Nav/Navbar";


export default function CurrentTicket() {
    const numberOfItems = 5;
    return (
        <>
            <div >
                <div class="container m-auto ">
                   
                    <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex  w-100">
                        <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                            <div aria-hidden="true" 
                            class="absolute top-0 w-200  h-200 rounded-1xl bg-white shadow-xl  "
                            
                            ></div>
                            <div class="relative p-4 " >
                                <h3 class="text-xl text-gray-700 font-semibold text-center">Ticket en cours</h3>
                                <div>
                                    <div class="relative flex justify-around">
                                        <div class="flex items-end">
                                            <span class="text-5xl text-gray-800 font-bold leading-0">35</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li class="space-x-2">
                                        <span class="text-Blue-950 font-semibold">Client:</span>
                                        <span>Nom et prénom</span>
                                    </li>
                                    <li class="space-x-2">
                                        <span class="text-Blue-950 font-semibold">Service:</span>
                                        <span>Service</span>
                                    </li>
                                </ul>
                                
                                <button type="submit" 
                                 class="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-950 hover:bg-yellow-200 "
                                
                                 >
                                    <span class="text-white font-semibold">
                                        Ticket suivant
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div class=" justify-center relative group md:w-6/12 lg:w-7/12">
                            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl  lg:p-10">
                                <ul role="list" class="space-y-4 text-center text-gray-600">
                                    
                                    <li class="space-x-2  text-center text-2xl">
                                        <span >File d'attente</span>
                                        
                                    </li>
                                    <li class="space-x-2 text-center">
                                     
                                        <span>2 en attente | 1 cours</span>
                                    </li>
                                    <li class="space-x-2 text-center">
                                        <span>Total des tickets traités: 12</span>
                                    </li>
                                    <li class="ml-80">
                                    <button type="submit" 
                                 class="block py-3 px-6 text-center rounded-xl transition bg-gray-700 hover:bg-yellow-200 ml-60  "
                                
                                 >
                                    <span class="text-white font-semibold">
                                        Cloturer
                                    </span>
                                </button>
                                    </li>
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}