import React, { useEffect, useState } from 'react'
import { formatoCLP } from '../assets/utils/utils';

const Pizza = () => {
    const [pizzaUnica, setPizzaUnica] = useState({});

    useEffect (() => {
        const fetchPizzaUnica = async () => {
            try{
                const response = await fetch ('http://localhost:5000/api/pizzas/p001');
                const data = await response.json();
                console.log(data);
                
                setPizzaUnica(data);

                console.log(pizzaUnica);
            }catch (error) {
                console.error(error);
            }
        }
        fetchPizzaUnica();
    },[]);

    const precioFormateado = pizzaUnica.price !== undefined ? formatoCLP(pizzaUnica.price) : 'Precio no disponible';
    
  return (
    <>
    <div>
    <div  className="card col-md-3 p-0 m-3">
            <div className="containerCartaImagen">
            <img src={pizzaUnica.img} className="card-img-top cartaImagen" alt={pizzaUnica.name} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{pizzaUnica.name}</h5>
              <hr />
              <p className='text-center'>{pizzaUnica.desc}</p>
              <hr />
              <p className="text-center">Ingredientes: </p>
              <ul>
              {pizzaUnica.ingredients && pizzaUnica.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <hr />
              <p className="card-text text-center"><strong>Precio: {precioFormateado}</strong></p>
              <hr />
              
            </div>
          </div>
    </div>
    </>
  )
}

export default Pizza