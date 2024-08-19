import { useState } from 'react';
import TarjetasPizza from './TarjetasPizza';
import data from '../assets/utils/data.json';
import { formatoCLP } from '../assets/utils/utils';
import '../assets/css/cart.css'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleAddToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      const newCart = existingPizza
        ? prevCart.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevCart, { ...pizza, quantity: 1 }];
      return newCart;
    });
  };

  const handleIncrease = (id) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  const handleCheckout = () => {
    alert('Funcionalidad de pago aún no implementada.');
  };

  const handleViewDetails = (pizza) => {
    setSelectedPizza(pizza);
  };

  return (
    <div className="container">
      <TarjetasPizza pizzas={data} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
      {selectedPizza && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedPizza.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedPizza(null)}></button>
              </div>
              <div className="modal-body">
                <img src={selectedPizza.img} className="img-fluid" alt={selectedPizza.name} />
                <p><strong>Descripción:</strong> {selectedPizza.desc}</p>
                <p><strong>Ingredientes:</strong> {selectedPizza.ingredients.join(', ')}</p>
                <p><strong>Precio:</strong> {formatoCLP(selectedPizza.price)}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedPizza(null)}>Cerrar</button>
                <button type="button" className="btn btn-dark" onClick={() => { handleAddToCart(selectedPizza); setSelectedPizza(null); }}>Añadir al carrito</button>
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
                            <button type="button" class="btn btn-dark">-</button>
                            </div>
                            <div className='col-4'>
                            <img src={pizza.img}  alt="" />
                            </div>
                            <div className='col-4 text-center' onClick={()=> handleIncrease(pizza.id)}>
                            <button type="button" class="btn btn-dark">+</button>
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
                            <button type="button" class="btn btn-dark" onClick={()=> handleRemove(pizza.id)}>🗑️</button>
                          </div>
                        </div>
                      </li>
                      <hr />
                    </ul>
        ))}
      </div>
      <div className="text-center mt-4">
        <h4>Total: {formatoCLP(totalAmount)}</h4>
        <button className="btn btn-dark m-3" onClick={handleCheckout}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;