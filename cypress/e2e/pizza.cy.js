describe('Pizza SiparisFormu Testleri', () => {
    it('Ana sayfayı ziyaret etmeli ve doğru içeriği görmeli', ()=> {
      
      cy.visit('http://localhost:5173/'); 
      cy.get('img.logo').should('be.visible');

      cy.get('h1.main-heading').should('be.visible').and('contain', 'KOD ACIKTIRIR  PİZZA, DOYURUR');
  
      cy.get('button.order-button').should('be.visible').and('contain', 'ACIKTIM');
      
    
    });
  });

 