/// <reference types="Cypress" />

context('03_variables_and_aliases', () => {
    before('Prepare test data', () => {
        // Creating alias
        cy.fixture('ducati_user.json').as('ducatiUser')
    })

    it('Verify name of the user after loging in', () => {
        // Using alias
        cy.get('@ducatiUser').then(user => {
            cy.login(user.email, user.password);
        })

        // Creating an alias
        cy.get('body > div.page-wrapper > div > div.d-topbar-header.-gradient > div > div.right > div.d-login.-logged > div.logged > a > div.name > span')
            .invoke('text')
            .as('nameOfLoggedInUser')
            
        // Using Alias
        cy.get('@nameOfLoggedInUser').then(text => {
            expect(text).to.be.equal('Cypress')
        })
    })
})  