import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <h1>Mi Perfil</h1>
        <p>correousuario@ejemplo.cl</p>
        <Link to={'/login'}><button className="btn btn-dark m-3">Cerrar Sesión</button></Link>
    </div>
  )
}

export default Profile