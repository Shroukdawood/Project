
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

export default function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
          // element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </Router>
  );
}
