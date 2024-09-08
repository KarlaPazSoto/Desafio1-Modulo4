import React, { useContext, useEffect, useState } from 'react';
import { formatoCLP } from '../../assets/utils/utils';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { TarjetasPizzaContext } from '../../contexts/TarjetasPizzaContext';

const TarjetasPizza2 = () => {
  const {data} = useContext(TarjetasPizzaContext)
  const {handleAddToCart} = useContext(CartContext)
  


  return (
    <div className='container-fluid justify-content-evenly row'>
      {data.map((pizza) => (
        <div key={pizza.id} className="card col-md-3 p-0 m-3">
          <div className="containerCartaImagen">
            <img src={pizza.img} className="card-img-top cartaImagen" alt={pizza.name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <hr />
            
            <p className="text-center">Ingredientes:</p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <hr />
            <p className="card-text text-center"><strong>Precio: {formatoCLP(pizza.price)}</strong></p>
            <hr />
            <div className="d-flex justify-content-between">
              <Link to={`/pizza/${pizza.id}`}><button className="btn btn-dark">
                Ver más 👀
              </button></Link>
              <button className="btn btn-dark" onClick={() => handleAddToCart(pizza)}>Añadir 🛒</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetasPizza2;
