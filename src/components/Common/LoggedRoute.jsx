import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function LoggedRoute(props) {
  // Check if user is Logged In
  // If yes, show route
  // Otherwise, redirect to Sign Up Page
  const isLoggedIn = Boolean(localStorage.getItem('access-token'));
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
}
