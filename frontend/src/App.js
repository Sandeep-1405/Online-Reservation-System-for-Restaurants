import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Restaurant from './components/Restaurant/restaurant'
import Forgot from './components/Forgot/forgot';
import './App.css';
import Admin from './components/Admin/admin';
import Notfound from './components/Notfound';
import Userslist from './components/Userslist/userslist';
import RestaurantList from './components/RestaurantList/restaurant';
import Reservations from './components/Reservations/reservations';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/signup' Component={Signup} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/' Component={Home} />
          <Route exact path='/:Name' Component={Restaurant} />
          <Route exact path='/forgot' Component={Forgot} />
          <Route exact path='/admin' Component={Admin} />
          <Route exact path='/users-list' Component={Userslist} />
          <Route exact path='/restaurants-list' Component={RestaurantList} />
          <Route exact path='/users-reservations' Component={Reservations} />
          <Route Component={Notfound} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
