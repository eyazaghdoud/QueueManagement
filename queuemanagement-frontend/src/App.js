import Layout from "./components/Login/Layout";

import LoginForm from "./components/Login/LoginForm";
import Menu from "./components/Menu/Menu";
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingForm from "./components/Booking/BookingForm";
import Ticket from "./components/Ticket/Ticket";
import './components/Ticket/ticket.css';
import { useState } from 'react';
import Account from "./components/Account/Account";
import './App.css';
import SignIn from './components/Login/SignIn';
import SignUp from "./components/SingUp/SignUp";
import ResetPassword from "./components/Password/ResetPassword";
import ChangePassword from "./components/Password/ChangePassword";
import Queue from "./components/Queue/Queue";
import CurrentTicket from "./components/Queue/CurrentTicket";
import Appointment from "./components/Appointment/Appointment";
import Dashboard from "./components/Admin/DashboardHeader";
import EmployeesList from "./components/Admin/EmployeesList";
import ClientsList from "./components/Admin/ClientsList";
import NewEmployeeForm from "./components/Admin/NewEmployeeForm";
import AdminAccount from "./components/Admin/AdminAccount";
import Ex from "./components/Ex";
import AdminChangePassword from "./components/Admin/AdminChangePassword";

function App() {
  return (
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/Menu" element={<Menu />} />
    <Route path="/Book_appointment" element={<BookingForm />} />
    <Route path="/Ticket" element={<Ticket />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/SignUp" element={<SignUp />} />
    {/*<Route path="/Login" element={<LoginForm />} />*/}
    <Route path="/Reset_password" element={<ResetPassword />} />
    <Route path="/Change_password" element={<ChangePassword />} />
    <Route path="/Queue" element={<Queue />} />
    <Route path="/current" element={<CurrentTicket />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/employees" element={<EmployeesList />} />
    <Route path="/clients" element={<ClientsList />} />
    <Route path="/new_employee" element={<NewEmployeeForm />} />
    <Route path="/admin_account" element={<AdminAccount/>} />
    <Route path="/api_test" element={<Ex/>} />
    <Route path="/admin_change_password" element={<AdminChangePassword />} />




  </Routes>
  );
}

export default App;
