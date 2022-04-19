describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")
        cy.scrollTo(0,2000)
        cy.get('[href="https://yandex.ru/adv/products/display"]').click()
    })
})