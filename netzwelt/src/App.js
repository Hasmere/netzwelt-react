import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Territories from './components/territories';
import NotFound from './components/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<Territories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;