import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import PrivateRoute from './routes/Privateroute';
import PublicRoute from './routes/Publicroute';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/register" element={
          <PublicRoute>
            <Register />                         {/* Public routes */}
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

     
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />                         {/* Private routes */}
          </PrivateRoute>
        } />

        <Route path="/" element={<Register />} /> {/*Default page */}

        <Route path="*" element={<NotFound />} />  {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
