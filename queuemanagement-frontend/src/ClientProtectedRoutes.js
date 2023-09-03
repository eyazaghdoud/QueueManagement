import React from "react";

import { Navigate } from "react-router-dom";

export default function ClientProtectedRoutes ({ children}) {

  let user =JSON.parse(localStorage.getItem("user"));

    if (!user || user.userInfo.role!=="CLIENT") {
      return <Navigate to="/" redirect />;
    }
    
    return children;
  };