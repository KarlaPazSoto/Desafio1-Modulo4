import { createContext, useContext, useEffect, useState } from "react";
import { formatoCLP } from "../assets/utils/utils";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const {token} = useContext(UserContext);

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

    const handleCheckout = () => {
        if(token) {
          alert('Pago aceptado')
        }else{
          alert('Pago no permitido, debes inciar sesión')
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