import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import SignTemplate from './layouts/SignTemplate';
import Dashboard from './components/Main/Dashboard';
import Login from './components/Main/Login';
import Qrbtn from './components/Home/Qrbtn';
import Homepage from './components/Home/Homepage';
// import BreakdownReqTable,{ ServiceRequestTable as ServiceReq } from './components/Sub/ServiceReq';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDash from './components/AdminPanel/AdminDashboard';
import Services from './components/Home/Services';
import Navbar from './components/Home/Navbar';
import AboutUs from './components/Home/AboutUs';
import BackBtn from './components/Home/BackBtn';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes path="/" >
    <Route index element={ <Homepage></Homepage>}/>
    <Route path="/dashboard/:para" element={ <Dashboard></Dashboard>}/>
    <Route path="/sign/:para" element={ <SignTemplate></SignTemplate>}/>
    <Route path="/Qrbtn" element={<Qrbtn></Qrbtn>}/>
    <Route path="/admin" element={<AdminDash></AdminDash>}/>
    <Route path="/webservice" element={<Services></Services>}/>
    <Route path="/navbar" element={<Navbar></Navbar>}/>
    <Route path="/aboutus" element={<AboutUs></AboutUs>}/>
    <Route path="/backbtn" element={<BackBtn></BackBtn>}/>
    
   
  </Routes>
 
  </BrowserRouter>  

);


// reportWebVitals();


