import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../API/UserServices'

export default function Ex() {
    
    const [userList, setUserList] = useState([])

    useEffect(() => {

        /****************** Calling getUserList function ******************/

        /* UserServices.getAllUsers()
            .then(response => {
                setUserList(response.data)

            })
            .catch(error => {
                console.log(error)
            })*/
            UserServices.getUsersByRole('CLIENT')
            .then(response => {
                setUserList(response.data)

            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <>
              <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}