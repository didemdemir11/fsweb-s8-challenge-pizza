import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Assets/Iteration-1-assets/logo.svg'

export default function Home() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={logo} alt="Teknolojik Yemekler" className='logo' />
        <h1 className='main-heading'>KOD ACIKTIRIR <br/> PİZZA, DOYURUR</h1>
         <Link to="/siparis-formu"> 
          <button className='order-button'>ACIKTIM</button>
        </Link>
      </div>
      <section className='body-content'>
        <nav className='menu-icons'>
          <ul>
            <li><img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="Kore"/><a href="#">YENİ! Kore</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza"/><a href="#">Pizza</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger"/><a href="#">Burger</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/4.svg" alt="Kızartmalar"/><a href="#">Kızartmalar</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food"/><a href="#">Fast Food</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek"/><a href="#">Gazlı İçecek</a></li>
          </ul>
        </nav>
        <div className='announcement box'>
          <div className='annoucement content'>
            <img src="/Assets/Iteration-2-aseets/cta/kart-1.png" alt="Lezzetus"/>
            <h2>Özel Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <Link to="/siparis-formu"> 
              <button className='sub-order-button'>SİPARİŞ VER</button>
            </Link>
          </div>
          <div className='annoucement content'>
            <img src="/Assets/Iteration-2-aseets/cta/kart-2.png" alt="Hackathlon"/>
            <h2>Hackathlon Burger Menü</h2>
            <Link to="/siparis-formu"> 
              <button className='sub-order-button'>SİPARİŞ VER</button>
            </Link>
          </div>
          <div className='annoucement content'>
            <img src="/Assets/Iteration-2-aseets/cta/kart-3.png" alt="npmKurye"/>
            <h2>Özel Lezzetus</h2>
            <p> <span>Çoooook</span> hızlı npm gibi kurye</p>
            <Link to="/siparis-formu"> 
              <button className='sub-order-button'>SİPARİŞ VER</button>
            </Link>
          </div>
          <div className="sub-heading">
            <p className="italic-text">en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>

          <nav className='eng-menu-icons'>
          <ul>
            <li><img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="Ramen"/><a href="#">Ramen</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza"/><a href="#">Pizza</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger"/><a href="#">Burger</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/4.svg" alt="French Fries"/><a href="#">French Fries</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food"/><a href="#">Fast Food</a></li>
            <li><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Soft Drink"/><a href="#">Soft Drink</a></li>
          </ul>
        </nav>
        <div className="menu-item container">
          <div className="menu-item-content">
            <img src="\assets\Iteration-2-aseets\pictures\food-1.png" alt="pizza1"/>
            <p className="menu-item-heading">Terminal Pizza</p>
            <p className="menu-alt-item"> 
              <span className="rating-label">4.9</span>
              <span className="comment-label">(200)</span>
              <span className="price-label">60₺</span>
            </p>
          </div>
          <div className="menu-item-content">
            <img src="\assets\Iteration-2-aseets\pictures\food-2.png" alt="pizza2"/>
            <p className="menu-item-heading">Position Absolute Acı Pizza</p>
            <p className="menu-alt-item"> 
              <span className="rating-label">4.9</span>
             <span className="comment-label">(200)</span>
             <span className="price-label">60₺</span>
            </p>
          </div>
          <div className="menu-item-content">
            <img src="\assets\Iteration-2-aseets\pictures\food-3.png" alt="hamburger1"/>
            <p className="menu-item-heading">useEffect Tavuklu Burger</p>
            <p className="menu-alt-item"> 
              <span className="rating-label">4.9</span>
              <span className="comment-label">(200)</span>
              <span className="price-label">60₺</span>
            </p>
          </div>
        </div>
        </div>
      </section>
     
    </div>
  )
}

