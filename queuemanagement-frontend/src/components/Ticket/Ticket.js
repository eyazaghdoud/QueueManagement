import '../../index.css';
import {FaUserAlt } from "react-icons/fa";
import {FaRegTimesCircle} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import {AiFillCalendar} from "react-icons/ai";
import Nav from '../Nav/Navbar';
import TicketServices from '../../API/TicketServices';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Ticket() {

  const [ticketInfo,setTicketInfo] =useState([]);
  const [client,setClient] =useState([]);
  

  useEffect(() => {
   TicketServices.getTicketInfo(1)
    .then(response => {
        setTicketInfo(response.data)
        setClient(response.data.client)
        console.log(ticketInfo)

    })
    .catch(error => {
        console.log(error)
    })

}, [])
  return (
    <div>
   <Nav/>

    <div style={{margin:'10% auto'}} className="md:w-[50rem] blue-950 md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-gray dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative" >
        <div className=" text-white z-10 bg-blue-950 absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>Numéro de ticket</h1>
        </div>
        <div className="text-black h-full w-full relative border-2 border-white rounded-2xl p-10" style={{marginLeft:'50px', marginTop:'30px'}}>
             <h1 style={{ fontSize:'90px'}}> {ticketInfo.ticketNumber}</h1>
             <button style={{marginLeft:'-10px'}}
             className="md:m-2 m-auto mt-8 bg-[grey] shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
           <FaRegTimesCircle  size={20} color="#fff" /> 
            <h1 className="text-white text-md font-semibold pl-2">
              Annuler
            </h1>
          </button>
        </div>
      
         
         
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-blue-950">Bienvenue</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          {client.lastName} {client.firstName}
       
        </h1>
       
        <div className="flex flex-row items-center m-2">
            <AiFillCalendar size={20} color="grey" style={{marginTop:'20px'}} />
            
            <h1 className="pl-1 dark:text-white">date</h1>
          </div>
          <div className="flex flex-row items-center m-2">
          
            <h1 className="pl-1 dark:text-white" style={{marginLeft:'20px', marginTop:'-20px'}}>
              {new Date().toLocaleString() + ""}</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaUserAlt size={20} color="grey" style={{marginTop:'20px'}} />
            
            <h1 className="pl-1 dark:text-white">{ticketInfo.ticketsAlreadyPending}</h1>
          </div>
          <div className="flex flex-row items-center m-2">
          
            <h1 className="pl-1 dark:text-white" style={{marginLeft:'20px', marginTop:'-20px'}}>Clients en attente</h1>
          </div>
          
       
        <div className="flex flex-row items-center m-2">
            <AiOutlineClockCircle size={20} className="dark:text-white" style={{marginTop:'20px'}}/>
            <h1 className="pl-1 dark:text-white">{ticketInfo.waitingTime} minutes</h1>
          </div>
          <div className="flex flex-row items-center m-2">
          
            <h1 className="pl-1 dark:text-white" style={{marginLeft:'20px', marginTop:'-20px'}}>Temps d'attente</h1>
          </div>
        
      </div>
    </div>
    </div>
    
  );
}