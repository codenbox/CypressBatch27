/// <reference types="Cypress" />

describe('login test scenarios', function () {
        it.skip('Define invalid login function', function(){
            cy.visit('https://codenboxautomationlab.com/wp-login.php')
            cy.login('noName', '1234567')

            cy.get('#login_error').should('contain', 'Error')
        })


        it('validate child tab', ()=> {

            cy.visit('https://the-internet.herokuapp.com/windows')
           // cy.get('.example > a').invoke('removeAttr','target').click();
            cy.contains('Click Here').invoke('removeAttr', 'target').click()
            cy.url().should('include', 'internet');
            cy.wait(4000);
            cy.go('back');
        })


})

