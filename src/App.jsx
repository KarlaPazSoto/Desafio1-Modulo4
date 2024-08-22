import { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import Home2 from './components/home/Home2';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';
// import Cart from './components/Cart';
import Footer from "./components/footer/Footer";
import Pizza from './components/Pizza';




function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });




  return (
    <>
      <Navbar/>
      <Home2/>
      <Pizza/>
      {/* <RegisterPage
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      {/* <LoginPage
      dataForm={dataForm}
      setDataForm={setDataForm}
      /> */}
      {/* <Cart/> */}
      <Footer/>
    </>
  )
}

export default App
