
// Function to get an item from localStorage
export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  // Function to set an item in localStorage
  export const setInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  // Function to remove an item from localStorage
  export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // Function to check if user is logged in
  export const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
  
  // Function to log out the user
  export const logoutUser = () => {
    localStorage.removeItem('isLoggedIn');
  };
  