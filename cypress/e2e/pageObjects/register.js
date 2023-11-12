/// <reference types="Cypress" />

//const { should } = require("chai");

class RegistrationPage{

    static loadRegPage(){
        //cy.visit('https://codenboxautomationlab.com/practice')
        cy.visit(Cypress.env('baseUrl')+"/registration-form/")
        cy.url().should('include', 'form')

    }

    static getFirstName(firstName){
        cy.get('#nf-field-17').type(firstName, {delay:50}).should('have.value', firstName) 
    }

    static getLasttName(lastName){
        cy.get('#nf-field-18').type(lastName, {delay:50}).should('have.value', lastName) 
    }

    static getEmail(email){
        cy.get('#nf-field-19').type(email, {delay:50}).should('have.value', email) 
    }

    static selectDropdown(){
        cy.get('#nf-field-22').select('Selenium Automation').should('have.value', 'selenium-automation')
    }

    static selectCheckbox(){
        cy.get('#nf-label-class-field-23-0').click({force:true})
           
    }

    static submitForm(){
        cy.get('input[id="nf-field-15"]').click({force:true}).wait(8000)
        cy.get('div[class="nf-response-msg"] p').invoke('text').then((text1)=>{
            expect(text1).to.include('Thank you')
        })
    }


}

export default RegistrationPage ;
    