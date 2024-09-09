import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='hero'>
      <h1>Teknolojik Yemekler</h1>
      <Link to="/siparis-formu"> 
        <button className='order-button'>Sipariş Ver</button>
      </Link>
    </div>
  )
}

