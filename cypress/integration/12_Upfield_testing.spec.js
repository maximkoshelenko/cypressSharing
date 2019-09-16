/// <reference types="Cypress" />

context('Network request', () => {
    it.only('Response ', () => {
        cy.visit('https://testbecel.upfield-digital.com/en/products')
        cy.get('.product-card')
            .each(innaCard => {
                // Check number of children of the card
                cy.get(innaCard)
                    .children()
                    .should('have.length', 3)
                // check image presents
                cy.get(innaCard)
                    .children('.product-card-img')
                    .should('have.length', 1)

                cy.get(innaCard)
                    .children('h5')
                    .should('have.class', 'product-card-title')

                cy.get(innaCard)
                    .children('div')
                    .should('have.class', 'btn')
                    .should('have.class', 'btn-medium')
                    .should('have.class', 'field-text')

            })
    })
});
