import { useContext } from "react";
import UserContext from "./UserContext";


// this custom hook, once called anywhere in the app, gives us access to all the
// exported variables and functions of the user global state.
export const useUserState = () => useContext(UserContext);
