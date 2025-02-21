describe('template spec', () => {


       let emailFake= 'locked_out_user'
       let emailok = 'standard_user'
       let MP ='secret_sauce'
       let lastname='Touama'
       let firstName = 'louaila'
      let postalCcode = '59100'


      beforeEach(() => {
        cy.visit('/'); 
      });
  

  it('Connex', () => {

        cy.get('#user-name').type(emailFake)
        cy.get('#password').type(MP)

        cy.get('#login-button').click()
       cy.get('h3[data-test="error"]').contains('Sorry, this user has been locked out.').should('be.visible')

  }) 


  it('Selection', () => {

    cy.get('#user-name').type(emailok)
    cy.get('#password').type(MP)
    cy.get('#login-button').click()

    cy.get('.product_sort_container').select('Price (high to low)') 
   
    
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
      
  });


  it('addPrice1', () => {

    cy.get('#user-name').type(emailok)
    cy.get('#password').type(MP)

    cy.get('#login-button').click()
    cy.get('.product_sort_container').select('Price (high to low)') 
   
    
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()

    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()
  });

  it('form', () => {

    cy.get('#user-name').type(emailok)
    cy.get('#password').type(MP)
    cy.get('#login-button').click()


    cy.get('.product_sort_container').select('Price (high to low)') 
   
    
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('#shopping_cart_container').click()
    cy.get('.btn_action.checkout_button').click()



    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastname)
    cy.get('#postal-code').type(postalCcode);
    cy.get('.btn_primary.cart_button').click()


  cy.get('.btn_action.cart_button').click();

   
  

  });
})






