// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
compareSnapshotCommand();

Cypress.Commands.add("login", (email, password) => { 
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.visit('https://www.ducati.com/ww/en/home', {
        failOnStatusCode: false
    })
    // cy.get('.body > .cta').click()
    cy.get('.unlogged').contains('MyDucati').click()
    cy.get('.login').contains('Login').click()
    cy.get('#sfid-username').type(email)
    cy.get('#sfid-password').type(password)
    cy.get('#sfid-submit').click()
    cy.get('.logout').contains('Logout')
})
