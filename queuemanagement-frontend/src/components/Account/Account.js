import Nav from "../Nav/Navbar"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../../API/UserServices'
import { useNavigate } from "react-router-dom"

export default function Account() {
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [user,setUser] = useState([]);
    //const [user, setUser] = useState([])
    const initialValues = {
        id: currentUser.userInfo.id,
        firstName: currentUser.userInfo.firstName,
        lastName: currentUser.userInfo.lastName,
        email: currentUser.userInfo.email,
        phoneNumber: currentUser.userInfo.phoneNumber,
        role:currentUser.userInfo.role

    };

    const [formValues, setFormValues] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
       
        console.log(currentUser)
            UserServices.getUserById(currentUser.userInfo.id)
            .then(response => {
                console.log(response)
                console.log(currentUser)
                setUser(response.data)
                setFormValues({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email:  response.data.email,
                    phoneNumber:  response.data.phoneNumber
            
                })
            })
            .catch(error => {
                console.log(error)
            })
            setFormValues({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber
        
            })

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        const updateInfoRequest = {
            id:currentUser.userInfo.id,
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            role:initialValues.role

        };


        UserServices.updateInfo(updateInfoRequest)
            .then(response => {
                console.log(response.data)
                if (response.data === 'user info updated successfully') {
                    UserServices.getUserById(currentUser.userInfo.id).then(response => {
                        setUser(response.data)
                        window.location.reload(); 
                    })
                   
                   

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
            <form onSubmit={handleSubmit} className="h-full" style={{ marginTop: '7%' }}>

                <div className="border-b-2 block md:flex">
                   
                        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                            <div className="flex justify-between">
                                <span className="text-xl font-semibold block">{user.firstName} {user.lastName}</span>
                                <button type='submit'
                                className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                    Edit
                                    </button>
                            </div>

                            <span className="text-gray-600">Informations de connexion</span>

                            <div className="w-full p-8 mx-2 flex justify-center">
                            </div>

                            <div className="pb-6">
                                <label for="email" className="font-semibold text-gray-700 block pb-1">E-mail</label>
                                <div className="flex">
                                    <input  name="email" id="email" 
                                    className="border-1  rounded-r px-4 py-2 w-full" 
                                    type="email"
                                    onChange={handleChange}
                                    value={formValues.email}
                                     />
                                </div>
                            </div>
                            <div className="pb-6">
                                <label for="name" className="font-semibold text-gray-700 block pb-1">Mot de passe</label>
                                <div className="flex">
                                    <input disabled id="pwd" className="border-1  rounded-r px-4 py-2 w-full" type="password" value="**********" />
                                </div>
                                
                                    <Link to="/Change_password"
                                    className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                    Changer le mot de passe</Link>

                            </div>
                        </div>

                        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                            <div className="rounded  shadow p-6">
                                <div className="pb-6">
                                    <label for="lastName" className="font-semibold text-gray-700 block pb-1">Nom</label>
                                    <div className="flex">
                                        <input 
                                        name="lastName"
                                        id="lastName" 
                                        onChange={handleChange}
                                        value={formValues.lastName}
                                        className="border-1  rounded-r px-4 py-2 w-full" type="text"  />
                                    </div>
                                </div>
                                <div className="pb-6">
                                    <label for="firstName" className="font-semibold text-gray-700 block pb-1">Prénom</label>
                                    <div className="flex">
                                        <input 
                                        name="firstName"
                                        id="firstName" 
                                        onChange={handleChange}
                                        value={formValues.firstName}
                                        className="border-1  rounded-r px-4 py-2 w-full" type="text"  />
                                    </div>
                                </div>

                                <div className="pb-4">
                                    <label for="phoneNumber" className="font-semibold text-gray-700 block pb-1">Numéro de téléphone</label>
                                    <input 
                                    name="phoneNumber" id="phoneNumber"
                                    onChange={handleChange}
                                    value={formValues.phoneNumber}
                                    className="border-1  rounded-r px-4 py-2 w-full" type="text" />

                                </div>

                            </div>

                        </div>
                   
                </div>
           
        </form>
        </div >
    )
}