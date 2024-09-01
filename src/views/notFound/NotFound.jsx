import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h1>404 - Página no encontrada</h1>
    <Link to="/">Volver a Inicio</Link>
    </>
  )
}

export default NotFound