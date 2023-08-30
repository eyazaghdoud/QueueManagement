import Nav from "../Nav/Navbar";
import appointment from '../../assets/appointment.png'
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect} from 'react';
import AppointmentServices from '../../API/AppointmentServices';
import { useNavigate } from "react-router-dom";
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";


export default function Appointment() {

    const navigate = useNavigate()
    const [appointmentList, setAppointmentList] = useState([])
    const [pendingAppointment, setPendingAppointment] = useState({})
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        AppointmentServices.getAppointmentsPerClient(currentUser.userInfo.id)
        .then(response => {
            setAppointmentList(response.data)

        })
        .catch(error => {
            console.log(error)
        })

        AppointmentServices.getPendingAppointmentPerClient(currentUser.userInfo.id)
        .then(response => {
          console.log(response.data)
          if (response.data===null) {
            setPendingAppointment("")
          }
          else
          setPendingAppointment(response.data)

        })
        .catch(error => {
            console.log(error)
        })



}, [])

const cancelConfirm = (event) => {
    setShowConfirmationModal(true)

}

const cancelHandler = (event) => {
    event.preventDefault()
    AppointmentServices.cancelAppointment(pendingAppointment.id)
    .then(response => {
        if(response.data==='appointment cancelled successfully') {
            window.location.reload(); 
        }

    })
    .catch(error => {
        console.log(error)
    })
  
  }

    return (
        <>
            <Nav />
            <h1  class="flex py-5 lg:px-20 font-bold text-xl text-gray-800">
                Rendez-vous
            </h1>
           
            <div class='flex items-center justify-center mt-10' style={{marginTop:'-20px'}}>
            {pendingAppointment!=="" &&
                <div  
                class="p-2 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-xl">
                    <img class=" block h-16 w-16 rounded-lg" alt="art cover" loading="lazy" src={appointment} />
                    <div class="sm:w-8/12 pl-0 p-5">
                        <div class="space-y-2">
                            <div class="space-y-4">
                                <h4 class="text-md text-xl font-semibold text-black text-justify">
                                   Date: {pendingAppointment.date}
                                </h4>
                            </div>
                            <div class="flex items-center space-x-4 justify-between">
                                <div class="flex gap-3 space-y-1">
                                    <span class="text-text-xl">Service: {pendingAppointment.service}</span>
                                </div>
                                
                            </div>
                            <div class="flex items-center space-x-4 justify-between">
                                <div class="text-grey-500 flex flex-row space-x-1  my-4">
                                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p class="text-l">{pendingAppointment.time}</p>
                                </div>
                                <div class="flex flex-row space-x-1">
                                    
                                        <span>
                                            <button  
                                            onClick={cancelConfirm}
                                            class="px-2 py-1  font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
                                             >Annuler le rendez-vous
                                                </button></span>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {pendingAppointment==="" &&
                   <div>
                   <h1 className="flex items-center space-x-4 justify-between">Pas de rendez-vous planifié</h1>
                   <div class="flex items-center space-x-4 justify-between">
                   <button  
                   onClick={()=>navigate('/book_appointment')}
                   class="flex mt-5 px-2 py-1  font-semibold leading-tight text-white bg-blue-900 rounded-full dark:text-blue-900 dark:bg-blue-900"
                    >Planifier un rendez-vous
                    </button>
                    </div>
                       </div>
                 }
                </div>
           
                {/*appointment history*/}
                <h1  class="flex py-5 lg:px-20 font-bold text-xl text-gray-800">
                Historique
            </h1>
            {appointmentList.length!==0 &&
                <div class="mt-4 mx-4">
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="px-4 py-3">Date </th>
                                        <th class="px-4 py-3">Horaire</th>
                                        <th class="px-4 py-3">Etat</th>
                                        
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                 
                                  {appointmentList.map(a => (
                                    <tr key={a.id} class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                        
                                       
                                        
                                        <td class="px-4 py-3 text-sm" > {a.date} </td>
                                        <td class="px-4 py-3 text-sm" > {a.time} </td>
                                        <td class="px-4 py-3 text-sm" >{a.status}</td>
                                        
                                    </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span class="flex items-center col-span-3"> Total des rendes-vous: {appointmentList.length} </span>
                            
                        </div>
                    </div>
                    </div>
                    }
                    {appointmentList.length===0 &&
                       <div class='flex items-center justify-center mt-10' style={{marginTop:'-20px'}}>
                            <h1>Aucun rendez-vous</h1>

                       </div>
                     
                    }

              {/* <!-- Modal for cancel confirmation --> */}
              <TEModal show={showConfirmationModal} setShow={setShowConfirmationModal}>
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
                onClick={() => setShowConfirmationModal(false)}
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
            <TEModalBody>Annuler ce rendez-vous?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowConfirmationModal(false)}
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
        </>
    );
}