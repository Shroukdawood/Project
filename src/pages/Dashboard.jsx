import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import DataTable from './DataTable';
import Chart from './Chart';

export default function Dashboard() {
    const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth); // Firebase logout
    dispatch(logout());  // Redux logout
    navigate('/');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome,
            {user?.name}

        </h1>
        <button 
        onClick={handleLogout} 
        
        className="text-red-500">Logout</button>
      </div>
      <Chart   />
      <DataTable />
    </div>
  );
}
