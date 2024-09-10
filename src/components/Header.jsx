import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '/Assets/Iteration-1-assets/logo.svg'

export default function Header() {
    const location = useLocation();
  return (
    <header className='header'>
      <img src={logo} alt="Teknolojik Yemekler" className='logo-order' />
      {location.pathname === '/siparis-formu' && (
        <nav>
            <span className="breadcrumb-light">Ana Sayfa</span> &gt;
            <span className="breadcrumb-dark">Sipariş Oluştur</span>
        </nav>
      )}
    </header>
  )
}
