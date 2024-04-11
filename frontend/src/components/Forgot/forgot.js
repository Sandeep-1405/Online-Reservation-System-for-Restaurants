import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Forgot(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setErr] = useState('')

    let navigate = useNavigate()
    
    useEffect(()=>{
        const token = Cookies.get('jwt')
        if (token === undefined){
            navigate("/login",{replace:true})
        }
    })

    function onSubmit(){
        if (password.length !== 0 && email.length !== 0){
            axios.put('http://localhost:8081/forgot',{email,password})
            .then(res=>{
                console.log(res)
                if(res.data === "Email not Exist"){
                    setErr("Email not Exist")
                }else{
                    setErr("Success")
                    navigate('/');
                }
            })
            .catch(err =>console.log(err))
        }else{
            setErr("Please Enter All Fields")
        }  
    }
    function onclickBacktoLogin(){
        navigate('/');
    }
    return(
        <div className="text-center border w-50 m-auto mt-5">
            <h2>Create New Password</h2>
            <div>
                <input type="email" placeholder="Enter Your Email" className="m-3 sinput w-50" onChange={e=>setEmail(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Enter New Password" className="m-3 sinput w-50" onChange={e=>setPassword(e.target.value)}/>
                <p>{error}</p>
            </div>
            <div>
                <button onClick={onSubmit} className="btn btn-success m-3">Submit</button>
                <button onClick={onclickBacktoLogin} className="btn btn-warning m-3">Back To Login</button>
            </div>
        </div>
    )
}
export default Forgot