import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from './common';
 
// handle the private routes
const PrivateRoutes = () => {
  return getUser() ? <Outlet /> : <Navigate to="/account/login" />
}
 
export default PrivateRoutes;