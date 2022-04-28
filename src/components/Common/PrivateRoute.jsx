import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute(props) {
  // Check if user is Logged In
  // If yes, show route
  // Otherwise, redirect to Sign Up Page
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
