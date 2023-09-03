import React from "react";

import { Navigate } from "react-router-dom";

export default function AdminProtectedRoutes ({ children}) {

  let user =JSON.parse(localStorage.getItem("user"));

    if (!user || user.userInfo.role!=="ADMIN") {
      return <Navigate to="/" redirect />;
    }
    
    return children;
  };