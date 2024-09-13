import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Assets/Iteration-1-assets/logo.svg'
import Footer from './Footer'
import {Container,Row,Col, Button} from 'reactstrap'

export default function Home() {
  return (
    <>
    <Container fluid className='hero'>
      <Row className='hero-content'>
        <Col xs="12" className="text-center">      
         <img src={logo} alt="Teknolojik Yemekler" className='logo' />
         <p className="sub-heading-1">fırsatı kaçırma</p>
         <h1 className='main-heading'>KOD ACIKTIRIR <br/> PİZZA, DOYURUR</h1>
         <Link to="/siparis-formu"> 
            <Button className='aciktim-button'>ACIKTIM</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  
    <Container className='body-content'>
        <Row className='menu-icons'>
          
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="Kore"/>
            <a href="#">YENİ! Kore</a></Col>
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza"/><a href="#">Pizza</a></Col>
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger"/><a href="#">Burger</a></Col>
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Kızartmalar"/><a href="#">Kızartmalar</a></Col>
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food"/><a href="#">Fast Food</a></Col>
            <Col xs="6" md="auto" className="menu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Gazlı İçecek"/><a href="#">Gazlı İçecek</a></Col>
      
        </Row>

       <div className='announcement container'>
          <Row className='announcement-content'>
            <Col md="6" className="announcement-box box-1">
              <h2 className='announcement-title-lezzetus'>Özel <br/>Lezzetus</h2>
              <p className="announcement-desc">Position: Absolute Acı Burger</p>
              <Link to="/siparis-formu"> 
              <Button className='sub-order-button'>SİPARİŞ VER</Button>
              </Link>
            </Col>

            <Col md="6" className="announcement-wrapper">
              <div className="announcement-box box-2">
              <h2 className='announcement-title-hackathlon'>Hackathlon Burger Menü</h2>
              <Link to="/siparis-formu"> 
              <Button className='sub-order-button'>SİPARİŞ VER</Button>
              </Link>
              </div>
              <div className="announcement-box box-3">
              <p className="announcement-desc special-desc"><span className='highlighted'>Çoooook</span> hızlı npm gibi kurye</p>
              <Link to="/siparis-formu"> 
                <Button className='sub-order-button'>SİPARİŞ VER</Button>
              </Link>
              </div>
            </Col>
          </Row>
       </div>
       <div className="sub-heading-2">
            <p className="italic-text">en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>

        <Row className='eng-menu-icons'>
          
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/1.svg" alt="Kore"/>
          <a href="#">Ramen</a></Col>
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza"/><a href="#">Pizza</a></Col>
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/3.svg" alt="Burger"/><a href="#">Burger</a></Col>
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="French Fries"/><a href="#">French</a></Col>
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/5.svg" alt="Fast Food"/><a href="#">Fast Food</a></Col>
          <Col xs="6" md="auto" className="engmenu-icon-item"><img src="/Assets/Iteration-2-aseets/icons/6.svg" alt="Soft Drink"/><a href="#">Soft Drink</a></Col>
    
      </Row>
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
       
      </Container>
      
      <Footer/>
    </>
  )
}

