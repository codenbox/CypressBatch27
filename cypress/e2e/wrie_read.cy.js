/// <reference types="Cypress" />
describe('My write-read Test Suite', function () {
    it('write on a text file test', function(){
        //create a text file and write on it
        cy.writeFile('sampleFile.txt', 'Hello world\n')
        cy.writeFile('sampleFile.txt', 'I love Cypress', {flag:'a+'})

        //create json file in fixture folder and write on it
        cy.writeFile('cypress\\fixtures\\example.json', {
            userName:'David',
            email:'info@codenbox.com',
            password:123456
        })

    })

    it('test to read text file', function(){
        //read the same text file
        cy.readFile('sampleFile.txt').should('exist').and('contain', 'Hello')

        //read from json file. just load the example file from fixture
        cy.fixture('example').then ((profileinfo)=>{
            expect(profileinfo.userName).to.eq('David')
        })
    })




})