import axios from 'axios';

const API_URL = "http://localhost:8080/user";

/**** user list  ***/
const getAllUsers = async () => {
    return await axios.get(API_URL + "/all_users" )  
 }

/**** client list  ***/
const getClients = async() => {
    return await axios.post(API_URL + "/all_users_by_role", "CLIENT",  {
        headers: {
        'Content-Type': 'application/json',
        }
    },)  
 }
 /**** single user ***/
 const getSingleUser = async(email) => {
    return await axios.post(API_URL + "/single_user", email, {
        headers: {
        'Content-Type': 'text/plain',
        }
    })  
 }

 /**** employees list  ***/
const getEmployees = async() => {
    return await axios.get(API_URL + "/all_employees", 
    )  
 }
 
 /**** sign up  ***/
const signUp = async (signupRequest) => {  
    return await axios.post(API_URL + '/new_user', signupRequest
    )
 
 }

 /****update user info  ***/
const updateInfo = async (updateInfoRequest) => {  
    return await axios.post(API_URL + '/update_user_info', updateInfoRequest
    )
 
 }

  /****delete user  ***/
const deleteUser = async (deleteUserRequest) => {  
    return await axios.post(API_URL + '/delete_user', deleteUserRequest
    )
 
 }

  /**** change role  ***/
const changeRole = async (changeRoleRequest) => {  
    return await axios.post(API_URL + '/change_user_role', changeRoleRequest, {
        headers: {
        'Content-Type': 'application/json',
        }
    }
    )
 
 }



/***********************PASSWORD *********************/
/**** change password  ***/
const changePassword = async (changePwdRequest) => {
    //const user = JSON.parse(localStorage.getItem("user"));
    return await axios.post(API_URL + '/change_password', changePwdRequest
 
      /* {
          headers: { Authorization: `Bearer ${user.jwttoken}` }
       }*/)
 }

 /**** reset password  ***/
const resetPassword = async (resetPwdRequest) => {
    //const user = JSON.parse(localStorage.getItem("user"));
    return await axios.post(API_URL + '/reset_password', resetPwdRequest
 
      /* {
          headers: { Authorization: `Bearer ${user.jwttoken}` }
       }*/)
 }


 export default {
    getAllUsers,
    getClients,
    getEmployees,
    getSingleUser,
    signUp,
    deleteUser,
    updateInfo,
    changePassword,
    resetPassword,
    changeRole
 }
 