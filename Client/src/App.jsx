import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Login  from './pages/Login';

import Home from './pages/Home';
import DonorDashboard from './pages/DonorDashboard';
import NGODashboard from './pages/NGODashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<DonorDashboard />} />
      <Route path="/DonorDashboard" element={<DonorDashboard />} />
      <Route path="/ngo" element={<NGODashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signin />} />
        
    </Routes>
  );
}

export default App;
