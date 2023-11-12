/// <reference types="Cypress" />
describe('My first test function scenario', function () {

  it('visit to the application', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    //create cssSelector for Openwindow button & click
    //cy.get('#openwindow').click();
    cy.get('input[value="radio2"]').check().should('be.checked')
    cy.get('div[id="search-2"] input[placeholder="Search..."]').type("automation").should('have.value', 'automation')
    //cy.get('label[for="Automation"]').check();
    cy.get('#checkBoxOption1').check().should('be.checked');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    //check multiple checkbox and do assertion
    // cy.get('#checkBoxOption1').check().should('be.checked');
    // cy.get('#checkBoxOption2').check().should('be.checked');
    //check multiple checkbox using common attribute and do assertion
    cy.get('input[type="checkbox"]').check(['option1', 'option2'])
    

    
  


    
    

    
  })




})