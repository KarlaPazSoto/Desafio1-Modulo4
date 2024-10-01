import { useContext, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { UserContext} from './contexts/UserContext'
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




function App() { 

  const {user} = useContext(UserContext)

  return (
    <>

      <Navbar/>
        <Routes>
        <Route path='/' element={<Home2/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/profile' element={user.token ? <Profile /> : <Navigate to='/profile'/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
