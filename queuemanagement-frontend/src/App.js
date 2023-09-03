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
import EmployeesList from "./components/Admin/EmployeesList";
import ClientsList from "./components/Admin/ClientsList";
import NewEmployeeForm from "./components/Admin/NewEmployeeForm";
import AdminAccount from "./components/Admin/AdminAccount";
import AdminChangePassword from "./components/Admin/AdminChangePassword";
import AppointmentList from "./components/Appointment/AppointmentList";
import OperatorMenu from "./components/Menu/OperatorMenu";
import CodeConfirmation from "./components/Password/CodeConfirmation";
import NewPassword from "./components/Password/NewPassword";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import OperatorProtectedRoutes from "./OperatorProtectedRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import ClientProtectedRoutes from "./ClientProtectedRoutes";

function App() {
  return (
    <Routes>

    {/*not protected routes */}
    <Route path="/" element={<SignIn />} />
    
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Reset_password" element={<ResetPassword />} />
    <Route path="/code_confirmation" element={<CodeConfirmation />} />
    <Route path="/new_password" element={<NewPassword />} />

       {/******* client protected routes */}
    <Route path="/Menu" element={<ClientProtectedRoutes>
      <Menu />
     </ClientProtectedRoutes>} />
     <Route path="/Book_appointment" element={<ClientProtectedRoutes>
      <BookingForm />
     </ClientProtectedRoutes>} />

    <Route path="/Ticket" element={<ClientProtectedRoutes>
      <Ticket />
     </ClientProtectedRoutes>} />

     <Route path="/appointment" element={<ClientProtectedRoutes>
      <Appointment />
     </ClientProtectedRoutes>} />

     {/*protected routes */}
     <Route path="/Account" element={<ProtectedRoutes>
      <Account />
     </ProtectedRoutes>} />

     <Route path="/Change_password" element={<ProtectedRoutes>
      <ChangePassword />
     </ProtectedRoutes>} />



    {/******* admin protected routes */}
    <Route path="/employees" element={<AdminProtectedRoutes>
           <EmployeesList />
     </AdminProtectedRoutes>} />
     <Route path="/clients" element={<AdminProtectedRoutes>
      <ClientsList />
     </AdminProtectedRoutes>} />
     <Route path="/admin_account" element={<AdminProtectedRoutes>
      <AdminAccount/>
     </AdminProtectedRoutes>} />
     <Route path="/new_employee" element={<AdminProtectedRoutes>
      <NewEmployeeForm />
     </AdminProtectedRoutes>} />
     <Route path="/admin_change_password" element={<AdminProtectedRoutes>
      <AdminChangePassword />
     </AdminProtectedRoutes>} />

     {/******* operator protected routes */}
    
     <Route path="/appointments" element={<OperatorProtectedRoutes>
      <AppointmentList />
     </OperatorProtectedRoutes>} />

     <Route path="/management_menu" element={<OperatorProtectedRoutes>
      <OperatorMenu />
     </OperatorProtectedRoutes>} />
    
     <Route path="/Queue" element={<OperatorProtectedRoutes>
      <Queue />
     </OperatorProtectedRoutes>} />

    <Route path="/current" element={<OperatorProtectedRoutes>
      <CurrentTicket />
     </OperatorProtectedRoutes>} />
   




  </Routes>
  );
}

export default App;
