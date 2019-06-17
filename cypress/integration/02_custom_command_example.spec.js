/// <reference types="Cypress" />

context('02_custom_command', () => {
    it('Login without custom command', () => {
        cy.visit('https://www.ducati.com/ww/en/home', {
            failOnStatusCode: false
        })
        cy.get('.unlogged').contains('MyDucati').click()
        cy.get('.login').contains('Login').click()
        cy.get('#sfid-username').type('ducaticypress@yopmail.com')
        cy.get('#sfid-password').type('qazwsx741852')
        cy.get('#sfid-submit').click()
        cy.get('.logout').contains('Logout')
    })

    it('Login with custom command', () => {
        cy.login('ducaticypress@yopmail.com', 'qazwsx741852');
    })
})  