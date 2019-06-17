/// <reference types="Cypress" />

context('04_configuration', () => {

    it('Use base URL for visit site', () => {
        cy.visit('/', {
            failOnStatusCode: false
        })
    })

    it('Work with env variables', () => {
            cy.log(Cypress.env())
    })
})  