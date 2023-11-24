import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserState from './state/UserState';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

import Navbar from './components/Navbar';
import Copyright from './components/Copyright';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Footer from './components/Footer';


/**
 * the UserState wraps the components that would use its properties in the app 
 * like the normal react component
 */
function App() {
  return (
    <UserState>
      <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acc/login" element={<Login />} />
          <Route path="/acc/register" element={<Register />} />
          <Route path="/acc/profile" element={<Profile />} />
        </Routes>
        
        <Footer />
        <Copyright />

      </BrowserRouter>
    </UserState>
  );
}

export default App;
