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


  </Routes>
  );
}

export default App;
