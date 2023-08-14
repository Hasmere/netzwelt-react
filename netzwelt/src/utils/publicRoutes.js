import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from './common';
 
// handle the public routes
const PublicRoutes = () => {
  return !getUser() ? <Outlet /> : <Navigate to="/home/index" />
}
 
export default PublicRoutes;