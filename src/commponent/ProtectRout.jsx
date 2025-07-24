import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRouter() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated? <Outlet/> : <Navigate to='/login' />
}
