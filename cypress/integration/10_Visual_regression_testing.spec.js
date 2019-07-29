/// <reference types="Cypress" />

context('10_Visual_regression_testing', () => {
    it('Visual', () => {
        cy.visit('/');
        cy.compareSnapshot('home')
    })
})  