import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setInLocalStorage } from '../utils/Helper';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Email validation for @gmail.com format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    // Store email and password in localStorage
    setInLocalStorage('userEmail', email);
    setInLocalStorage('userPassword', password);

    // Navigate to login page after registration
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleRegister}>
        <h2 style={styles.title}>Register</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '20px', 
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px', 
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
    maxWidth: '500px', 
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
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};


export default Register;