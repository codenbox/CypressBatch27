/// <reference types="Cypress" />

class BasePage{
    static loadPage(){
       // cy.visit('https://codenboxautomationlab.com/')
       cy.visit(Cypress.env('baseUrl'))
       
    }
    static waitFor(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.contains('Contact Us').scrollIntoView()
    }

    static scrollToUp(){
        cy.get('.has-vivid-cyan-blue-color > span > strong').scrollIntoView()
    }

}

describe('scroll the page Testing', function () {
    before(function(){
        //runs once before all the test cases executes
        //setup test data. seed or reset database
        HomePage.loadPage();

    })
    after(function(){
        //runs once after all the test cases executed
        //test cleanup
        //clean cookies or local memory 
        cy.clearAllCookies()
        cy.clearLocalStorage()
    })

    beforeEach(function(){
        //runs before each it block/test cases   

    })

    afterEach(function(){
        //runs after it blocks or after each test cases
        //test cleanup
        //clean cookies or local memory 
    })
    
    it('page should scroll down & up ', () => {
       // HomePage.loadPage();
        HomePage.scrollToBottom();
        HomePage.waitFor(3000);
        HomePage.scrollToUp();
    
    })

})