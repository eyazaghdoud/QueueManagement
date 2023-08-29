import { useState } from 'react';
import { useEffect} from 'react';
import AppointmentServices from '../../API/AppointmentServices';
import Nav from '../Nav/Navbar';
import { format } from 'date-fns';
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";

export default function AppointmentList() {

    const [appointmentList, setAppointmentList] = useState([])
    const [showEncloseModal, setShowEncloseModal] = useState(false);
    const [showAbsenceModal, setShowAbsenceModal] = useState(false);
    const [appId, setAppId] = useState();
    

    useEffect(() => {
            AppointmentServices.getAppointmentsPerDay(format(new Date(),'yyyy-MM-dd'))
            .then(response => {
                setAppointmentList(response.data)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])
   
    const encloseConfirm = (event, app) => {
        setShowEncloseModal(true)
        event.preventDefault();
        setAppId(app.id)
    }

    const absenceConfirm = (event, app) => {
        setShowAbsenceModal(true)
        event.preventDefault();
        setAppId(app.id)
    }
      const absenceHandler = (event) => {
        event.preventDefault()
        AppointmentServices.markAbsenceAppointment(appId)
        .then(response => {
            if(response.data==='status changed') {
                window.location.reload(); 
            }

        })
        .catch(error => {
            console.log(error)
        })
      }


      const encloseHandler = (event) => {
        event.preventDefault()
        AppointmentServices.encloseAppointment(appId)
        .then(response => {
            if(response.data==='appointment enclosed') {
                window.location.reload(); 
            }

        })
        .catch(error => {
            console.log(error)
        })
      
      }
    return (
        <>
        
         <Nav/>
         <h1  class="flex py-5 lg:px-20 font-bold text-2xl text-gray-800" style={{marginTop:'-20px'}}>
                Rendez-vous
            </h1>
            <h1  class="flex py-1 px-20 m-0 font-bold text-xl text-gray-800" style={{marginTop:'-20px'}}>
            {format(new Date(),'dd-MM-yyyy')}
            </h1>
             
                <div class="mt-4 mx-4">
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="px-4 py-3">Client</th>
                                        <th class="px-4 py-3">Téléphone</th>
                                        <th class="px-4 py-3">Horaire rendez-vous</th>
                                        <th class="px-4 py-3">Etat</th>
                                        <th class="px-4 py-3">Actions</th>
                                        
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                 
                                  {appointmentList.map(a => (
                                    <tr key={a.id} class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                        <td class="px-4 py-3">
                                            <div class="flex items-center text-sm">
                                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img class="object-cover w-full h-full rounded-full" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p class="font-semibold">{a.client.firstName} {a.client.lastName}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-3 text-sm">{a.client.phoneNumber}</td>
                                        
                                        <td class="px-4 py-3 text-sm" > {a.time} </td>
                                        <td class="px-4 py-3 text-sm" >{a.status}</td>
                                        {a.status==='PENDING' &&
                                        <td class="px-4 py-3 text-xs">
                                       
                                            <span class="px-2 py-1  font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-700"> 
                                            <button onClick={(e)=>encloseConfirm(e, a)}>Cloturer </button>
                                            </span>
                                            <span class="px-2 py-1  font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> 
                                            <button onClick={(e)=>absenceConfirm(e, a)}>Marquer absent </button>
                                            </span>

                                        </td>
                                        }
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
              {/* <!-- Modal for role change --> */}
            <TEModal show={showEncloseModal} setShow={setShowEncloseModal}>
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
                onClick={() => setShowEncloseModal(false)}
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
            <TEModalBody>Cloturer ce rendez-vous?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowEncloseModal(false)}
                >
                  Annuler
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={encloseHandler}
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Continuer
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>

      {/* <!-- Modal for delete confimation --> */}
      <TEModal show={showAbsenceModal} setShow={setShowAbsenceModal}>
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
                onClick={() => setShowAbsenceModal(false)}
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
            <TEModalBody>Marquer le client absent pour son rendez-vous?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowAbsenceModal(false)}
                >
                  Annuler
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={absenceHandler}
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
    )
}