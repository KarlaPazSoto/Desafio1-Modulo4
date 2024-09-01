import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home2 from './views/home/Home2';
import LoginPage from './views/login/LoginPage';
import RegisterPage from './views/register/RegisterPage';
import Cart from './views/cart/Cart'
import NotFound from './views/notFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pizza from './views/Pizza';


function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [cart, setCart] = useState([])

  const handleAddToCart = (pizza) => {
    setCart((agregados) => {
      const disponible = agregados.find(item => item.id === pizza.id);
      const carroNuevo = disponible
        ? agregados.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...agregados, { ...pizza, quantity: 1 }];
      return carroNuevo;
    });
  };

  return (
    <>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home2 onAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
          <Route path='/pizza/p001' element={<Pizza/>}/>
          <Route path='/login' element={<LoginPage dataForm={dataForm} setDataForm={setDataForm}/>}/>
          <Route path='/register' element={<RegisterPage dataForm={dataForm} setDataForm={setDataForm}/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
