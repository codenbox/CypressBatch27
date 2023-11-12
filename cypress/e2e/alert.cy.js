/// <reference types="Cypress" />
describe('Test for pop-up scenarios', function () {
    
    it('validate alert function ', () => { 
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
            
          })
    
    })

    it('validate confirmation function', () => { 
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str1) => {
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
            
          })

    })
        


})