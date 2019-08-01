/// <reference types="Cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Ducati v4r page', () => {
  cy.visit('/ww/en/bikes/panigale/panigale-v4-r', { 
    log: false, 
    failOnStatusCode: false })
})

Then('I see video start playing', () => {
  cy.get('video', { log: false }).should('have.length', 1)
})

Then('I see video start playing1', () => {
  cy.get('video', { log: false }).should('have.length', 0)
})