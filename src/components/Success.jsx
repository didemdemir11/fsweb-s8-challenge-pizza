import React from 'react'
import logo from '/Assets/Iteration-1-assets/logo.svg'
import Footer from './Footer'
export default function Success({orderData,errorMessage}) {
  const calculateTotal = () => {
    if(!orderData) return 0;
    const basePrice = orderData.size === 'Küçük' ? 20 : orderData.size === 'Orta' ? 30 : 40;
    const toppingCost = orderData.toppings.length * 5;
    return (basePrice + toppingCost) * orderData.quantity;
  }
  if(errorMessage){
    return <div className='error-message'>{errorMessage}</div>
  }
  if(!orderData) {
    return <div>Sipariş verisi bulunamadı.</div>
  }
  return (
   <>
   <div className='end-page'>
      <img src={logo} alt="Teknolojik Yemekler" className='logo' />
      <p className="sub-heading-1">lezzetin yolda</p>
      <h1 className='main-heading'> SİPARİŞİNİZ ALINDI!</h1>
    </div>
    <div>
      <h2>Siparişiniz Onaylandı!</h2>
      <p>İsim: {orderData.name}</p>
      <p>Boyut: {orderData.size}</p>
      <p>Hamur: {orderData.thickness}</p>
      <p>Ek Malzemeler: {orderData.toppings.join(', ')}</p>
      <p>Adet: {orderData.quantity}</p>
      <p>Toplam Fiyat: {calculateTotal()}</p>
    </div>
    <Footer/>
   </>
    
  )
}
