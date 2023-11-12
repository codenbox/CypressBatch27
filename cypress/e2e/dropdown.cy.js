/// <reference types="Cypress" />
describe('My dropdown function scenarios', function () {

    it('visit to the application', () => {
     // cy.visit("https://codenboxautomationlab.com/practice/")
     cy.visit(Cypress.env('baseUrl')+"/practice/")
      cy.url().should('include', 'codenbox')

    })

    it('validate static drop-down options', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    })

    it('validate dynamic drop-down options', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Canada') {
              // wrap this element so we can
              cy.wrap($el).click()
            } else {
              cy.log("didn't find the match")
            }

        })
        
    })



   



})