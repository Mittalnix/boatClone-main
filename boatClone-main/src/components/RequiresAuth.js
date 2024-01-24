import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
    const location = useLocation();
    const user = localStorage.getItem("user");
    return user ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};