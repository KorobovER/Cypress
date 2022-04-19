describe("Log in", function (){
    it("Sing in", function (){
        cy.visit("https://travel.yandex.ru/")//Вход на сайт
        cy.contains("Войти").click()//Переход на страницу авторизации
        cy.get('input[type="text"]').type('ashotID')//Ввод ЯндексАйДи
        cy.contains("Войти").click()//Переход на страницу ввода пароля
        cy.get('#passp-field-passwd').type('1234567')//Ввод пароля
        cy.contains("Войти").click()//Кнопка войти
        cy.get('.PreviousStepButton').click()//Возвращение на главную страницу
        cy.get('.PreviousStepButton').click()

    })
})