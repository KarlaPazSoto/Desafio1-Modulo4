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
            imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
            nombre: 'Napolitana',
            ingredientes: ['Tomate', 'Mozzarella', 'Albahaca'],
            precio: 5950
        },
        {
            imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2a1c6-8c57bc388fab',
            nombre: 'Española',
            ingredientes: ['Mozzarella', 'Gorgonzola', 'Parmesano','Provolone'],
            precio: 6950
        },
        {
            imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040ac54-90f6c31eb3e3',
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