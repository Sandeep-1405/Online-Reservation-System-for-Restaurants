import { useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import './reservation.css'

function Reservations(){

    const [reservations,setdata] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        const token = Cookies.get('admin')
        if (token === undefined){
            navigate("/login",{replace:true})
        }
    },[])

    useEffect(()=>{
        axios.get("http://localhost:8081/users-reservations")
        .then(res=>{
            setdata(res.data)
            //console.log((res.data))
        }).catch(error=>(console.log()))
    },[])

    return(
        <div>
            <div className="tdiv">
                <h1 className='heading bg-light w-25 m-auto mb-3'>Users Reservations</h1>
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Restaurant</th>
                        </tr>
                    </thead>
                
                    {reservations.map(Details =>(
                        <tbody key={Details.ID}>
                            <tr>
                                <td className="p-3">{Details.Name}</td>
                                <td className="p-3">{Details.Email}</td>
                                <td className="p-3">{Details.Date.slice(0,10)}</td>
                                <td className="p-3">{Details.Restaurant}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Reservations
