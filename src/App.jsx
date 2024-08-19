import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Footer from "./components/footer/Footer";
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart';


function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });




  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <RegisterPage 
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      {/* <LoginPage
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
