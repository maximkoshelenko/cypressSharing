/// <reference types="Cypress" />

context('08_XHR_testing', () => {
    it('Test XHR response', () => {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/servlet/servlet.loginwidgetcontroller?type=login'
        }).as('myPrecious')

        cy.login('ducaticypress@yopmail.com', 'qazwsx741852');
        
        cy.wait('@myPrecious').then((xhr) => {
            expect(xhr.status).to.eq(200)
            expect(xhr.duration).lessThan(3000)
          })
    })
})  