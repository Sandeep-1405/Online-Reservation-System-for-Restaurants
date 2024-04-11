const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const twilio = require("twilio");
const jwt = require("jsonwebtoken")

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "Stalcon"
})

//signup Details

app.post('/create', async (req, res) => {
    const { name, email, phonenumber, password } = req.body;

    const sqry = "SELECT * from users WHERE Email =?";
    db.query(sqry,[email],(error,data)=>{
        if (error){
            return res.json(error)
        }else if(data.length !=0){
            return res.json("Email Already Exists")
        }else{
            const insertqry = "INSERT INTO users (`Name`, `Email`, `PhoneNumber`, `Password`) VALUES (?, ?, ?, ?)";
            db.query(insertqry, [name, email, phonenumber, password], (error,data) => {
                if (error) {
                    return res.json(error);
                }
                return res.json(data);
            });
        }
    })
});


// Login API

app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    const sql = "Select Email , Password from users where Email = ?"
    db.query(sql,[email],(error,data)=>{
        if(error){
            return res.json(error)
        }else if(data.length ==0){
            return res.json("Email Not Exists")
        }else{
            if (data[0].Password !== password){
                return res.json("Invalid Password")
            }else{
                const jwttoken = jwt.sign(req.body.email,"MY_Secreate_key")
            //console.log({jwttoken})
                return res.json([...data,data.twt = {jwttoken}])  
            }
             
        }
    })
    
})

//forgot password API

app.put('/forgot',async(req,res)=>{
    const emailcheck = "SELECT Email from users where Email = ?"
    db.query(emailcheck,[req.body.email],(error,data)=>{
        if (error) return res.json(error)
        else if(data.length === 0){
            return res.json("Email not Exist")
        }else{
            const sql = "UPDATE users SET Password = ? where Email = ?";
            db.query(sql,[req.body.password,req.body.email],(error,data)=>{
                if (error) return res.json(error)
                return res.json(data)
            })
        }
    })

})

app.post('/reserve', async(req,res)=>{
    const {name, email, date, restaurant} = req.body
    const sql = "INSERT INTO reservation (`Name`,`Email`,`Date`,`Restaurant`) VALUES(?,?,?,?)"

    db.query(sql,[name, email, date, restaurant],(error,data)=>{
        if (error){
            return res.json(error)
        }else{
            return res.json(data)
        }
    })
})

//Get Data

app.get('/getusersdata',async(req,res)=>{
    const sql = "Select * from users"
    db.query(sql,(error,data)=>{
        if (error){
            return res.json(error)
        }
        return res.json(data)
    })
})

//Restaurant list

app.get('/getrestaurantdata',async(req,res)=>{
    const sql = "Select * from restaurant"
    db.query(sql,(error,data)=>{
        if (error){
            return res.json(error)
        }
        return res.json(data)
    })
})

// Add Restaurant

app.post('/add-restaurant', async (req,res)=>{
    const {name,des,url,rating,discount,price,distance} = req.body
    const sql = "INSERT INTO restaurant (`Name`,`Description`,`ImgUrl`,`Rating`,`Discount`,`Price`,`Distance`) VALUES(?,?,?,?,?,?,?)"

    db.query(sql,[name,des,url,rating,discount,price,distance],(error,data)=>{
        if (error){
            return res.json(error)
        }else{
            return res.json(data)
        }
    })
})

// Reservations

app.get('/users-reservations',async(req,res)=>{
    const sql = "Select * from reservation"
    db.query(sql,(error,data)=>{
        if (error){
            return res.json(error)
        }
        return res.json(data)
    })
})

app.listen(8081,()=>{
    console.log(`Server Running at localhost://3000`)
})