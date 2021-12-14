import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import NavbarMenu from './components/navbar/NavbarMenu';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Favorites from './components/pages/Favorites';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import Register from './Register';
import PostJob from './components/pages/Post';
import Consulting from './components/pages/Consulting';
import SearchResult from './components/pages/SearchResult';
import Details from './components/pages/Details';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import helper from './helper';
// import '../node_modules/material-design-icons/iconfont/material-icons.css';

function App() {
  
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/postjob' element={<PostJob />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/result' element={<SearchResult />} />
        <Route path='/detail' element={<Details />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
