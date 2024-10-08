import { createContext, useContext, useEffect, useState } from "react";
import { formatoCLP } from "../assets/utils/utils";
import { UserContext } from "./UserContext";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const {user} = useContext(UserContext);

    const handleAddToCart = (pizza) => {
      setCart((agregados) => {
        const disponible = agregados.find(item => item.id === pizza.id);
        const carroNuevo = disponible
          ? agregados.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)
          : [...agregados, { ...pizza, quantity: 1 }];
        return carroNuevo;
      });
    };
  
    const handleIncrease = (id) => {
      setCart((agregados) => agregados.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    };
  
    const handleDecrease = (id) => {
      setCart((agregados) => agregados.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0));
    };
  
    const handleRemove = (id) => {
      setCart((agregados) => agregados.filter(item => item.id !== id));
    };

    const handleCheckout = async () => {
        if(!user.token) {
          alert('Debes iniciar sesión.');
          return;
        }

        try{
          const response = await axios.post('http://localhost:5000/api/checkouts',
            {cart}, {
              headers: {
                Authorization: `Bearer ${user.token}`
              },
            }
          );
          if (response.status === 200) {
            alert('Compra exitosa.');
            setCart([]);
          }else{
            alert('Error al procesar la compra.')
          }
        }catch(error) {
          console.error('Error al realizar el checkout.', error);
          alert('Error al realizar la compra. Intente nuevamente.');
        }
      };
  
    useEffect(()=>{
        const totalActualizado = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
        setTotal(totalActualizado);
    }, [cart]);

return(
    <CartContext.Provider value={{ cart, total, formatoCLP, handleAddToCart,handleIncrease, handleDecrease, handleRemove, handleCheckout }}>
        {children}
    </CartContext.Provider>
);

};