import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RegisterPage from './components/register/RegisterPage';
import LoginPage from './components/login/LoginPage';


function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <>
      <Navbar/>
      <RegisterPage 
      dataForm={dataForm}
      setDataForm={setDataForm}
      />
      <LoginPage
      dataForm={dataForm}
      setDataForm={setDataForm}
      />
      <Home/>
      <Footer/>
    </>
  )
}

export default App
