import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
  return (
    <header className='header'>
      <h1>Teknolojik Yemekler</h1>
      {location.pathname === '/siparis-formu' && (
        <nav>
            <span>Ana Sayfa</span> &gt; <span>Sipariş Oluştur</span>
        </nav>
      )}
    </header>
  )
}
