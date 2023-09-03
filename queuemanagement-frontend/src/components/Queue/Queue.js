import Nav from "../Nav/Navbar";
import './queue.css';
import { useState } from "react";
import { useEffect } from "react";
import TicketServices from "../../API/TicketServices";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function Queue() {
    const navigate = useNavigate()
    const [queue, setQueue] = useState([])
    const [currentTicket, setCurrentTicket] = useState({})
    const [currentClient, setCurrentClient] = useState({})
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Compare the current time with 19:00
    const isBeforeEndTime = currentTime < '18:00';
   

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

    const clearQueue= () => {
        TicketServices.clearQueue()
        .then(response => {
            navigate('/management_menu')
             
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
                <div className="container m-auto ">
                   
                    <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex  w-100">
                        <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                            <div aria-hidden="true" 
                            className="absolute top-0 w-200  h-200 rounded-1xl bg-white shadow-xl  "
                            
                            ></div>
                            <div className="relative p-4 " >
                                <h3 className="text-xl text-gray-700 font-semibold text-center">Ticket en cours</h3>
                                <div>
                                    <div className="relative flex justify-around">
                                        <div className="flex items-end">
                                            <span className="text-5xl text-gray-800 font-bold leading-0">{currentTicket.number}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li className="space-x-2">
                                        <span className="text-Blue-950 font-semibold">Client:</span>
                                        <span>{currentClient.lastName} {currentClient.firstName}</span>
                                    </li>
                                    
                                </ul>
                                
                                <button  onClick={nextTicket}
                                 className="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-950 hover:bg-yellow-200 disabled:bg-gray-400"
                                 disabled={queue.length===0 || (queue.length===1 && currentTicket.status!=="WAITING")}
                                 >
                                    {currentTicket.status==="WAITING" && currentTicket.number===1 && queue.length!==1&&
                                    <span className="text-white font-semibold">
                                    Start
                                </span>}
                                
                                {queue.length===1?
                                    <span className="text-white font-semibold">
                                    Traiter
                                </span>:
                                
                                
                                 <span className="text-white font-semibold">
                                 Ticket suivant
                             </span> 
                        
                                }
                                
                               
                                </button>
                            </div>
                        </div>

                        <div className=" justify-center relative group md:w-6/12 lg:w-7/12">
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl  lg:p-10">
                                <ul role="list" className="space-y-4 text-center text-gray-600">
                                    
                                    <li className="space-x-2  text-center text-2xl">
                                        <span >File d'attente</span>
                                        
                                    </li>
                                    <li className="space-x-2 text-center">
                                     
                                        <span>
                                            {queue.length===0?
                                              0: 
                                              queue.length-1
                                            }
                                            _en attente | {
                                                currentTicket.status==="WAITING" && currentTicket.number===1?0 :1
                                            } _en cours </span>
                                    </li>
                                   {/*<li className="space-x-2 text-center">
                                        <span>Total des tickets traités: </span>
                                    </li>*/} 
                                    <button onClick={clearQueue}
                                 className="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-950 hover:bg-yellow-200 disabled:bg-gray-400"
                                 disabled={queue.length-1===0 && isBeforeEndTime}
                                 >
                                    
                                    <span className="text-white font-semibold">
                                    Cloturer
                                </span>

                                </button>
                                 
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/***** end current ticket */}
            
            <div className="flex flex-col bg-white ">
                <h1
                    className="flex py-5 lg:px-20   font-bold text-2xl text-gray-800"
                >
                    File d'attente
                </h1>
                <div
                    className="flex overflow-x-scroll pb-7 hide-scroll-bar"
                >
                    <div
                        className="flex flex-nowrap ml-10 "
                    >
                        {queue.length-1===0 &&
                         <div> 
                             <p> Pas de clients en attente.</p>
                          </div>
                        }
                        {queue.map((ticket) => (
     
                       ticket.number!==currentTicket.number &&
                        <div key={ticket.id} className="inline-block px-3">
                            <div
                                className="w-64 h-64 max-w-xs  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                style={{height:'150px'}}
                            >
                                                            <div className="relative p-4 " >
                                <h3 className="text-l text-gray-700 font-semibold text-center">Numéro de ticket</h3>
                                <div>
                                    <div className="relative flex justify-around">
                                        <div className="flex items-end">
                                            <span className="text-3xl text-gray-800 font-bold leading-0">{ticket.number}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li className="space-x-2">
                                        <span className="text-Blue-950 text-s font-semibold">Client:</span>
                                        <span>{ticket.client.lastName} {ticket.client.firstName}</span>
                                    </li>
                                   
                                </ul>
                                </div>
                                {/*<div style={{padding:'50px'}}>
                                <p >Ticket {ticket.number}</p>
                                <p >{ticket.client.lastName} {ticket.client.firstName}  </p>
                               </div>*/}

                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
           

        </>
    );
}