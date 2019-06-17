/// <reference types="Cypress" />
import{myV4RPage} from './pages/v4r.js'

context('09_Page_Object', () => {
    it('Count wallpapers', () => {
        myV4RPage.visitv4rPage()
        myV4RPage.countWallpapers(40)
    })

    it('Contact dealer', () => {
        myV4RPage.contactDealer();
    })
})  