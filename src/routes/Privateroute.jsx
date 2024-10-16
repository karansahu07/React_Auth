import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/Helper';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated
  const auth = isLoggedIn();
  
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
