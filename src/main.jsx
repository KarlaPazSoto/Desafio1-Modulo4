import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./contexts/PizzaContext.jsx";
import { TarjetasPizzaProvider } from "./contexts/TarjetasPizzaContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <UserProvider>
      <CartProvider>
      <TarjetasPizzaProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
      </TarjetasPizzaProvider>
      </CartProvider>
      </UserProvider>
      
    </StrictMode>
  </BrowserRouter>
);
