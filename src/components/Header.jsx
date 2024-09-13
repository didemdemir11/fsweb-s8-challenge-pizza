import React from 'react'
import logo from '/Assets/Iteration-1-assets/logo.svg'

export default function Header() {
  return (
    <header className='header' style={{
      width: '100%',
      height:'138px',
      backgroundColor:'#CE2829',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'0 auto',
      padding:'0'
    }}>
      <img src={logo} alt="Teknolojik Yemekler" className='logo-order' style={{ width: '363px', height: '50px' }}  />
     
    </header>
  )
}
