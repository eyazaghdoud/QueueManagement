import '../../index.css';
import {FaUserAlt } from "react-icons/fa";
import {FaRegTimesCircle} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import {AiFillCalendar} from "react-icons/ai";
import Nav from '../Nav/Navbar';
import TicketServices from '../../API/TicketServices';
import { useState } from 'react';
import { useEffect } from 'react';
import format from 'date-fns/format';
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { useNavigate } from 'react-router-dom';


export default function Ticket() {

  const navigate = useNavigate()
  const client = JSON.parse(localStorage.getItem("user"));
  const [ticketInfo,setTicketInfo] =useState([]);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
   TicketServices.getTicketInfo(client.userInfo.id)
    .then(response => {
        setTicketInfo(response.data)
        console.log(ticketInfo)

    })
    .catch(error => {
        console.log(error)
    })

}, [])


const cancelConfirm = (event) => {
  event.preventDefault();
  setShowCancelModal(true)
 
}

const cancelHandler = (event) => {
  event.preventDefault()
  TicketServices.cancelTicket(ticketInfo.ticketNumber)
  .then(response => {
     navigate('/Menu')

  })
  .catch(error => {
      console.log(error)
  })
}
  return (
    <div>
   <Nav/>

    <div style={{margin:'10% auto'}} className="md:w-[50rem] blue-950 md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-gray dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative" >
        <div className=" text-white z-10 bg-blue-950 absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>Numéro de ticket</h1>
        </div>
        <div className="text-black items-center h-full w-full relative border-2 border-white rounded-2xl p-10" style={{ marginTop:'30px'}}>
             <h1 style={{marginLeft:'60px', fontSize:'90px'}}> {ticketInfo.ticketNumber}</h1>
             {ticketInfo.waitingTime === 0 &&
               <div className="flex flex-row items-center">
          
               <h1 className="pl-1 font-bold pl-1 text-lg text-blue-950" style={{marginLeft:'30px'}}>C'est votre tour!</h1>
             </div>
             }
            {/* <button style={{marginLeft:'30px'}}
             onClick={cancelConfirm}
             disabled={ticketInfo.waitingTime === 0}
             className=" font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700 pl-2 md:m-2 m-auto mt-8 shadow-md pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center">
           <FaRegTimesCircle  size={20} color="#fff" /> 
           
              Annuler
            
          </button>
            */}
        </div>
      
         
         
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-blue-950">Bienvenue</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          {client.userInfo.lastName} {client.userInfo.firstName}
       
        </h1>
       
        <div className="flex flex-row items-center m-2">
            <AiFillCalendar size={20} color="grey" style={{marginTop:'20px'}} />
            
            <h1 className="pl-1 dark:text-white">date</h1>
          </div>
          <div className="flex flex-row items-center m-2">
          
            <h1 className="pl-1 dark:text-white" style={{marginLeft:'20px', marginTop:'-20px'}}>
              {format(new Date(), 'dd-MM-yyyy')}</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <FaUserAlt size={20} color="grey" style={{marginTop:'20px'}} />
            
            <h1 className="pl-1 dark:text-white">{ticketInfo.ticketsAlreadyPending<0 ?
            0: ticketInfo.ticketsAlreadyPending}</h1>
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
    
      {/* <!-- Modal for delete confimation --> */}
      <TEModal show={showCancelModal} setShow={setShowCancelModal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Confirmation
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowCancelModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>Etes-vous sures de vouloir annuler votre ticket?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowCancelModal(false)}
                >
                  Annuler
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={cancelHandler}
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Continuer
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>

    
  );
}