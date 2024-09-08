import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SearchBar from './Components/SearchBar/SearchBar'
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import FixedButtons from './Components/FixedButtons/FixedButtons';
import Footer from './Components/Footer/Footer';
import MainHome from './Pages/MainHome/MainHome';
import ProductDetails from './Pages/Home/ProductsContent/ProductDetails/ProductDetails';
import WhishList from './Pages/WhishList/WhishList';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SetPassword from './Pages/SetPassword/SetPassword';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetCode from './Pages/ResetCode/ResetCode';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || 
  location.pathname === '/register' ||
  location.pathname === '/setpassword' || 
  location.pathname === '/forgotpassword' || 
  location.pathname === '/resetcode';
  
  return (
    <>
      <div className="relative">
        <FixedButtons />
        <Navbar />
        {!isAuthPage && <SearchBar />}
        <Routes>
          <Route path='/' element={<MainHome/>}/>
          <Route path='/whishlist'element={<WhishList/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/home/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About />} />


          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/setpassword' element={<SetPassword/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/resetcode' element={<ResetCode/>}/>

        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App;
