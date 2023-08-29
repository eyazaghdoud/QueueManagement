import axios from "axios"

const AUTH_URL = "http://localhost:8080/authentication";


const authentication= async (loginRequest) => {
    localStorage.clear()
    return await axios.post(AUTH_URL,loginRequest)
}
    
const handleLogout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("user");
  }

export default {
    authentication,
    handleLogout
}