
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>

  <Navbar />
  <Routes>
    <Route path='/' element={<Shop />} />
    <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
    <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
    <Route path='/product/:productId' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<LoginSignup />} />
  </Routes>


  
  <Footer/>
</BrowserRouter>
      

      
    </div>
  )
}

export default App
