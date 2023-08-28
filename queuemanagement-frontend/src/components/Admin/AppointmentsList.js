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

    const [appointmentList, setAppointmentList] = useState([])

    useEffect(() => {
            UserServices.getClients()
            .then(response => {
                setAppointmentList(response.data)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])


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
                                        <th class="px-4 py-3">Date</th>
                                        <th class="px-4 py-3">Heure</th>
                                        <th class="px-4 py-3">Service</th>
                                        <th class="px-4 py-3">Status</th>
                                        
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
                                        <td class="px-4 py-3 text-sm">{}</td>
                                        
                                        <td class="px-4 py-3 text-sm" > {} </td>
                                        <td class="px-4 py-3 text-sm" >{}</td>
                                        <td class="px-4 py-3 text-xs">
                                           
                                           

                                        </td>
                                    </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span class="flex items-center col-span-3"> Total des rendez-vous: {} </span>
                            
                        </div>
                    </div>
                </div>
             

            </div>
          
            </div>
           
        </>
    )
}