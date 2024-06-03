import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppointmentDashboard from '../pages/AppointmentDashboard';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter> 
   <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/Login" element={ <Login/>} />
        <Route path="/Register" element={ <Register/>} />
        <Route path="/Appointments" element={<AppointmentDashboard />} />  
        <Route path="/Admin" element={<AdminDashboard />} />  
    </Routes>
    </BrowserRouter>    
  );
}

export default AppRouter;