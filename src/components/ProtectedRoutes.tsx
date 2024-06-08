

import React from 'react';
import { Navigate } from 'react-router-dom';
import { User } from '../types/Types'; 
import ErrorPage from '../pages/ErrorPage';

interface ProtectedRoutesProps {
  user: User | null;
  requiredRole?: number;
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user, requiredRole, children }) => {
  console.log("ProtectedRoutes: user =", user, "requiredRole =", requiredRole);

  //if (!user) {
   // console.log("User not authenticated. Redirecting to /login");
   // return <Navigate to="/login" />;
  //}

  if (requiredRole !== undefined && user && Number(user.RoleId) !== requiredRole) {
    console.log("User does not have the required role. Redirecting to /");
    return <ErrorPage/>;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
