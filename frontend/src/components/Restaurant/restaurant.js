import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './restaurant.css'
import { useState,useEffect} from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'

function Restaurant(){

    const {Name} = useParams();
    const navigate = useNavigate()

    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [date,setdate] = useState('')
    const [restaurant,setrest] = useState(Name)
    const [error,seterror] = useState('')

    useEffect(()=>{
        const token = Cookies.get("jwt")
        //console.log(token)
        if (token === undefined){
            navigate('/login',{replace:true})
        }
    },[])

    function onclickReserve(e){
        e.preventDefault()
        console.log(name)
        console.log(date)
        console.log(restaurant)
        if(name !=="" || email !== "" || date !== ""){
            axios.post('http://localhost:8081/reserve',{name,email,date,restaurant})
            .then(res=>{
                setname('')
                setemail('')
                setdate('')
                seterror(`Successfully Reserved on ${date}`)
            }).catch(error=>(console.log(error)))
        }else{
            seterror("All Feilds Required")
        }
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <p className='text-warning m-2 p-2 border'>{Name}</p>
                    </a>
                    <button className="navbar-toggler" type="button"        data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto">
                            <a className="nav-link active " id="navItem1" href="#wcuSection">
                                Why Choose Us?
                                <span className="sr-only"></span>
                            </a>
                            <a className="nav-link" href="#exploreMenuSection" id="navItem2">
                                Explore Menu
                            </a>
                            <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">
                                Delivery & Payment
                            </a>
                            <a className="nav-link" href="#followUsSection" id="navItem4">
                                Follow Us
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="banner-section-bg-container d-flex justify-content-center flex-column">
                <div className="text-center">
                    <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
                    <p className="banner-caption mb-4">Eat Smart & Healthy</p>
                    <a className=" btn btn-warning" href="#exploreMenuSection">View Menu</a>
                    <button className="btn btn-outline-warning m-2">Order Now</button>
                    <a className='btn btn-warning' href='#reservesection'>Reserve Now</a>
                </div>
            </div>
            <div className="wcu-section pt-5 pb-5" id="wcuSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="wcu-section-heading">Why Choose Us?</h1>
                            <p className="wcu-section-description">
                            We use both original recipes and classNameic versions of famous food
                            items.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="wcu-card p-3 mb-3">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
                                className="wcu-card-image"
                            />
                            <h1 className="wcu-card-title mt-3">Food Service</h1>
                            <p className="wcu-card-description">
                                Experience fine dining at the comfort of your home. All our
                                orders are carefully packed and arranged to give you the nothing
                                less than perfect.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
                            className="wcu-card-image"
                            />
                            <h1 className="wcu-card-title mt-3">Fresh Food</h1>
                            <p className="wcu-card-description">
                                The Fresh Food group provides fresh-cut fruits and vegetables
                                directly picked from our partner farms and farm houses so that
                                you always get them tree to plate.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
                                className="wcu-card-image"
                            />
                            <h1 className="wcu-card-title mt-3">Best Offers</h1>
                            <p className="wcu-card-description">
                                Food Coupons & Offers upto
                                <span className="offers">50% OFF</span>
                                and Exclusive Promo Codes on All Online Food Orders.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="menu-section-heading">Explore Menu</h1>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow menu-item-card p-3 mb-3">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
                                className="menu-item-image w-100"
                            />
                            <h1 className="menu-card-title">Non-Veg Starters</h1>
                            <a href="" className="menu-item-link">
                                View All
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="shadow menu-item-card p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Veg Starters</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Soups</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Fish & Sea food</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Main Course</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Noodles</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Salads</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="menu-item-card shadow p-3 mb-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png"
                            className="menu-item-image w-100"
                        />
                        <h1 className="menu-card-title">Desserts</h1>
                        <a href="" className="menu-item-link">
                            View All
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="reservesection" className='reservesection'>
                <h1 className="delivery-and-payment-section-heading pt-5">
                    Reserve Table
                    <form>
                        <div className='reserveform'>
                            <div>
                                <input type='text' placeholder='Name' value={name} className='reserveinput' onChange={e=>(setname(e.target.value))}/>
                            </div>
                            <div>
                                <input type='email' placeholder='Registered Email' value={email}   className='reserveinput'  onChange={e=>(setemail(e.target.value))} required/>
                            </div>
                            <div>
                                <input type='date' className='reserveinput' value={date}  onChange={e=>(setdate(e.target.value))}/>
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-success m-5' onClick={onclickReserve}>Reserve</button>
                            <p className='text-danger para'>{error}</p>
                        </div>
                        
                    </form>
                </h1>
            </div>
            <div className="healthy-food-section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-center">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                            className="healthy-food-section-img"
                        />
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <h1 className="healthy-food-section-heading">
                        Fresh, Healthy, Organic, Delicious Fruits
                        </h1>
                        <p className="healthy-food-section-description">
                        Say no to harmful chemicals and go fully organic with our range of
                        fresh fruits and veggies. Pamper your body and your senses with
                        the true and unadulterated gifts from mother nature. with the true
                        and unadulterated gifts from mother nature.
                        </p>
                        <button className="custom-button">Watch Video</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 order-1 order-md-2">
                        <div className="text-center">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                            className="delivery-and-payment-section-img"
                        />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 order-2 order-md-1">
                        <h1 className="delivery-and-payment-section-heading">
                        Delivery and Payment
                        </h1>
                        <p className="delivery-and-payment-section-description">
                        Enjoy hassle-free payment with the plenitude of payment options
                        available for you. Get live tracking and locate your food on a
                        live map. It's quite a sight to see your food arrive to your door.
                        Plus, you get a 5% discount on every order every time you pay
                        online.
                        </p>
                        <button className="custom-button">Order Now</button>
                        <div className="mt-3">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                            className="payment-card-img"
                        />
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                            className="payment-card-img"
                        />
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                            className="payment-card-img"
                        />
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                            className="payment-card-img"
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="thanking-customers-section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h1 className="thanking-customers-section-heading">
                        Thank you for being a valuable customer to us.
                        </h1>
                        <p className="thanking-customers-section-description">
                        We have a surprise gift for you
                        </p>
                        <div className="d-md-none">
                        <img
                            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                            className="thanking-customers-section-img"
                        />
                        </div>
                        <div>
                        <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal">
                            Redeem Gift
                        </button>
                        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog mt-5">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title thanking-customers-section-modal-title" id="exampleModalLabel">
                                    Gift Voucher
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                                    className="w-100"
                                />
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-none d-md-block">
                        <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                        className="thanking-customers-section-img"
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className="follow-us-section pt-5 pb-5" id="followUsSection">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <h1 className="follow-us-section-heading">Follow Us</h1>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-row justify-content-center">
                        <div className="follow-us-icon-container">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png' className='h-100 w-100 p-auto' />
                        </div>
                        <div className="follow-us-icon-container">
                            <img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' className='h-100 w-100 p-auto m-auto'/>
                        </div>
                        <div className="follow-us-icon-container">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjfSguNAOtSUA2tJoBLVws2dMIx1lHJrjjGXTsAPfkg&s' className='h-100 w-100 p-auto m-auto'/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer-section pt-5 pb-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        <p className=' footer-section-mail-id'>{Name}</p>
                        <h1 className="footer-section-mail-id">orderfood@{Name.replace(/\s/g, "").toLowerCase()}.com</h1>
                        <p className="footer-section-address">
                        123 Ayur Vigyan Nagar, New Delhi, India.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant