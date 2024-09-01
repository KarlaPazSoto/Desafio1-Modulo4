import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { formatoCLP } from '../../assets/utils/utils';
import '../navbar/navbar.css'

const Navbar = () => {
  const total = 0;
  const [token, setToken] = useState(false);
  console.log(total);
  
  return (
    <>
    <nav className="navbar navbar-expand-lg  p-0">
    <div className="container-fluid p-2 bg-dark">
    <Link to="/">Mamma Mia</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <div className='containerNavItems'>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><button type="button" className="btn btn-dark border-light">🍕Home</button></Link>
            </li>
            {token ? (
              <>
              <li className="nav-item">
                <Link to="/"><button type="button" className="btn btn-dark border-light">🔓Profile</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/"><button type="button" className="btn btn-dark border-light">🔒Logout</button></Link>
              </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                <Link to="/login"><button type="button" className="btn btn-dark border-light">🔐Login</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/register"><button type="button" className="btn btn-dark border-light">🔐Register</button></Link>
              </li>
              </>
            )}   
          </ul>
        </div>
        <div className='navbar-nav'>
          <ul>
            <li className="nav-item">
              <Link to="/cart"><button type="button" className="btn btn-dark border-light">🛒Total: {formatoCLP(total)}</button></Link>
            </li>  
          </ul> 
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar