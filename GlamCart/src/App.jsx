
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
<<<<<<< HEAD
import ShopCategory from './Pages/ShopCategory'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

import LoginSignup from './Pages/LoginSignup'
=======
import LoginSignup from './Pages/loginSignup'
import Footer from './Components/Footer/Footer'

>>>>>>> 3dc884752c0068c7428689586a30eac04ae1a18d
const App = () => {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
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
</BrowserRouter>
=======
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
>>>>>>> 3dc884752c0068c7428689586a30eac04ae1a18d
      
    </div>
  )
}

export default App
