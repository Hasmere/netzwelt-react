import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
 
import PrivateRoutes from './utils/privateRoutes';
import PublicRoutes from './utils/publicRoutes';
import { getRoles, removeUserSession } from './utils/common';
 
import Login from './components/login';
import Territories from './components/territories';
import NotFound from './components/notFound';
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  if (authLoading) {
    const roles = getRoles();
  
    if (roles === null) {
      setAuthLoading(false);
      removeUserSession();
    }
  }
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<PublicRoutes />}>
          <Route path="/account/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Navigate to="/home/index" />} />
          <Route path="/home/index" element={<Territories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;