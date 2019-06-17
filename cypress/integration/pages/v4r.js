/// <reference types="Cypress" />

export class v4rPage {

    // constructor () {
    //     cy.get('.swiper-slide').as('wallpapers')
    // }

    visitv4rPage() {
        cy.visit('/ww/en/bikes/panigale/panigale-v4-r', { failOnStatusCode: false })
    }

    countWallpapers(expectedQuantity) {
        cy.get('.swiper-slide')
        .should('have.length', expectedQuantity)
    }

    contactDealer() {
        cy.visit('https://contact.ducati.com/ww/en/light/contact/model-info')
        cy.get('#scramblerFormSubmitId')
            .click()
    }
}

export const myV4RPage = new v4rPage();