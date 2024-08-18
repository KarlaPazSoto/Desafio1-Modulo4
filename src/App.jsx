import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import home from './components/home/Home'
import Footer from "./components/footer/Footer";
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

import GridHome from './components/GridHome';
import Cart from './components/Cart';
import Carro from './components/Carro';


function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <>
      <Navbar/>
      <GridHome/>
      {/* <Home/> */}
      {/* <RegisterPage 
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      {/* <LoginPage
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      {/* <Cart/> */}
      <Carro/>
      <Footer/>
    </>
  )
}

export default App
