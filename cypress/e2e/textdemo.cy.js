/// <reference types="Cypress" />
describe('Text function example', function () {
    it('get text using text method option1', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.page-title').invoke('text').then((str1) =>{
            expect(str1).to.eql('Automation Practice')
        })
            })

    })

    it('get text using text method option2', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.page-title').then(function(str2){ 
           cy.log(str2.text())

        })
                
})
