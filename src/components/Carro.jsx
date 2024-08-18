import { useState } from 'react';
import data from '../assets/utils/data.json';
import { formatoCLP } from '../assets/utils/utils';
import TarjetasPizza from './TarjetasPizza';

const Carro = () => {
  const [carro, setCarro] = useState([]);
  const [pizzaSelect, setPizzaSelect] = useState(null);

  const handleAddToCart = (pizza) => {
    setCarro((agregados) => {
      const disponible = agregados.find(item => item.id === pizza.id);

      const nuevoCarro = disponible
        ? agregados.map(item => 
            item.id === pizza.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
          )
        : [...agregados, { ...pizza, quantity: 1 }];

      return nuevoCarro;
    });
  };

  const handleIncrease = (id) => {
    setCarro(agregados => agregados.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCarro(agregados => agregados.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemove = (id) => {
    setCarro(agregados => agregados.filter(item => item.id !== id));
  };

  const handlePagar = () => {
    alert('Botón de pago aún no implementado');
  };

  const handleViewDetails = (pizza) => {
    setPizzaSelect(pizza);

  };

  const total = carro.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <>
      <TarjetasPizza pizzas={data} onAddToCart={handleAddToCart}  onViewDetails={handleViewDetails}/>

      <div>
      {pizzaSelect && (
        <div className='infoPizzas'>
          <div className='botonesMasMenos'>
            <div>
              <button 
                type="button" 
                className="btn btn-dark" 
                onClick={() => handleDecrease(pizzaSelect.id)}
              >
                -
              </button>
            </div>
            <div>
              <img src={pizzaSelect.img} alt={pizzaSelect.name} />
            </div>
            <div>
              <button 
                type="button" 
                className="btn btn-dark" 
                onClick={() => handleIncrease(pizzaSelect.id)}
              >
                +
              </button>
            </div>
          </div>

          <div className='infoPizzas'>
            <div>
              <p><strong>{pizzaSelect.name}</strong></p>
            </div>
            <div>
              <p>{pizzaSelect.desc}</p>
            </div>
            <div>
              <ul>
                {pizzaSelect.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>{formatoCLP(pizzaSelect.price)}</p>
            </div>
            <div className="botonRemove">
              <button 
                type="button" 
                className="btn btn-dark" 
                onClick={() => handleRemove(pizzaSelect.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

      <h3>Total: {formatoCLP(total)}</h3>
    </>
  );
};

export default Carro;
