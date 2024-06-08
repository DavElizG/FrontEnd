

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppointmentDashboard from '../pages/AppointmentDashboard';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';
import ProtectedRoutes from '../components/ProtectedRoutes';
import { useAuth } from '../context/AuthProvider';

const AppRouter: React.FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<AppointmentDashboard />} />  
        <Route 
          path="/admin" 
          element={
            <ProtectedRoutes user={user} requiredRole={1}>
              <AdminDashboard />
            </ProtectedRoutes>
          } 
        />  
      </Routes>
    </BrowserRouter>    
  );
}

export default AppRouter;
