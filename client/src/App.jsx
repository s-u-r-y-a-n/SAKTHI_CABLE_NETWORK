import React from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, replace } from "react-router-dom";
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/Profile/MyAccount';
import UpdatePassword from './pages/Profile/UpdatePassword';
import AllCustomers from './pages/Customers/AllCustomers';
import NewCustomer from './pages/Customers/NewCustomer';
import CustomerContact from './pages/Customers/CustomerContact';
import CustomerFeedback from './pages/Customers/CustomerFeedback';
import Complaints from './pages/Complaints';
import Reports from './pages/Reports';

const App = () => {

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}>
            {/* Dashboard Menu */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* Profile Menus */}
            <Route path="my-account" element={<MyAccount />} />
            <Route path="update-password" element={<UpdatePassword />} />

            {/* Customers Menu */}
            <Route path="all-customers" element={<AllCustomers />} />
            <Route path="new-customer" element={<NewCustomer />} />
            <Route path="customer-contact" element={<CustomerContact />} />
            <Route path="customer-feedback" element={<CustomerFeedback />} />

            {/* Complaints Menu */}
            <Route path="complaints" element={<Complaints />} />

            {/* Reports Menu */}
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div >
  )
}

export default App
