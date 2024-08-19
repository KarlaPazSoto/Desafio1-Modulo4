import React, { useState } from 'react'
import '../../assets/css/navbar.css'
import { formatoCLP } from '../../assets/utils/utils';
import Cart from '../Cart';

const Navbar = () => {
  const total = 0;
  const [token, setToken] = useState(false);
  console.log(total);
  
  return (
    <>
    <nav className="navbar navbar-expand-lg  p-0">
  <div className="container-fluid p-2 bg-dark">
    <a className="navbar-brand text-light" href="#">Mamma Mia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <div className='containerNavItems'>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link border border-light rounded text-light m-2" aria-current="page" href="#">🍕Home</a>
            </li>
            {token ? (
              <>
              <li className="nav-item">
              <a className="nav-link border border-light rounded text-light m-2" href="#">🔓Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border border-light rounded text-light m-2" href="#">🔒Logout</a>
            </li>
              </>
            ) : (
              <>
              <li className="nav-item">
              <a className="nav-link border border-light rounded text-light m-2" href="#">🔐Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border border-light rounded text-light m-2" href="#">🔐Register</a>
            </li>
              </>
            )}   
          </ul>
        </div>
        <div className='navbar-nav'>
          <li className="nav-item">
            <a className="nav-link border border-info rounded text-info " href="#">🛒Total: {formatoCLP(total)}</a>
          </li> 
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar