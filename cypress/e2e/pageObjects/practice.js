/// <reference types="Cypress" />

class PracticePage{

    static loadHomePage(){
        //cy.visit('https://codenboxautomationlab.com/practice')
        cy.visit(Cypress.env('baseUrl')+"/practice/")
        cy.url().should('include', 'practice')

    }

    static getTitle(){
        cy.get('.page-title').invoke('text').then((textTitle) =>{
            expect(textTitle).to.eq('Automation Practice')
        })
    }

    static getDropDownOption(){
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    }

    static clickonRegForm(){
        cy.contains('Registration Form').click({force:true})
        cy.url().should('include', 'registration')
    }

}

export default PracticePage;

