
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../types/Types'; 
import ErrorModal from './ErrorModal';
import ErrorPage from '../pages/ErrorPage';

interface ProtectedRoutesProps {
  user: User | null;
  requiredRole?: number;
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user, requiredRole, children }) => {
  console.log("ProtectedRoutes: user =", user, "requiredRole =", requiredRole);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  if (!user) {
    console.log("User not authenticated. Redirecting to /login");
    return <Navigate to="/login" />;
  }

  if (requiredRole !== undefined && user && Number(user.RoleId) !== requiredRole) {
   
    return  <ErrorPage />;
    
  }

  return <>
  {children}
  <ErrorModal show={showErrorModal} handleClose={() => setShowErrorModal(false)} />
  </>;
};

export default ProtectedRoutes;
