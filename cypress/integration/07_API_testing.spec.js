/// <reference types="Cypress" />

context('07_API_testing', () => {
    it('Test GET API call', () => {
        cy.request({
            method: 'GET',
            url: 'https://my.ducati.com/.well-known/auth-configuration'
        }).then((response) => {
            expect(response.body).to.have.property('Url', 'https://my.ducati.com')
        })
    })
})  