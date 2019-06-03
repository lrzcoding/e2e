describe("test todolist", () => {
    it("user search one good then add to shooping car", () => {
        cy.visit("http://127.0.0.1:8080/");
        cy.wait(1000);
        cy.get("#app > div > form > input[type=text]").type("running");
        cy.get("#app > div > form > button").click();
        cy.get("#app > div > form > input[type=text]").type("reading");
        cy.get("#app > div > form > button").click();
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1)").should('have.text', 'running')
        cy.get("#app > div > table > tbody > tr:nth-child(2) > td:nth-child(1)").should('have.text', 'reading')
        cy.get("#app > div > table > tbody > tr:nth-child(2) > td:nth-child(1)").contains('reading')
        cy.wait(5000);
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)").click();
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input").clear().type("playing");
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)").click();
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1)").should('have.text', 'playing')

        cy.get("#app > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > button.delete-btn").click();
        cy.get("#app > div > table > tbody").should("have.length","1")
    });
    after(() => {
      cy.clearCookies();
    });
  });