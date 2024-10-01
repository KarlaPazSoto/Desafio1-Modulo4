import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const Profile = () => {

  const {userProfile, profile, handleLogout} = useContext(UserContext);

  useEffect(() => {
    userProfile();
  }, [userProfile]);

  return (
    <div className='text-center'>
        <h1>Mi Perfil</h1>
        {profile ? (
        <p>Email: {profile.email}</p>
      ) : (
        <p>Cargando perfil...</p> 
      )}
        <Link to={'/login'}><button onClick={handleLogout} className="btn btn-dark m-3">Cerrar Sesión</button></Link>
    </div>
  )
}

export default Profile