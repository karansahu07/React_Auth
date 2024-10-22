import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setInLocalStorage } from '../utils/helper';

const Register = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    username: '',
    phonenumber: '',
    gender: '',
    address: '',
    pincode: '',
    country: '',
    skill: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Simulated existing usernames (In real implementation, fetch this data from a server or database)
  const existingUsernames = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    const namePattern = /^[a-zA-Z\s]+$/;  //check the name only letter valid
    if (!namePattern.test(formState.name)) {
      newErrors.name = 'Name can only contain letters and spaces.';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  //check the email
    if (!emailPattern.test(formState.email)) {
      newErrors.email = 'Please enter a valid Gmail address.';
    }

    if (existingUsernames.includes(formState.username)) {    // Username validation (unique check)
      newErrors.username = 'Username already exists. Please choose a different one.';
    }

  // Phone number validation (10 digits and numeric only)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(formState.phonenumber)) {
    newErrors.phonenumber = 'Phone number must be exactly 10 digits and contain only numbers.';
  }
  else{
    console.log(formState.phonenumber);
  }

  // Pincode validation (6 digits and numeric only)
  const pincodePattern = /^\d{6}$/;
  if (!pincodePattern.test(formState.pincode)) {
    newErrors.pincode = 'Pincode must be exactly 6 digits and contain only numbers.';
  }

    // Password validation (non-empty)
    if (!formState.password) {
      newErrors.password = 'Password is required.';
    }

    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store user information in localStorage
    setInLocalStorage('userEmail', formState.email);
    setInLocalStorage('userPassword', formState.password);
    setInLocalStorage('userName', formState.name);
    setInLocalStorage('userUsername', formState.username);
    setInLocalStorage('userPhoneNumber', formState.phonenumber);
    setInLocalStorage('userGender', formState.gender);
    setInLocalStorage('userAddress', formState.address);
    setInLocalStorage('userPincode', formState.pincode);
    setInLocalStorage('userCountry', formState.country);
    setInLocalStorage('userSkill', formState.skill);
    setInLocalStorage('isLoggedIn', 'true'); // Setting user as logged in

    
    navigate('/dashboard');  // Navigate to the dashboard page after registration
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleRegister}>
        <h2 style={styles.title}>Register</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="phonenumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formState.phonenumber}
            onChange={handleInputChange}
            style={styles.input}
            required
            maxLength="10"  
            pattern="\d{10}"  
            inputMode="numeric"  
          />

          {errors.phonenumber && <span style={styles.error}>{errors.phonenumber}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formState.gender}
            onChange={handleInputChange}
            style={styles.input}
            required
          >
            <option value="">Select Gender</option> 
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formState.pincode}
            onChange={handleInputChange}
            style={styles.input}
            required
            maxLength="6"  
            pattern="\d{6}"  
            inputMode="numeric" 
          />
          {errors.pincode && <span style={styles.error}>{errors.pincode}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formState.country}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="skill">Skills:</label>
          <input
            type="text"
            id="skill"
            name="skill"
            placeholder="Separate with commas"
            value={formState.skill}
            onChange={handleInputChange}
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
            value={formState.password}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
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
  error: {
    color: 'red',
    fontSize: '0.9rem',
  },
};

export default Register;
