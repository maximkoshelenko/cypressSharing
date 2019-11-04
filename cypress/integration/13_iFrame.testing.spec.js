/// <reference types="Cypress" />

context('iFrame testing', () => {
    it('Response ', () => {
        cy.visit('https://www.paymentiframe.com/');

            cy.get("iframe[height]").then( $iframe => {
                const $doc = $iframe.contents();
                cy.wrap( $doc.find("#paymentNumber") )
                .type( "1234567812345678")
                .should('have.value', "1234 5678 1234 5678");
            });
    })
});
