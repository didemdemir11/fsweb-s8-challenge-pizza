import React from 'react'
import logo from '/Assets/Iteration-1-assets/logo.svg'
import Footer from './Footer'
import Header from './Header';
export default function Success({orderData,errorMessage}) {

  const calculateTotal = () => {
    if(!orderData) return { total: 0, toppingCost: 0 };
    const basePrice = orderData.size === 'Küçük' ? 20 : orderData.size === 'Orta' ? 30 : 40;
    const toppingCost = orderData.toppings.length * 5;
    const total = (basePrice + toppingCost)*orderData.quantity
    return {total,toppingCost};
  }
   const {total,toppingCost}=calculateTotal();
  if(errorMessage){
    return <div className='error-message'>{errorMessage}</div>
  }
  if(!orderData) {
    return <div>Sipariş verisi bulunamadı.</div>
  }
  return (
   <>
   <div className='end-page'>
   <Header />
      <p className="sub-heading-1">lezzetin yolda</p>
      <h1 className='main-heading'> SİPARİŞ ALINDI!</h1>
      <div >
      <h2>Position Absolute Acı Pizza</h2>
      <div className='order-data-summary'>
        <p>Boyut: {orderData.size}</p>
        <p>Hamur: {orderData.thickness}</p>
        <p>Ek Malzemeler: {orderData.toppings.join(', ')}</p>
      </div>
      
      <div className='order-summary'>
        <h4>Sipariş Toplamı</h4>
        <p>Seçimler: {toppingCost}₺</p>
        <p>Toplam: {total}₺</p>
      </div>
    </div>
    </div>
    <Footer/>
   </>
    
  )
}
