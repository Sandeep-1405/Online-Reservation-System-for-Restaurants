import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './home.css'
import { useEffect, useState } from "react"
import axios from 'axios'

function Home(){

    /*const restaurantlist = [
        {
            id:1,
            Name:"SVS Restaurant",
            Description:"Telugu Restaurant...",
            ImgUrl:"https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg",
            Rating:"4.5 Rating",
            Discount:"50% OFF",
            Price:"Starting from 99",
            Distance:"4km 10min"
        },
        {
            id:2,
            Name:"Asha Restaurant",
            Description:"Famous Restaurant...",
            ImgUrl:"https://cdn.pixabay.com/photo/2018/04/17/23/04/food-3329079_1280.png",
            Rating:"3.7 Rating",
            Discount:"40% OFF",
            Price:"Starting from 129",
            Distance:"5km 13min"
        },
        {
            id:3,
            Name:"Tinnara Babu Restaurant",
            Description:"Tasty Restaurant...",
            ImgUrl:"https://www.pngall.com/wp-content/uploads/8/Restaurant-Food-PNG.png",
            Rating:"3.9 Rating",
            Discount:"20% OFF",
            Price:"Starting from 110",
            Distance:"6km 15min"
        },
        {
            id:4,
            Name:"Sathya Restaurant",
            Description:"Super Restaurant...",
            ImgUrl:"https://aabsweets.com/wp-content/themes/a2b/images/restaurant.png",
            Rating:"4.0 Rating",
            Discount:"30% OFF",
            Price:"Starting from 75",
            Distance:"8km 20min"
        },
        {
            id:5,
            Name:"Malik Restaurant",
            Description:"Famous Bhai Biryani...",
            ImgUrl:"https://myfoodtasticblog.files.wordpress.com/2017/09/foodtrip-platter.png",
            Rating:"3.8 Rating",
            Discount:"25% OFF",
            Price:"Starting from 99",
            Distance:"10km 22min"
        },
        {
            id:6,
            Name:"Ra Tinu Restaurant",
            Description:"Telugu Restaurant...",
            ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PeC_RmSsoHsgDqo8TMrvl5BS1xPmmd3BFn1TdFFizw&s",
            Rating:"4.7 Rating",
            Discount:"60% OFF",
            Price:"Starting from 150",
            Distance:"12km 25min"
        },
    ]*/

    const [rdata,setdata] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        const token = Cookies.get("jwt")
        //console.log(token)
        if (token === undefined){
            navigate('/login',{replace:true})
        }
        axios.get("http://localhost:8081/getrestaurantdata")
        .then(res=>{
            setdata(res.data)
            //console.log(res.data)
        }).catch(error=>(console.log()))
    },[])

    function onClickLogout(){
        Cookies.remove("jwt")
        navigate('/login',{replace:true})
    }

    return(
        <div>
            <h2 className="p-3 bg-light w-50 sheading m-auto mt-3">Near By Restaurants</h2>
            <button className="btn btn-primary logout" onClick={onClickLogout}>Logout</button>
            <button className="btn btn-primary logout2 mt-3" onClick={onClickLogout}>Logout</button>
            <div className="d-flex flex-row allcards">
                {rdata.map(Details =>(
                    <Link to={`${Details.Name}`}  key={Details.ID} className="shadow card m-3">
                        <img src={Details.ImgUrl} alt="img" className="h-50 w-50 m-auto im"/>
                        <h3>{Details.Name}</h3>
                        <p>{Details.Description}</p>
                        <div className="d-flex flex-row justify-content-around minc">
                            <p>{Details.Rating}</p>
                            <p>{Details.Price}</p>
                            <p>{Details.Distance}</p>
                            
                        </div>
                        <p className="discount">{Details.Discount}</p>
                        
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home