import { Link,useNavigate } from 'react-router-dom'
import './admin.css'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

function Admin(){

    const navigate = useNavigate();

    useEffect(()=>{
        const token = Cookies.get('admin')
        if (token === undefined){
            navigate("/login",{replace:true})
        }
    })

    function onClickLogout(){
        Cookies.remove("admin")
        navigate('/login',{replace:true})
    }

    return(
        <div className="admin-bg">
            <h1 className=' pt-5'>Welcome Admin</h1>
            <button className='btn btn-danger mt-5' onClick={onClickLogout}>Logout</button>
            <div className='d-flex flex-row justify-content-around m-5 pt-5'>
                <Link to="/users-list" className="btn btn-primary">View Users List</Link>
                <Link to="/restaurants-list" className="btn btn-warning">View Restaurants List</Link>
            </div>
            <Link to="/users-reservations" className="btn btn-success m-5">View Reservations</Link>
        </div>
    )
}
export default Admin