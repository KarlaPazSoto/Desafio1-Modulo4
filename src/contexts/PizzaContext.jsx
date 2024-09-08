import { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaUnica, setPizzaUnica] = useState({});

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPizzas();
  }, []);

  const fetchPizzaUnica = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizzaUnica(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PizzaContext.Provider value={{ pizzas, pizzaUnica, fetchPizzaUnica }}>
      {children}
    </PizzaContext.Provider>
  );
};
