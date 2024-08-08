import React from 'react'
import Header from './header/Header'
import CardPizza from './cardPizza/CardPizza'
import napolitana from '../../assets/img/napolitana.jpg'
import margarita from '../../assets/img/margarita.jpg'
import pepperoni from '../../assets/img/pepperoni.jpg'
import './home.css'

const Home = () => {
    const pizzas = [
        {
            imagen: napolitana,
            nombre: 'Napolitana',
            ingredientes: ['Tomate', 'Mozzarella', 'Albahaca'],
            precio: 5950
        },
        {
            imagen: margarita ,
            nombre: 'Margarita',
            ingredientes: ['Mozzarella', 'Albahaca'],
            precio: 6950
        },
        {
            imagen: pepperoni,
            nombre: 'Pepperoni',
            ingredientes: ['Orégano', 'Mozzarella', 'Pepperoni'],
            precio: 6950
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