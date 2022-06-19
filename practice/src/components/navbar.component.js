import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import './css/Main.css';

function Navbar({ user }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);
  const logOut = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <>
      <nav>
        {(toggleMenu || screenWidth > 700) && (
          <ul className='list'>
            <li className='items'>
              <Link to='/'>Home</Link>
            </li>
            {user && (
              <>
                <li className='items'>{user.username}</li>
                <li onClick={logOut} className='items'>
                  LogOut
                </li>
              </>
            )}
            {!user && (
              <>
                <li className='items'>
                  <Link to='/login'>Login</Link>
                </li>
                <li className='items'>
                  <Link to='/register'>Register</Link>
                </li>
              </>
            )}
          </ul>
        )}

        <button onClick={toggleNav} className='btn'>
          <Hamburger
            size={20}
            duration={0.8}
            toggled={isOpen}
            toggle={setOpen}
            label='Show menu'
          />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
