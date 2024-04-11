import axios from 'axios'
import React, { useState,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

import './signup.css'

function Signup(){
    const [name,setname] = useState('')
    const [email,setemail] = useState('')

    const [phonenumber,setPhonenumber] = useState('')
    const [password,setpassword] = useState('')

    const [errmsg,setError] = useState('')
    
    let navigate = useNavigate()

    useEffect(()=>{
        const token = Cookies.get("jwt")
        //console.log(token)
        if (token !== undefined){
            navigate('/')
        }
    },[])

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8081/create',{name,email,phonenumber,password})
        .then(res =>{
            //console.log(res);
            if (res.data ==="Email Already Exists"){
                setError(res.data)
            }else{
                navigate("/login")
            }
        })
        .catch(err => console.log(err));
    }

    return(
        <div className='sbody'>
            <div className='scard '>
                <h1 className='sheading'>Signup</h1>
                <hr className='hr'/>
                <form onSubmit={handleSubmit}>

                    <div className='m-3'>
                        <label htmlFor="fname" >Name </label>
                        <br/>
                        <input type="text" id="fname" placeholder="" required className='sinput' name='fname' value={name} 
                        autoComplete="given-name"
                        onChange={e=>setname(e.target.value)}/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Email </label>
                        <br/>
                        <input type="text" id="email" placeholder="" required className='sinput' name="email" value={email} autoComplete="email" onChange={e=>setemail(e.target.value)}/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="fname" >Mobile Number </label>
                        <br/>
                        <input type="number" id="mobile" placeholder="" required className='sinput' name='fname' value={phonenumber} 
                        autoComplete="given-name"
                        onChange={e=>setPhonenumber(e.target.value)}/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Password </label>
                        <br/>
                        <input type="password" id="password" placeholder="" required className='sinput' name="email" value={password} autoComplete="email" onChange={e=>setpassword(e.target.value)}/>
                    </div>
                    
                    <p className='text-danger m-3'>{errmsg}</p>

                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <br/>
                
                    <Link to="/login" className='btn btn-outline-warning m-3'>Already a member Login here</Link>

                </form>
            </div>
            
        </div>
    )
    
}
export default Signup