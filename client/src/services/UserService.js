const localBaseURL = "http://localhost:12000/api";
const onlineBaseURL = "https://login-with-mongo.onrender.com/api";

const API_URL = localBaseURL;
const headers = { "Content-Type": "application/json" };

/**
 * NOTE: the pattern [data, null] refers to [data, error] 
 * to identify errors from data
 */

class UserService {
  static getUserInfo =  async (email) => {
    try {
      const resp = await fetch(`${API_URL}/user/info`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email })
      });
      const data = await resp?.json();
  
      if(resp.ok) return [data, null];
      else        return [null, data];

    } catch (err) {
      console.error(err.message);
      return [null, "Server is down"];
    }
  }
  



  static loginUser = async (data) => {
    try {
      const resp = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      
      const newData = await resp?.json();
  
      if(resp.ok) return [newData, null];
      else        return [null, newData];

    } catch (err) {
      console.error(err.message);
      return [null, "Server is down"];
    }
  }



  static registerUser = async (data) => {
    try {
      const resp = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      
      const newData = await resp?.json();
  
      if(resp.ok) return [newData, null];
      else        return [null, newData];
    } catch (err) {
      console.error(err.message);
      return [null, "Server is down"];
    }
  }
}

export default UserService;
