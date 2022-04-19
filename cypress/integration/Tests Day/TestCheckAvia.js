describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")
        cy.get(':nth-child(3) > .JgvTz').type('Москва')//Выбор города
        cy.get('.datePickerTrigger_type_startDate').click()//Выбор даты отбытия
        cy.get('.monthsList > :nth-child(2)').click()//Выбор месяца
        cy.get(':nth-child(2) > .PFU5n > :nth-child(3) > :nth-child(2)').click()//Выбор дня
        cy.get('.datePickerTrigger_type_endDate').click()//Выбор даты возвращения
        cy.get(':nth-child(2) > .PFU5n > :nth-child(4) > :nth-child(5)').click()//Выбор месяца и дня
        cy.get('.vHqxX').click()//Переход на страницу выбора билетов
    })
})