import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/Helper';

const PublicRoute = ({ children }) => {
  const auth = isLoggedIn();
  
  return !auth ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
