import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar.component';
import Landing from './components/landing.component';
import Login from './components/login.component';
import Register from './components/register.component';
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      console.log(user);
      setUser({ user });
    } catch (error) {}
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar user={user.user} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
