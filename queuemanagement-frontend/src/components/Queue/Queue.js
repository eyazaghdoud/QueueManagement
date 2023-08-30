import Nav from "../Nav/Navbar";
import './queue.css';
import CurrentTicket from "./CurrentTicket";
import { useState } from "react";
import { useEffect } from "react";
import TicketServices from "../../API/TicketServices";

export default function Queue() {
    const [queue, setQueue] = useState([])
    const [currentTicket, setCurrentTicket] = useState({})
    const [currentClient, setCurrentClient] = useState({})
    const [currentService, setCurrentService] = useState({})

    useEffect(() => {
        TicketServices.getWaitingTickets()
        .then(response => {
            setQueue(response.data)
            console.log(queue.length)
            

        })
        .catch(error => {
            console.log(error)
        })

        TicketServices.getCurrentTicket()
        .then(response => {
           
            setCurrentTicket(response.data)
            setCurrentClient(response.data.client)
            //setCurrentService(response.data.service)
            console.log(response.data)
            console.log(currentClient)
            
        })
        .catch(error => {
            console.log(error)
        })

}, [])

const nextTicket = () => {
    TicketServices.passNextTicket()
    .then(response => {
        window. location. reload();
       
    
    })
    .catch(error => {
        console.log(error)
    })
    }

    return (
        <>
            <Nav />
            {/**** current ticket */}
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
                                            <span class="text-5xl text-gray-800 font-bold leading-0">{currentTicket.number}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li class="space-x-2">
                                        <span class="text-Blue-950 font-semibold">Client:</span>
                                        <span>{currentClient.lastName} {currentClient.firstName}</span>
                                    </li>
                                    {/*<li class="space-x-2">
                                        <span class="text-Blue-950 font-semibold">Service:</span>
                                        <span>{currentService.libel}</span>
    </li>*/}
                                </ul>
                                
                                <button  onClick={nextTicket}
                                 class="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-950 hover:bg-yellow-200 disabled:bg-gray-400"
                                 disabled={queue.length-1==0? true: false}
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
                                     
                                        <span>
                                            {queue.length===0?
                                              0: 
                                              queue.length-1
                                            }
                                            _en attente | 1 cours </span>
                                    </li>
                                    <li class="space-x-2 text-center">
                                        <span>Total des tickets traités: </span>
                                    </li>
                                    <li class="ml-80">
                                    <button type="submit" 
                                 class="block py-3 px-6 text-center rounded-xl transition bg-gray-700 hover:bg-yellow-200 ml-60  "
                                 disabled={queue.length-1!==0}
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
            {/***** end current ticket */}
            
            <div class="flex flex-col bg-white ">
                <h1
                    class="flex py-5 lg:px-20   font-bold text-2xl text-gray-800"
                >
                    File d'attente
                </h1>
                <div
                    class="flex overflow-x-scroll pb-7 hide-scroll-bar"
                >
                    <div
                        class="flex flex-nowrap ml-10 "
                    >
                        {queue.length-1===0 &&
                         <div> 
                             <p> Pas de clients en attente.</p>
                          </div>
                        }
                        {queue.map((ticket) => (
     
                       ticket.number!==currentTicket.number &&
                        <div key={ticket.id} class="inline-block px-3">
                            <div
                                class="w-64 h-64 max-w-xs  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{height:'150px'}}
                            >
                                <div style={{padding:'50px'}}>
                                <p >Ticket {ticket.number}</p>
                                <p >{ticket.client.lastName} {ticket.client.firstName}  </p>
                               </div>

                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
           

        </>
    );
}