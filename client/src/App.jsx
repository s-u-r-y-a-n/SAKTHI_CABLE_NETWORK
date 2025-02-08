import React from 'react';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
