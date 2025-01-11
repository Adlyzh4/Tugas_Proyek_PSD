"use client"
import Cart from '@/src/front-end/Cart'
import Navbar from '@/src/front-end/Navbar'
import React from 'react'
import Hero from '@/src/front-end/Hero'
import Feature from '@/src/front-end/Feature'
import TrendingProduct from '@/src/front-end/TrendingProduct'
import Banner from '@/src/front-end/Banner'
import Footer from '@/src/front-end/footer'

const Home = () => {
  const [showCart, setShowCart] = React.useState(false)


  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero/>
      <Feature/>
      <TrendingProduct/>
      <Banner/>
      <Footer/>
    </main>
  )
}

export default Home