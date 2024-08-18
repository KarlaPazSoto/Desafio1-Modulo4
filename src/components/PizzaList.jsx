import React from 'react';
import TarjetasPizza from './/TarjetasPizza'
import data from '../assets/utils/data.json';
import { formatoCLP } from '../assets/utils/utils'

const PizzaList = ({ onAddToCart }) => {
  return (
    <div className="container">
      <h2 className="text-center">Pizzas Disponibles</h2>
      <div className="row">
        {data.map(pizza => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
            <CardPizza
              imagen={pizza.img}
              nombre={pizza.name}
              ingredientes={pizza.ingredients}
              precio={pizza.price}
              onAddToCart={() => onAddToCart(pizza)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;