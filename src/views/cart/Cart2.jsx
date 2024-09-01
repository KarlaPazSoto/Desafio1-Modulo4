import { useState } from 'react';
import { formatoCLP } from '../../assets/utils/utils';
import TarjetasPizza from '../../components/cards/TarjetasPizza';
import data from '../../assets/utils/data.json';
import '../cart/cart.css'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [pizzaSelect, setPizzaSelect] = useState(null);

  const handleAddToCart = (pizza) => {
    setCart(agregados => {
      const disponible = agregados.find(item => item.id === pizza.id);
      const carroNuevo = disponible
        ? agregados.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...agregados, { ...pizza, quantity: 1 }];
      return carroNuevo;
    });
  };

  const handleIncrease = (id) => {
    setCart(agregados => agregados.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCart(agregados => agregados.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemove = (id) => {
    setCart(agregados => agregados.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  const handleCheckout = () => {
    alert('Funcionalidad de pago aún no implementada.');
  };

  const handleViewDetails = (pizza) => {
    setPizzaSelect(pizza);
  };

  return (
    <div className="container">
      <TarjetasPizza pizzas={data} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
      {pizzaSelect && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{pizzaSelect.name}</h5>
                <button type="button" className="btn-close" onClick={() => setPizzaSelect(null)}></button>
              </div>
              <div className="modal-body">
                <img src={pizzaSelect.img} className="img-fluid" alt={pizzaSelect.name} />
                <p><strong>Descripción:</strong> {pizzaSelect.desc}</p>
                <p><strong>Ingredientes:</strong> {pizzaSelect.ingredients.join(', ')}</p>
                <p><strong>Precio:</strong> {formatoCLP(pizzaSelect.price)}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setPizzaSelect(null)}>Cerrar</button>
                <button type="button" className="btn btn-dark" onClick={() => { handleAddToCart(pizzaSelect); setSelectedPizza(null); }}>Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-center">Tu Carrito</h2>
      <div className="container-fluid">
        {cart.map((pizza) => (
                      <ul>
                      <li key={pizza.id}>
                        <div className='containerLi d-flex '>
                          <div className='d-flex align-items-center col-4'>
                            <div className='col-4 text-center' onClick={()=> handleDecrease(pizza.id)}>
                            <button type="button" className="btn btn-dark">-</button>
                            </div>
                            <div className='col-4'>
                            <img src={pizza.img}  alt="" />
                            </div>
                            <div className='col-4 text-center' onClick={()=> handleIncrease(pizza.id)}>
                            <button type="button" className="btn btn-dark">+</button>
                            </div>
                          </div>
                          <div className='d-flex d-flex align-items-center justify-content-evenly col-6'>
                            <div className='col-4'>
                              <p>{pizza.name}</p>   
                            </div>
                            <div className='col-4'>
                              <p>{formatoCLP(pizza.price)}</p>
                            </div>
                            <div className='col-4'>
                              <p>{pizza.quantity}</p>
                            </div>
                          </div>
                          <div className='col-2 d-flex align-items-center justify-content-center'>
                            <button type="button" className="btn btn-dark" onClick={()=> handleRemove(pizza.id)}>🗑️</button>
                          </div>
                        </div>
                      </li>
                      <hr />
                    </ul>
        ))}
      </div>
      <div className="text-center mt-4">
        <h4>Total: {formatoCLP(total)}</h4>
        <button className="btn btn-dark m-3" onClick={handleCheckout}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;