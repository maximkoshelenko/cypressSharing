/// <reference types="Cypress" />

context('05_configuration_env_variables', () => {
    //  npx cypress run --browser chrome --spec /Users/max/NodeJSProjects/cypress-maks-roma/cypress/integration/05_configuration_env_variables.spec.jsnpm install --save-dev cypress-cucumber-preprocessor
    //  npx cypress run --spec cypress/integration/06_Ducati.feature
    it('Use base URL for visit site from console', () => {
        cy.visit('/', {
            failOnStatusCode: false
        })
    })

    it('Work with env variables from console', () => {
        cy.log(Cypress.env())
    })
})  