import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { formatoCLP } from '../assets/utils/utils';
import { PizzaContext } from '../contexts/PizzaContext';

const Pizza = () => {
  const { id } = useParams();
  const { pizzaUnica, fetchPizzaUnica } = useContext(PizzaContext);

  useEffect(() => {
    fetchPizzaUnica(id); 
  }, [id, fetchPizzaUnica]);

  const precioFormateado = pizzaUnica.price !== undefined ? formatoCLP(pizzaUnica.price) : 'Precio no disponible';

  return (
    <>
      <div className="card col-md-3 p-0 m-3">
        <div className="containerCartaImagen">
          <img src={pizzaUnica.img} className="card-img-top cartaImagen" alt={pizzaUnica.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{pizzaUnica.name}</h5>
          <hr />
          <p className="text-center">{pizzaUnica.desc}</p>
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
    </>
  );
};

export default Pizza;
