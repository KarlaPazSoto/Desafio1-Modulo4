import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { formatoCLP } from '../../assets/utils/utils';
import '../navbar/navbar.css'
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {

  const [token, setToken] = useState(true);


  const {total} = useContext(CartContext);

  const handleLogout = () => {
    setToken(false);
  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg  p-0">
    <div className="container-fluid p-2 bg-dark">
    <Link to="/" className="navbar-brand text-decoration-none text-light">Mamma Mia</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <div className='containerNavItems'>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><button type="button" className="btn btn-dark border-light m-1">🍕Home</button></Link>
            </li>
            {token ? (
              <>
              <li className="nav-item">
                <Link to="/profile"><button type="button" className="btn btn-dark border-light m-1">🔓Profile</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/"><button type="button" className="btn btn-dark border-light m-1" onClick={handleLogout}>🔒Logout</button></Link>
              </li>
              </>
            ) : (
              <>
              <li className="nav-item">
                <Link to="/login"><button type="button" className="btn btn-dark border-light m-1">🔐Login</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/register"><button type="button" className="btn btn-dark border-light m-1">🔐Register</button></Link>
              </li>
              </>
            )}   
          </ul>
        </div>
        <div >
          <ul className='navbar-nav'>

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