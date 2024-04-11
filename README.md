# Online Reservation System For Restaurants

!--> Due to localhost Database unable to Deploy the project

## Admin Login Details

  ### Email : sandeep@admin.com
  ### Password : Sandeep@123
## User Login Details
  ### Email : sandeepmaraboina14s@gmail.com
  ### Password : Sandeep@123
  or you can signup with your own details
## Database
This project implemented using `React.js` for the `frontend`, `Node.js` for the `backend`, and `MySQL` for the database.
I have Created Database called `Stalcon` and tables `users`,`reservation`,`restaurants`
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/22de4a7b-09a2-4eb1-9dc2-27200b886932)
## Installation
### backend
To create a backend project use `npm init`.
To move to backend folder use `cd backend`
install required dependencies like `express`, `mysql`, `nodemon`,`cors`.
to install express use `npm install express`.
to install mysql use `npm install mysql`
to install nodemon use `npm install nodemon`
to install mysql use `npm install cors`
To start the server use `nodemon server.js` or `node server.js`.
### frontend
To create React App use `npx create-react-app app_name`.
To move to frontend folder use `cd frontend`.
use `npm install` to install required dependencies.
To start React Application use `npm start`.
## Signup 
In this Application I implemented Signup to take user details and stored in `users` table in `Stalcon` database
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/ba5b0f5f-fdb9-4c73-9044-4a697763d0cc)
Here, I used POST HTTP Method to send the Data from Frontend to backend using `axios` make sure to install axios using `npm install axios` and import to required file
## Login  
Here, we have 2 Login Modes one is `User login` and another one is `Admin Login`
For User login, i validated user details which provided by user and data which is in `users` table. if details are matched redirected to `home route` and stores `jwt token`
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/79fd8ecc-631c-4986-8fc6-5e4c21ac5360)
## Home
In the Home route I fetched the restaurants data from `restaurant` table and Displayed the list of restaurants with basic data. also implemented `logout butto` which removes `jwt token` and redirects to login route
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/08875da0-44e9-4fd8-8b5b-e33f92eca7eb)
## Restaurant Page
Onclick particular Restaurant, it redirects to Restaurant page
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/2878095d-1939-4af4-b38e-819e8f3833c2)
## Reserve page
Onclick `Reserve` button, it moves to show page
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/fdf34d81-3494-4f5e-9590-d579c5618435)
here i handled some errors shown in image and if all fields are not empty and onclick Reser button, Details Entered by the user are stored in the `reserve` table in `Stalcon` database
## Protected Route
Here i used `jwt token` to persist the user  credential if `jwt token` exists it automatically redirects to `/` path means `home route` else redirects to `/login` route
# Admin Page
Here i didn't stored admin details in database. i validated with 
### Email : sandeep@admin.com
### Password : Sandeep@123
in the `admin page` we have 3 buttons they are `View Userslist`, `View Restaurant list` and `View Reservations`.for admin page also implemented `jwt authentication`
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/22c18219-d45a-4b4d-9ffc-36443dc0fe3d)
### Onclick `View Userslist` 
we will have all the users list who has registered in our application
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/b57669f0-da91-4422-8178-e0c003690d93)
### Onclick `View Restaurant list` 
we will have all the Restaurants list who has registered in our application and also implemented feature to add `Restaurant` from this page
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/bb05be55-f8f7-4942-aaa2-60596f4370bf)
### Onclick `View Reservations` 
we will have all the Reservations list with some details like `Email`,`Restaurant` etc
![image](https://github.com/Sandeep-1405/Stalcon-Assignment/assets/107021866/d2105b98-4ba3-4997-a80b-97adc8bb65a9)
This is Complete Details of my Project
