import React from 'react'
import Header from './header/Header'
import CardPizza from './cardPizza/CardPizza'
import './home.css'
import napolitana from '../../assets/img/napolitana.jpg'
import margarita from '../../assets/img/margarita.jpg'
import pepperoni from '../../assets/img/pepperoni.jpg'

const Home = () => {
    const pizzas = [
        {
            imagen: napolitana,
            nombre: 'Napolitana',
            ingredientes: ['Tomate', 'Mozzarella', 'Albahaca'],
            precio: 12500
        },
        {
            imagen: margarita,
            nombre: 'Margarita',
            ingredientes: ['Mozzarella', 'Albahaca'],
            precio: 10000
        },
        {
            imagen: pepperoni,
            nombre: 'Pepperoni',
            ingredientes: ['Orégano', 'Mozzarella', 'Pepperoni'],
            precio: 14000
        }
    ]
    return (
        
        <>
        <Header/>
        <div className='sectionContainer container-fluid'>
            <div className='row cardContainer'>
            {pizzas.map((pizza, index) => (
            <div className='col-md-4' key={index}>
                    <CardPizza 
                    imagen={pizza.imagen}
                    nombre={pizza.nombre}
                    ingredientes={pizza.ingredientes}
                    precio={pizza.precio}
                    />
            </div>
        ))}
            </div>
        </div>
        </>

    )
}

export default Home