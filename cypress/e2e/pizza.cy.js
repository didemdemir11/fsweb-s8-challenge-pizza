describe('Pizza SiparisFormu Testleri', () => {
    it('Ana sayfayı ziyaret etmeli ve doğru içeriği görmeli', ()=> {
      cy.visit('/');
      cy.url().should('include', '/');
      cy.get('img.logo').should('be.visible')
    
    });
  });

 