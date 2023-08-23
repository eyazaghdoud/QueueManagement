import { Button } from "@material-ui/core"
import DashboardHeader from "./DashboardHeader"

export default function ClientsList() {

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
                                    <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                        <td class="px-4 py-3">
                                            <div class="flex items-center text-sm">
                                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img class="object-cover w-full h-full rounded-full" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p class="font-semibold">Hans Burger</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-3 text-sm">55555555</td>
                                        
                                        <td class="px-4 py-3 text-sm" > email@email.com </td>
                                        <td class="px-4 py-3 text-sm" >15-01-2021 </td>
                                        <td class="px-4 py-3 text-xs">
                                           
                                            <span class="px-2 py-1  font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> 
                                            <button>Désactiver le compte </button>
                                            </span>

                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span class="flex items-center col-span-3"> Total des clients: 20 </span>
                            
                        </div>
                    </div>
                </div>
             

            </div>
          
            </div>
        </>
    )
}