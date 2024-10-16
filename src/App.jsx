import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound'; 

function App() {
  // Get the email from localStorage
  const email = localStorage.getItem('userEmail');

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Register />} /> 
        <Route path="*" element={<NotFound />} />  {/* Handle 404 Not Found */}
      </Routes>
    </Router>
  );
}

export default App;
