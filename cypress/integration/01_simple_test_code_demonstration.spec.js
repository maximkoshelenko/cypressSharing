/// <reference types="Cypress" />

context('01_simple_test_code_demonstration', () => {
    it('Main site visiting and bike families counting', () => {
        cy.visit('https://www.ducati.com/ww/en/home', {
            failOnStatusCode: false
        })
        cy.get('.link').contains('Models').click()
        cy.get('ul li .thumb').should('have.length', 9)
    })
})  