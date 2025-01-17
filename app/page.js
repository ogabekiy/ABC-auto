import React from 'react'
import Zayafka from './components/Zayafka'
import BankPartnyor from './components/BankPartnyor'
import NamDoveryayut from './components/NamDoveryayut'
import Otziviy from './components/Otziviy'
import Company from './components/Company'
import AvtoSalon from './components/AvtoSalon'
import Blog from './components/Blog'

export default function page() {
  return (
    <div>
      <Zayafka/>
      <BankPartnyor/>
      <NamDoveryayut/>
      <Otziviy/>
      <Company/>
      <Blog/>
      <AvtoSalon/>
    </div>
  )
}
