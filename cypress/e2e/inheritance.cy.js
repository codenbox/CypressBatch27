/// <reference types="Cypress" />

class BasePage{
    static loadPage(){
        cy.visit('https://codenboxautomationlab.com/')
    }

    static waitFor(number){
        cy.wait(number);
    }
}

class HomePage extends BasePage {
    static scrollToBottom(){
        cy.contains('Contact Us').scrollIntoView()
    }

    static scrollToUp(){
        cy.contains('Welcome').scrollIntoView()
    }
}

// let hm=new HomePage();
// hm.loadPage()
// hm.waitFor()
// hm.scrollToBottom()

describe('scroll page Testing', function () {
    beforeEach(function(){
        //runs once before all the test cases executes
        //setup test data. seed or reset database
        HomePage.loadPage();

    })

    after(() => {
        // runs once all tests are done
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
      })

    it('page should scroll down & up', function(){
       // let hm=new HomePage();
    // hm.loadPage()
    // hm.waitFor()
    // hm.scrollToBottom()
    // if methods are static, you can call following className.methodName
    // HomePage.loadPage(); 
       HomePage.scrollToBottom();
    // cy.wait(4000)
      HomePage.waitFor(4000)
      HomePage.scrollToUp();
        
    })

    it ('home page load for 2nd time', function(){
      

    })
      

})



