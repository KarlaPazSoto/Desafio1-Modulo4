import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const Profile = () => {

  const {handleLogout} = useContext(UserContext)

  return (
    <div>
        <h1>Mi Perfil</h1>
        <p>correousuario@ejemplo.cl</p>
        <Link to={'/login'}><button onClick={handleLogout} className="btn btn-dark m-3">Cerrar Sesión</button></Link>
    </div>
  )
}

export default Profile