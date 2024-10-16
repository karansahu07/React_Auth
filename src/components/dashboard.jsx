import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage, removeFromLocalStorage } from '../utils/Helper';

const Dashboard = () => {
  const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn()) {
     
//       navigate('/login');
//     }
//   }, [navigate]);


  const handleLogout = () => {
    removeFromLocalStorage('isLoggedIn');   

    navigate('/login');  
  
  };

  const email = getFromLocalStorage('userEmail');
  const firstName = email ? email.split('@')[0] : 'User';

  return (
    <div style={styles.container}>
      <h1>Welcome, {firstName}!</h1>
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
