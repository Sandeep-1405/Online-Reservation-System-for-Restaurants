import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import Forgot from '../Forgot/forgot'
//import Home from '../Home/home'
//import { CookiesProvider, useCookies } from 'react-cookie'
import Cookies from 'js-cookie'


const Login = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [errormsg,seterrMsg] = useState('')
    const [user,setuser] = useState('User')

    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }

    const navigate = useNavigate();
    const sign = useNavigate();

    useEffect(()=>{
        const token = Cookies.get("jwt")
        //console.log(token)
        if (token !== undefined){
            navigate('/')
        }
    },[])
    

    function onClickLogin(event){
        event.preventDefault()
        
        if (email.length === 0 || password.length===0){
            seterrMsg("All Fields Required")
        }else{
            seterrMsg("")
            if (user === "Admin" && email === "sandeep@admin.com" && password === "Sandeep@123"){
                Cookies.set("admin","admin",{ expires: new Date(Date.now() + 86400e3)})
                navigate('/admin',{ replace: true })
            }else if(user === "User"){
                
                axios.post('http://localhost:8081/login',{email,password})
                .then(res=>{
                    //console.log(res)
                    if(res.data.length !== 2){
                        console.log(res.data.length )
                        seterrMsg(res.data)
                    }
                    else{
                        Cookies.set("jwt",res.data[1]['jwttoken'],{ expires: new Date(Date.now() + 86400e3)})
                        //console.log(res.data[1]['jwttoken'])
                        navigate('/',{ replace: true })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })  
            }else{
                seterrMsg("Invalid Details")
            }
        }
    }
    function onClickSignup(){
        sign('/signup')
    }
    return(
        <div className="">
            
            <div className="lcard">
                <h1 className='loginheading'>Login</h1>
                <hr />
                <select className='w-25 m-3' onChange={e=>(setuser(e.target.value))}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <div>
                    <input type='email' placeholder='Email' className='m-3'  onChange={onChangeEmail} required/>
                    <br/>
                    <input type="password" placeholder='Password' className=' m-3 mb-0' onChange={onChangePassword} required/>

                    <p className='text-danger m-3'>{errormsg}</p>

                    <div className=''>
        
                        <a href='http://localhost:3000/Forgot' className='forgot'>forgot password?</a>

                        

                    </div>
                    <button className='btns btn btn-outline-warning m-3' onClick={onClickLogin}>Login</button>

                    <div>
                        <a href='http://localhost:3000/Signup' onClick={onClickSignup} className='forgot text-primary m-3'>Not yet Signup?</a>
                    </div>
                </div>
            </div>          
        </div>
        
    )
}
export default Login