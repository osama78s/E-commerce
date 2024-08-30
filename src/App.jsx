import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SearchBar from './Components/SearchBar/SearchBar'
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import FixedButtons from './Components/FixedButtons/FixedButtons';

const App = () => {

  return (
    <div className="container py-[25px] relative">
      <FixedButtons />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App