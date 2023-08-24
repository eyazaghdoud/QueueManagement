import { Button } from "@material-ui/core"
import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect} from 'react';
import UserServices from '../../API/UserServices';

export default function EmployeesList() {

    let navigate = useNavigate();
    const [userList, setUserList] = useState([])

    useEffect(() => {
            UserServices.getEmployees()
            .then(response => {
                setUserList(response.data)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])


    const addEmployeeHandler = (event) => {
        event.preventDefault();
        navigate('/new_employee');
       
      };

  
    return (
       
        <>
        
         <DashboardHeader/>
         <div x-data="setup()" className="dark h-full" >
            <div className=" h-full ml-14 mt-20 mb-10 md:ml-64 dark">
            <span className="px-2 py-1 ml-8 font-semibold leading-tight hover:bg-gray-500 text-gray-200 bg-gray-800 rounded-full "> 
                <button onClick={addEmployeeHandler}
                >
                    Ajouter un employé 
                </button>
            </span>
                <div className="mt-4 mx-4">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Employé</th>
                                        <th className="px-4 py-3">Role</th>
                                        <th className="px-4 py-3">Date de recrutement</th>
                                        <th className="px-8 py-3">Actions</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {userList.map(user => (
                                    <tr key={user.id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-full" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                                                    <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">{user.firstName} {user.lastName} </p>
                                                </div>
                                            </div>
                                        </td>
                                        {(user.role==='OPERATOR') &&
                                        <td className="px-4 py-3 text-sm">Opérateur web</td> 
                                        } 
                                        {(user.role==='ADMIN') &&
                                        <td className="px-4 py-3 text-sm">Administrateur</td> 
                                        } 
                                        <td className="px-4 py-3 text-sm">15-01-2021</td>
                                        <td className="px-4 py-3 text-xs">
                                            {(user.role!=='ADMIN') &&
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> 
                                            <button>Rendre admin</button>
                                            </span>
                                             }
                                            <span className="px-2 py-1 ml-6 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> 
                                            <button>Supprimer </button>
                                            </span>

                                        </td>
                                    </tr>
                                      ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                            <span className="flex items-center col-span-3"> Total des employés: {userList.length} </span>
                            
                        </div>
                    </div>
                </div>
             

            </div>
          
            </div>
        </>
    )
}