describe('Pizza SiparisFormu Testleri', () => {
    it('Ana sayfayı ziyaret etmeli ve doğru içeriği görmeli', ()=> {
      
      cy.visit('http://localhost:5173/'); 
      cy.get('img.logo').should('be.visible');

      cy.get('h1.main-heading').should('be.visible').and('contain', 'KOD ACIKTIRIR  PİZZA, DOYURUR');
  
      cy.get('button.order-button').should('be.visible').and('contain', 'ACIKTIM');
      
    
    });
  });
describe('Sipariş formu testleri', () => {
  it('İsim alanına metin girmeli ve kontrol etmeli',()=>{
    cy.visit('http://localhost:5173/siparis-formu'); 
    cy.get('input[name="name"]').type('Didem Demir');
    cy.get('input[name="name"]').should('have.value','Didem Demir');  
  });
  it('Birden fazla malzeme seçmeli',()=>{
    cy.visit('http://localhost:5173/siparis-formu'); 
    cy.get('input[name="toppings"]').check(['Pepperoni','Sucuk','Kabak','Mısır']);
    cy.get('input[name="toppings"]').each(($checkbox)=> {
      if($checkbox.prop('checked')) {
        cy.wrap($checkbox).should('be.checked');
      }
    })
  });
  it('Formu seçimleri yapıp butonla göndermeli',()=> {
    cy.visit('http://localhost:5173/siparis-formu'); 
    cy.get('input[name="name"]').type('Didem Demir');
    cy.get('input[type="radio"][value="Büyük"]').check();
    cy.get('select[name="thickness"]').select('İnce Hamur');
    cy.get('input[name="toppings"]').check(['Pepperoni','Sucuk','Kabak','Mısır']);
    cy.get('input[name="quantity"]').clear().type('2');
    cy.get('button[type="submit"]').should('not.be.disabled').click();
    cy.url().should('include','/siparis-onay')
  });
  it('Sipariş butonu ilk başta disabled olmalı', ()=>{
    cy.visit('http://localhost:5173/siparis-formu'); 
    cy.get('button[type="submit"]').should('be.disabled');
  })
})
 