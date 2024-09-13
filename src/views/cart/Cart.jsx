import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatoCLP } from '../../assets/utils/utils';
import '../cart/cart.css';
import { UserContext } from '../../contexts/UserContext';

const Cart = () => {
  const { cart, total, formatoCLP, handleIncrease, handleDecrease, handleRemove, handleCheckout } = useContext(CartContext);
  const {token} = useContext(UserContext)

  return (
    <div className="container">
      <h2 className="text-center">Tu Carrito</h2>
      <div className="container-fluid">
        {cart.map((pizza) => (
          <ul key={pizza.id}>
            <li>
              <div className='containerLi d-flex'>
                <div className='d-flex align-items-center col-4'>
                  <div className='col-4 text-center' onClick={() => handleDecrease(pizza.id)}>
                    <button type="button" className="btn btn-dark">-</button>
                  </div>
                  <div className='col-4'>
                    <img src={pizza.img} alt={pizza.name} />
                  </div>
                  <div className='col-4 text-center' onClick={() => handleIncrease(pizza.id)}>
                    <button type="button" className="btn btn-dark">+</button>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-evenly col-6'>
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
                  <button type="button" className="btn btn-dark" onClick={() => handleRemove(pizza.id)}>🗑️</button>
                </div>
              </div>
            </li>
            <hr />
          </ul>
        ))}
      </div>
      <div className="text-center mt-4">
        <h4>Total: {formatoCLP(total)}</h4>
        <button className="btn btn-dark m-3" onClick={handleCheckout} disabled={!token} >Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
