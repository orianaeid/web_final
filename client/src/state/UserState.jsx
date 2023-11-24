/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import UserService from "../services/UserService";
import UserContext from "./UserContext";


export default function UserState({ children }) {
  // a global state is also called a context
  const initialState = {
    isLoggedIn: false,
    user: null,
  }


  // this function will run once the website loads to login the user from session
  useEffect(() => {
    loadUser();
  }, []);
  

  // the dispatcher is like a custom state function manager, to change state according to your rules
  const [state, dispatch] = useReducer(UserReducer, initialState);


  async function loadUser(){
    // get the saved user email from session storage to bring user info from database
    const email = sessionStorage.getItem("login_email");

    const [user, error] = await UserService.getUserInfo(email);


    // the dispatch initiates a state change for loading the user from API
    // you give as args an object with the type of action, and the data to use while changing
    if(!error) dispatch({ type: "LOAD_USER", payload: user });
    else console.log(error);
  }


  async function loginUser(data){
    const [user, error] = await UserService.loginUser(data);


    if(!error) dispatch({ type: "LOGIN_USER", payload: user });
    else alert(error);
  }


  async function registerUser(data){
    const [user, error] = await UserService.registerUser(data);


    if(!error) dispatch({ type: "REGISTER_USER", payload: user });
    else alert(error);
  }


  async function logoutUser(){
    dispatch({ type: "LOGOUT_USER" });
  }


  // here is the structure of how the global state wraps the react app, so we can access 
  // the values and functions all over using useContext hook.
  return (
    <UserContext.Provider value={{
      isLoggedIn: state.isLoggedIn,
      user: state.user,

      loginUser,
      registerUser,
      logoutUser,
    }}>
      {children}
    </UserContext.Provider>
  )
}


// the reducer defines how each action manipulates the user state
function UserReducer(state, action){
  switch(action.type){
    case "LOGIN_USER": case "REGISTER_USER": 
      // run a session using the user email
      sessionStorage.setItem("login_email", action.payload.email);
      alert("Successfully logged in! Welcome to our website!");
      
      return {
        isLoggedIn: true,
        user: action.payload,
      }


    case "LOAD_USER":
      console.log(`session loaded! successfully logged in as ${action.payload.email}`);
      return {
        isLoggedIn: true,
        user: action.payload,
      }
   
      
    case "LOGOUT_USER":
      sessionStorage.removeItem("login_email");
      alert("Successfully logged out!");
      return {
        isLoggedIn: false,
        user: null,
      } 


    default: 
      return state;
  }
}