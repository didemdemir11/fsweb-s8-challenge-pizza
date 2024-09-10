import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Assets/Iteration-1-assets/logo.svg'

export default function Home() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={logo} alt="Teknolojik Yemekler" className='logo' />
        <h1 className='main-heading'>KOD ACIKTIRIR PİZZA,DOYURUR</h1>
         <Link to="/siparis-formu"> 
          <button className='order-button'>Acıktım</button>
        </Link>
      </div>
     
    </div>
  )
}

