/// <reference types="Cypress"
import PracticePage from './pageObjects/practice'
import RegistrationPage from './pageObjects/register'

describe('My test suite', function(){
    beforeEach(function(){
        //runs once before all the test cases executes
        //setup test data. seed or reset database
        PracticePage.loadHomePage()

    })


    it('validate test cases for practice page', function(){
       // PracticePage.loadHomePage()
        PracticePage.getTitle()
        PracticePage.getDropDownOption()
       // PracticePage.clickonRegForm()

    })

    it('validate test cases for registration page', function(){
        PracticePage.clickonRegForm()
        RegistrationPage.getFirstName("john");
        RegistrationPage.getLasttName("heck");
        RegistrationPage.getEmail("john@test.com");
        RegistrationPage.selectDropdown();
        RegistrationPage.selectCheckbox();
        RegistrationPage.submitForm();

        
    })

})