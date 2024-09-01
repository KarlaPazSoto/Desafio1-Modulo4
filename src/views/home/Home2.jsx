import React from 'react'
import Header from './header/Header'
import TarjetasPizza2 from '../../components/cards/TarjetasPizza2'
import Pizza from '../Pizza'
import { Route, Routes } from 'react-router-dom'

const Home2 = ({onAddToCart}) => {
  return (
    <>
    <Header/>
    <TarjetasPizza2 onAddToCart={onAddToCart}/>

    </>
  )
}

export default Home2