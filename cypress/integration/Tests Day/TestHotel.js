describe("Log in", function () {
    it("Sing in", function () {
        cy.visit("https://travel.yandex.ru/")
        cy.get('[href="/hotels/"]').click()
        cy.get('.JgvTz').type('Дубай')
        cy.get('.EW8x1 > :nth-child(2)').click()
        cy.get('.monthsList > :nth-child(5)').click()
        cy.get(':nth-child(5) > .PFU5n > :nth-child(2) > :nth-child(1)').click()
        cy.get(':nth-child(5) > .PFU5n > :nth-child(3) > :nth-child(3)').click()
        cy.get('.vHqxX').click()
        cy.visit("https://travel.yandex.ru/hotels/dubai/burdzh-el-arab/?adults=2&checkinDate=2022-08-01&checkoutDate=2022-08-10&childrenAges=&searchPagePollingId=a829fb4f8662ea5eac7dff41d7e2bef1-0-newsearch&seed=portal-hotels-search")
        cy.scrollTo(0,1500)
    })
})