import { Button } from "@material-ui/core"
import DashboardHeader from "./DashboardHeader"
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../../API/UserServices'

import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";


export default function ClientsList() {

    const [userList, setUserList] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteUserRequest, setDeleteUserRequest] = useState([])

    useEffect(() => {
            UserServices.getClients()
            .then(response => {
                setUserList(response.data)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])
    const deleteConfirm = (event, user) => {
        setShowDeleteModal(true)
        event.preventDefault();
        setDeleteUserRequest({
            idAdmin:2,
            idUser:user.id
        })
        
        
    }
      const deleteUserHandler = (event) => {
        event.preventDefault();
        UserServices.deleteUser(deleteUserRequest)
            .then(response => {
                if(response.data === 'user deleted') {
                 
                    window.location.reload(); 
                    
                } else {
                    console.log(response.data)
                }

            })
            .catch(error => {
                console.log(error)
            })
      }

    return (
        <>
        
         <DashboardHeader/>
         <div x-data="setup()" class="dark h-full" >
            <div class=" h-full ml-14 mt-20 mb-10 md:ml-64 dark">
             
                <div class="mt-4 mx-4">
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="px-4 py-3">Client</th>
                                        <th class="px-4 py-3">Téléphone</th>
                                        <th class="px-4 py-3">Email</th>
                                        <th class="px-4 py-3">Date d'enregistrement</th>
                                        <th class="px-4 py-3">Actions</th>
                                        
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                 
                                  {userList.map(user => (
                                    <tr key={user.id} class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                        <td class="px-4 py-3">
                                            <div class="flex items-center text-sm">
                                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img class="object-cover w-full h-full rounded-full" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p class="font-semibold">{user.firstName} {user.lastName}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-3 text-sm">{user.phoneNumber}</td>
                                        
                                        <td class="px-4 py-3 text-sm" > {user.email} </td>
                                        <td class="px-4 py-3 text-sm" >{user.signUpDate}</td>
                                        <td class="px-4 py-3 text-xs">
                                           
                                            <span class="px-2 py-1  font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> 
                                            <button onClick={(event)=>deleteConfirm(event,user)}>Désactiver le compte </button>
                                            </span>

                                        </td>
                                    </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span class="flex items-center col-span-3"> Total des clients: {userList.length} </span>
                            
                        </div>
                    </div>
                </div>
             

            </div>
          
            </div>
             {/* <!-- Modal for delete confimation --> */}
      <TEModal show={showDeleteModal} setShow={setShowDeleteModal}>
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
                onClick={() => setShowDeleteModal(false)}
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
            <TEModalBody>Etes-vous sures de vouloir désactiver le compte de cet utilisateur?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowDeleteModal(false)}
                >
                  Annuler
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={deleteUserHandler}
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