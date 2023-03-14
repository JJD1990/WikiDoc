import React from 'react';
import logo from '../images/logo.png';

// This is the navbar component, scope to add pages in the future. 

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='passfort logo' width="50%" height="50%"/>
          <h2 className='text-white'>WikiDoc</h2>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;