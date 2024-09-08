import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { TarjetasPizzaProvider } from './contexts/TarjetasPizzaContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home2 from './views/home/Home2';
import Pizza from './views/Pizza';
import LoginPage from './views/login/LoginPage';
import RegisterPage from './views/register/RegisterPage';
import Profile from './views/profile/Profile';
import Cart from './views/cart/Cart'
import NotFound from './views/notFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import { PizzaProvider } from './contexts/PizzaContext';



function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

 

  return (
    <>
      <CartProvider>
      <TarjetasPizzaProvider>
      <PizzaProvider>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home2/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/login' element={<LoginPage dataForm={dataForm} setDataForm={setDataForm}/>}/>
          <Route path='/register' element={<RegisterPage dataForm={dataForm} setDataForm={setDataForm}/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
      </PizzaProvider>
      </TarjetasPizzaProvider>
      </CartProvider>
    </>
  )
}

export default App
