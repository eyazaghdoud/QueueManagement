import axios from 'axios';

const API_URL = "http://localhost:8080/user";
const user = JSON.parse(localStorage.getItem("user"));

/**** user list  ***/
const getAllUsers = async () => {
    return await axios.get(API_URL + "/all_users" , {
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     })  
 }

/**** client list  ***/
const getClients = async() => {
    return await axios.post(API_URL + "/all_users_by_role", "CLIENT",  {
        headers: {
        'Content-Type': 'application/json',
       // Authorization: 'Bearer '+ user.jwttoken
        }
    },)  
 }
 /**** single user ***/
 const getSingleUser = async(email) => {
    return await axios.post(API_URL + "/single_user", email, {
        headers: {
        'Content-Type': 'text/plain',
       // Authorization: 'Bearer '+ user.jwttoken
        }
    })  
 }

  /**** single user by id  ***/
  const getUserById = async(id) => {
    return await axios.post(API_URL + "/single_user_by_id", id, 
    {
       headers: {
       'Content-Type': 'application/json',
      // Authorization: 'Bearer '+ user.jwttoken
       }
   }
    )  
 }

 /**** employees list  ***/
const getEmployees = async() => {
    return await axios.get(API_URL + "/all_employees", {
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
    )  
 }
 
 /**** sign up  ***/
const signUp = async (signupRequest) => {  
    return await axios.post(API_URL + '/new_user', signupRequest
    )
 
 }

 /****update user info  ***/
const updateInfo = async (updateInfoRequest) => {  
    return await axios.post(API_URL + '/update_user_info', updateInfoRequest,{
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
    )
 
 }

  /****delete user  ***/
const deleteUser = async (deleteUserRequest) => {  
    return await axios.post(API_URL + '/delete_user', deleteUserRequest,{
      //  headers: { Authorization: 'Bearer '+ user.jwttoken }
     }
    )
 
 }

  /**** change role  ***/
const changeRole = async (changeRoleRequest) => {  
    return await axios.post(API_URL + '/change_user_role', changeRoleRequest, {
        headers: {
        'Content-Type': 'application/json',
       // Authorization: 'Bearer '+ user.jwttoken
        }
    }
    )
 
 }



/***********************PASSWORD *********************/
/**** change password  ***/
const changePassword = async (changePwdRequest) => {
    //const user = JSON.parse(localStorage.getItem("user"));
    return await axios.post(API_URL + '/change_password', changePwdRequest,
 
       {
         // headers: { Authorization: 'Bearer '+ user.jwttoken }
       })
 }

 
 /**** send code password  ***/
const sendCode = async (number) => {
    return await axios.post(API_URL + '/send_code', number, {
        headers: {
        'Content-Type': 'application/json',
      
        }
    }
 )
 }

  /**** code verification password  ***/
const verifyCode = async (codeConfirmationRequest) => {
    return await axios.post(API_URL + '/confirm_code', codeConfirmationRequest
 
      /* {
          headers: { Authorization: `Bearer ${user.jwttoken}` }
       }*/)
 }
 /**** reset password  ***/
const resetPassword = async (resetPwdRequest) => {
    //const user = JSON.parse(localStorage.getItem("user"));
    return await axios.post(API_URL + '/reset_password', resetPwdRequest, {
        headers: {
        'Content-Type': 'application/json',
        }
    }
 
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
    changeRole,
    sendCode,
    verifyCode, 
    getUserById
 }
 