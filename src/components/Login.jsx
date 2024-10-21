import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../utils/helper';

const Login = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    loginError: '',
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { username, password } = formState;

    const storedUsername = getFromLocalStorage('userName');       // Get stored credentials from localStorage
    const storedPassword = getFromLocalStorage('userPassword');

    if (username === storedUsername && password === storedPassword) {   //check username and password matched or not
      console.log('Login successful!');
      setFormState({ ...formState, loginError: '' });

      localStorage.setItem('isLoggedIn', 'true');        // Set a flag to indicate the user is logged in

      navigate('/dashboard');  //navigate to dashboard
    } else {
      setFormState({ ...formState, loginError: 'Invalid username or password' });
    }
  };

  const handleChange = (e) => {       // Set a flag to indicate the user is logged in
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const { username, password, loginError } = formState;

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
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
