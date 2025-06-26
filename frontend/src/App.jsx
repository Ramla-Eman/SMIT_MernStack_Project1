import React from 'react'
import ProductList from './components/ProductList'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <Hero/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App