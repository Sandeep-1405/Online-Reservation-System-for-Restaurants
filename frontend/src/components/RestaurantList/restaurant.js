import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import './restaurant.css'

function RestaurantList(){

    const [restaurantlist,setdata] = useState([])

    const [name,setname] = useState('')
    const [des,setdes] = useState('')

    const [url,seturl] = useState('')
    const [rating,setrating] = useState('')

    const [discount,setdiscount] = useState('')
    const [price,setprice] = useState('')

    const [distance,setdistance] = useState('')

    const navigate = useNavigate();

    useEffect(()=>{
        const token = Cookies.get('admin')
        if (token === undefined){
            navigate("/login",{replace:true})
        }else{
            axios.get("http://localhost:8081/getrestaurantdata")
            .then(res=>{
                setdata(res.data)
                //console.log((res.data))
            }).catch(error=>(console.log()))
        }
    },[])

    function OnclickSubmit(){
        axios.post("http://localhost:8081/add-restaurant",{name,des,url,rating,discount,price,distance})
        .then(res=>{
            console.log(res)
        }).catch(error=>(console.log(error)))
    }

    return(
        <div>
            <div className="tdiv">
                <h1 className='heading bg-light w-25 m-auto mb-3'>Restaurants List</h1>
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Rating</th>
                            <th className="p-3">Discount</th>
                            <th className="p-3">Price Starting from</th>
                            <th className="p-3">Distance</th>
                        </tr>
                    </thead>
                
                    {restaurantlist.map(Details =>(
                        <tbody key={Details.ID}>
                            <tr>
                                <td className="p-3">{Details.Name}</td>
                                <td className="p-3">{Details.Rating}</td>
                                <td className="p-3">{Details.Discount}</td>
                                <td className="p-3">{Details.Price}</td>
                                <td className="p-3">{Details.Distance}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className='border m-5'>
                <h1 className='heading bg-light w-25 m-auto mt-3'>Add Restaurant</h1>
                <form>
                    <div className='d-flex flex-row justify-content-center flex-wrap'>
                        <div className='m-3'>
                            <input type='text' value={name} placeholder='Name of Restaurant' onChange={e=>(setname(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Description of Restaurant' value={des} onChange={e=>(setdes(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Restaurant Image URL' value={url} onChange={e=>(seturl(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Rating of Restaurant' value={rating} onChange={e=>(setrating(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Discount' value={discount} onChange={e=>(setdiscount(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Price Starting from' value={price} onChange={e=>(setprice(e.target.value))}/>
                        </div>
                        <div className='m-3'>
                            <input type='text' placeholder='Distance' value={distance} onChange={e=>(setdistance(e.target.value))}/>
                        </div>
                    </div>
                    <button className='btn btn-primary m-3' onClick={OnclickSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RestaurantList
