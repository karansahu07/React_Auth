import { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage, setInLocalStorage } from '../utils/helper';

const Login = () => {
  // Single state object for form fields and errors
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    loginError: '',
  });

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');   // Check if the user is logged in
  //   if (isLoggedIn === 'true') {
  //     // If not logged in, redirect to login
  //     navigate('/dashboard');
  //   }
  // }, [navigate]);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formState;

    // Get stored credentials from localStorage
    const storedEmail = getFromLocalStorage('userEmail');
    const storedPassword = getFromLocalStorage('userPassword');

    // Check if entered email and password match the stored values
    if (email === storedEmail && password === storedPassword) {
      console.log('Login successful!');
      setFormState({ ...formState, loginError: '' });

      // Set a flag to indicate the user is logged in
      localStorage.setItem('isLoggedIn', 'true');

      
      navigate('/dashboard');  // Navigate to the dashboard upon successful login
    } else {
      // Update the formState with the error message
      setFormState({ ...formState, loginError: 'Invalid email or password' });
    }
  };

  // Handle input changes for email and password
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const { email, password, loginError } = formState;

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Login</button>

        {loginError && <p style={styles.error}>{loginError}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#007bff',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  error: {
    marginTop: '15px',
    color: 'red',
    fontSize: '1rem',
    textAlign: 'center',
  },
};

export default Login;
