import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import baseURL from "../config";

export default function AuthProvider() {
  let isAuth = localStorage.getItem("LogStatus");
  const navgate = useNavigate();
  useEffect(() => {
    // Make an API request to check authentication status
    axios
      .get(`${baseURL}/isLogged`, { withCredentials: true }) // Send cookies with the request
      .then((response) => {
        const logged = response.data.logged;
        localStorage.setItem("LogStatus", logged);
        if (!logged) {
          navgate("/Login");
        }
      })
      .catch((error) => {
        console.log("Somthing went wrong!");
      });
  }, []);
  return isAuth === "true" ? <Outlet /> : <Navigate to="/Login" />;
}
