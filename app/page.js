import React from 'react'
import Zayafka from './components/Zayafka'
import BankPartnyor from './components/BankPartnyor'
import NamDoveryayut from './components/NamDoveryayut'
import Otziviy from './components/Otziviy'
import Company from './components/Company'
import AvtoSalon from './components/AvtoSalon'
import Blog from './components/Blog'
import Nashi from './components/Nashi'
import Cart from './components/Avtomobile'
import Map from './components/Map'
import Hero from './components/Hero'
import CarSelector from './components/CarSelector'
import Cpespredl from './components/Cpespredl'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Hero/>
      <CarSelector/>
      <Cart/>
      <Nashi/>
      <Cpespredl/>
      <Zayafka/>
      <BankPartnyor/>
      <NamDoveryayut/>
      <Otziviy/>
      <Company/>
      <Blog/>
      <AvtoSalon/>
      <Map/>
      <Footer/>
    </div>
  )
}