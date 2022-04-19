describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")
        cy.get(':nth-child(3) > .JgvTz').type('Москва')
        cy.get('.datePickerTrigger_type_startDate').click()
        cy.get('.monthsList > :nth-child(2)').click()
        cy.get(':nth-child(2) > .PFU5n > :nth-child(3) > :nth-child(2)').click()
        cy.get('.datePickerTrigger_type_endDate').click()
        cy.get(':nth-child(2) > .PFU5n > :nth-child(4) > :nth-child(5)').click()
        cy.get('.vHqxX').click()
    })
})