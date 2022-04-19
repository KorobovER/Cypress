describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")
        cy.get('[href="/trains/"]').click()
        cy.get('[href="/hotels/"]').click()
        cy.get('[href="/buses/"]').click()
        cy.get('[href="/tours/"]').click()
    })
})