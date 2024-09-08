import { createContext, useEffect, useState } from "react";
import { formatoCLP } from "../assets/utils/utils";

export const TarjetasPizzaContext = createContext();

export const TarjetasPizzaProvider = ({children}) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/pizzas');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    return(
        <TarjetasPizzaContext.Provider value={{data}}>
            {children}
        </TarjetasPizzaContext.Provider>
    )
}