describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")
        cy.contains("Войти").click()
        cy.get('input[type="text"]').type('ashotID')
        cy.contains("Войти").click()
        cy.get('#passp-field-passwd').type('1234567')
        cy.contains("Войти").click()
        cy.get('.PreviousStepButton').click()
        cy.get('.PreviousStepButton').click()

    })
})