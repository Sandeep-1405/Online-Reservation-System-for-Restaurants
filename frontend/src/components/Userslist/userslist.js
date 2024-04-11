import { useEffect, useState } from 'react'
import axios from 'axios'

import './userslist.css'

function Userslist(){

    const [userslist,setdata] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8081/getusersdata")
        .then(res=>{
            setdata(res.data)
            //console.log((res.data))
        }).catch(error=>(console.log()))
    },[])

    return(
        <div>
            <div className="tdiv">
                <h1 className='heading'>Users List</h1>
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone Number</th>
                        </tr>
                    </thead>
                
                    {userslist.map(Details =>(
                        <tbody key={Details.ID}>
                            <tr>
                                <td className="p-3">{Details.Name}</td>
                                <td className="p-3">{Details.Email}</td>
                                <td className="p-3">{Details.PhoneNumber}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Userslist