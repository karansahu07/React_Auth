import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage, removeFromLocalStorage } from '../utils/helper';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const email = getFromLocalStorage('userEmail');
    const name = getFromLocalStorage('userName');
    const username = getFromLocalStorage('userUsername');
    const phonenumber = getFromLocalStorage('userPhoneNumber');
    const gender = getFromLocalStorage('userGender');
    const address = getFromLocalStorage('userAddress');
    const pincode = getFromLocalStorage('userPincode');
    const country = getFromLocalStorage('userCountry');
    const skill = getFromLocalStorage('userSkill');

    if (!email) {
      navigate('/login');
    } else {
      setUserData({
        email,
        name,
        username,
        phonenumber,
        gender,
        address,
        pincode,
        country,
        skill,
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    removeFromLocalStorage('isLoggedIn');
    navigate('/login');
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Welcome, {userData.name || 'User'}!</h1>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Username:</strong> {userData.username}</p>
      <p><strong>Phone Number:</strong> {userData.phonenumber}</p>
      <p><strong>Gender:</strong> {userData.gender}</p>
      <p><strong>Address:</strong> {userData.address}</p>
      <p><strong>Pincode:</strong> {userData.pincode}</p>
      <p><strong>Country:</strong> {userData.country}</p>
      <p><strong>Skills:</strong> {userData.skill}</p>
      
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Dashboard;
