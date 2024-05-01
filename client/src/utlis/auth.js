// use this to decode a token and get the user's information out of it
import * as jwt_decode from 'jwt-decode';

// import jwt_decode from 'jwt-decode';


// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwt_decode(token);
    }
    return null;
  }


  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true; // Token is expired
      } else {
        return false; // Token is not expired
      }
    } catch (err) {
      return false; // Unable to decode token, consider it not expired
    }
  }
  

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }

  login(token) {
    // Saves user token to localStorage
    console.log('auth.js:', token)
    localStorage.setItem('token', token);
    // window.location.assign('/');
  }  

  isAuthenticated() {
    // Delegate to the loggedIn method
    return this.loggedIn();
  }

  getUserId() {
    const token = this.getToken();
    if (token) {
      const decoded = jwt_decode(token);
      return decoded.userId;
    }
    return null;
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

const authServiceInstance = new AuthService();
export default authServiceInstance;
