import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import RegisterPage from './components/register/RegisterPage'


function App() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <>
      <Navbar/>
      <RegisterPage 
      dataForm={dataForm}
      setDataForm={setDataForm}
      />
      <Home/>
      <Footer/>
    </>
  )
}

export default App
