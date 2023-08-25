import Nav from "../Nav/Navbar"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../../API/UserServices'
import { useNavigate } from "react-router-dom"

export default function Account() {
    let navigate = useNavigate();

    const [user, setUser] = useState([])
    const initialValues = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber

    };

    const [formValues, setFormValues] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
            UserServices.getSingleUser('email@email.com')
            .then(response => {
                setUser(response.data)
                setFormValues({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber
            
                })
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const handleSubmit = (e) => {

        const updateInfoRequest = {
            id:initialValues.id,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,

        };


        UserServices.updateInfo(updateInfoRequest)
            .then(response => {
                console.log(response.data)
                if (response.data === 'user info updated successfully') {
                    window.location.reload(); 

                } else if (response.data === 'user with this email already exists') {
                    console.log("exists")
                }
                else if (response.data === 'user with this phone number already exists') {
                    console.log("exists")
                }
            })

            .catch(error => {
                console.log(error)

            });
        

    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit} class="h-full" style={{ marginTop: '7%' }}>

                <div class="border-b-2 block md:flex">
                   
                        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold block">{user.firstName} {user.lastName}</span>
                                <button type='submit'
                                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                    Edit
                                    </button>
                            </div>

                            <span class="text-gray-600">Informations de connexion</span>

                            <div class="w-full p-8 mx-2 flex justify-center">
                            </div>

                            <div class="pb-6">
                                <label for="name" class="font-semibold text-gray-700 block pb-1">E-mail</label>
                                <div class="flex">
                                    <input  id="email" 
                                    class="border-1  rounded-r px-4 py-2 w-full" 
                                    type="email"
                                    onChange={handleChange}
                                    value={formValues.email}
                                     />
                                </div>
                            </div>
                            <div class="pb-6">
                                <label for="name" class="font-semibold text-gray-700 block pb-1">Mot de passe</label>
                                <div class="flex">
                                    <input disabled id="pwd" class="border-1  rounded-r px-4 py-2 w-full" type="password" value="**********" />
                                </div>
                                
                                    <Link to="/Change_password"
                                    class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                    Changer le mot de passe</Link>

                            </div>
                        </div>

                        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                            <div class="rounded  shadow p-6">
                                <div class="pb-6">
                                    <label for="lastName" class="font-semibold text-gray-700 block pb-1">Nom</label>
                                    <div class="flex">
                                        <input 
                                        name="lastName"
                                        id="lastName" 
                                        onChange={handleChange}
                                        value={formValues.lastName}
                                        class="border-1  rounded-r px-4 py-2 w-full" type="text"  />
                                    </div>
                                </div>
                                <div class="pb-6">
                                    <label for="firstName" class="font-semibold text-gray-700 block pb-1">Prénom</label>
                                    <div class="flex">
                                        <input 
                                        name="firstName"
                                        id="firstName" 
                                        onChange={handleChange}
                                        value={formValues.firstName}
                                        class="border-1  rounded-r px-4 py-2 w-full" type="text"  />
                                    </div>
                                </div>

                                <div class="pb-4">
                                    <label for="phoneNumber" class="font-semibold text-gray-700 block pb-1">Numéro de téléphone</label>
                                    <input 
                                    name="phoneNumber" id="phoneNumber"
                                    onChange={handleChange}
                                    value={formValues.phoneNumber}
                                    class="border-1  rounded-r px-4 py-2 w-full" type="text" />

                                </div>

                            </div>

                        </div>
                   
                </div>
           
        </form>
        </div >
    )
}