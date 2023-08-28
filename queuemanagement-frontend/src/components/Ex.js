import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'
import UserServices from '../API/UserServices'
import ServiceServices from '../API/ServiceServices'

export default function Ex() {
    
    const [list, setList] = useState([])

    useEffect(() => {
      ServiceServices.getAllServices()
      .then(response => {
          setList(response.data)
          console.log(list[0])
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
            <th>libel</th>
          </tr>
        </thead>
        <tbody>
          {list.map(s => (
            <tr key={s.id}>
              <td>{s.libel}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
      
     
          <select 
          
           >
            
             {list.map(s=> (
              <option>{s.libel}</option>
             ))}
           
          </select>
        </>
    )
}