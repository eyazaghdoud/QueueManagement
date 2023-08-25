import { Button } from "@material-ui/core"
import DashboardHeader from "./DashboardHeader"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect} from 'react';
import UserServices from '../../API/UserServices';
import {
    TERipple,
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
  } from "tw-elements-react";

export default function EmployeesList() {

    let navigate = useNavigate();
    const [userList, setUserList] = useState([])
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [changeRoleRequest, setChangeRoleRequest] = useState([])
    const [deleteUserRequest, setDeleteUserRequest] = useState([])

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
    const changeConfirm = (event, user) => {
        setShowChangeModal(true)
        event.preventDefault();
        
        setChangeRoleRequest({
            idAdmin:2,
            idEmploye:user.id,
            oldRole:user.role,
            newRole:'ADMIN'  
        })
    }
    
     const makeAdminHandler = (event) => {
       event.preventDefault();
        
        UserServices.changeRole(changeRoleRequest)
            .then(response => {
                if(response.data === 'employee role changed') {
                 
                    window.location.reload(); 
                    
                } else {
                    console.log(response.data)
                }

            })
            .catch(error => {
                console.log(error)
            })


      };

      const deleteConfirm = (event, user) => {
        setShowDeleteModal(true)
        event.preventDefault();
        setDeleteUserRequest({
            idAdmin:2,
            idUser:user.id
        })
        
        
    }
      const deleteEmployeeHandler = (event) => {
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
                                        <td className="px-4 py-3 text-sm">{user.signUpDate}</td>
                                        <td className="px-4 py-3 text-xs">
                                            {(user.role!=='ADMIN') &&
                                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> 
                                            <button onClick={(event)=>changeConfirm(event,user)}>Rendre admin</button>
                                            </span>
                                             }
                                            <span className="px-2 py-1 ml-6 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> 
                                            <button onClick={(event)=>deleteConfirm(event,user)}>Supprimer </button>
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
            {/* <!-- Modal for role change --> */}
            <TEModal show={showChangeModal} setShow={setShowChangeModal}>
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
                onClick={() => setShowChangeModal(false)}
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
            <TEModalBody>Etes-vous sures de vouloir rendre cet employé administrateur?</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-dark px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={()=>setShowChangeModal(false)}
                >
                  Annuler
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={makeAdminHandler}
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
            <TEModalBody>Etes-vous sures de vouloir supprimer cet employé?</TEModalBody>
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
                  onClick={deleteEmployeeHandler}
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
          
       
            
        </>
    )
}