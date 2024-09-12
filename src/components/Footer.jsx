import React from "react";

export default function Footer() {
    return (
    <footer className="footer">
        <div className="company-info">
         <img src="/Assets/Iteration-2-aseets/footer/logo-footer.svg" className="logo" alt="Pizza Mobil Logo"/>
         <div className="company-info-address">
            <img src="/Assets/Iteration-2-aseets/footer/icons/icon-1.png"/> 
            <a>341 Londonderry Road, Istanbul Türkiye</a>
          </div>
         <div className="company-info-email">
           <img src="/Assets/Iteration-2-aseets/footer/icons/icon-2.png"/> 
           <a>aciktim@teknolojikyemekler.com</a>
         </div>
         <div className="company-info-phone">
          <img src="/Assets/Iteration-2-aseets/footer/icons/icon-3.png"/> 
              <a>+90 216 123 45 67</a>
          </div>
      </div>
      <div >
        <nav className="quick-menu">
          <p>Hot Menu</p>
          <ul>
            <a href="">Terminal Pizza</a>
            <a href="">5 Kişilik Hackathlon Pizza </a>
            <a href="">useEffect Tavuklu Pizza</a>
            <a href="">Beyaz Console Frosty</a>
            <a href="">Testler Geçti Mutlu Burger</a>
            <a href="">Position Absolute Acı Burger</a>
          </ul>
        </nav>
      </div>
      <div className="social-media container">
        <p>Instagram</p>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-0.png" alt="insta-photo1"/>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-1.png" alt="insta-photo2"/>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-2.png" alt="insta-photo3"/>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-3.png" alt="insta-photo4"/>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-4.png" alt="insta-photo5"/>
        <img src="/Assets/Iteration-2-aseets/footer/insta/li-5.png" alt="insta-photo6"/>
      </div>
      <div className="closing-label">
        <p>© 2023 Teknolojik Yemekler. <span> <a href="#" className="fa fa-twitter"></a> </span></p>
      </div> 
    </footer>
    )
}