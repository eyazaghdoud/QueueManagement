import React from "react";

import { Navigate } from "react-router-dom";

export default function OperatorProtectedRoutes ({ children}) {

  let user =JSON.parse(localStorage.getItem("user"));

    if (!user || user.userInfo.role!=='OPERATOR') {
      return <Navigate to="/" redirect />;
    }
    
    return children;
  };