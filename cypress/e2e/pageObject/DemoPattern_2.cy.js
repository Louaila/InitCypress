//controlleur 

import  {Login, addPrice1, ConnexF,formulaire} from "./login";


// IMPORTE CETTE CLASSE la de ce dossier 


describe('Cypress POM Test Suite', function () {


    beforeEach(() => {
        cy.visit('/');
        cy.fixture('example').as('userData');
      });

        it('Login avec un email et mot de passe valide', function()  {
            
            // tu crée un constante pour recuperer tout les elements dans objet Login de la page login.js
            const loginpage = new Login();
            // Login cest un objet / j'instancie de la classe
        
            loginpage.navigate();
          
            // standard_user =  valeur du paramettre qu'on a mis dans la fonction email
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();
            cy.url().should('be.equal','https://www.saucedemo.com/v1/inventory.html');


        });


        it('Login avec un email non valide et mot de passe valide', function()  {
        
            const loginFpage = new Login();
            // j'instancie de la classe
    
        loginFpage.navigate();
        loginFpage.email('locked_out_user');
        loginFpage.password('secret_sauce');
        loginFpage.submit();
        // cy.url().should('be.equal','https://www.saucedemo.com/v1/');

        const connexp = new ConnexF();

        


         });



         it('ajouter Panier', function () {

            const loginpage = new Login();
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();

            const addpanier = new addPrice1();
            addpanier.addPrice();
        
            

          });

        it('remplir form', function() {
            const loginpage = new Login();
            loginpage.email('standard_user');
            loginpage.password('secret_sauce');
            loginpage.submit();
            const addpanier = new addPrice1();
            addpanier.addPrice();
        
            const form = new formulaire();
            form.form(this.userData.user.firstName, this.userData.user.lastname, this.userData.user.postalCcode);
              
          });
        
        });
      
      

              





