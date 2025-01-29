import { urls } from "../fixtures/urls";
import { texts } from "cypress/fixtures/texts";
describe("Main content", () => {
  it("T13 Validate center text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-center").should("have.text", texts.tkelevatorsLink);
    cy.get(`div.text-center > a`).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.tkelevators);
    });
  });
  it("T14 Validate disclamer text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-bottom2-in").within(() => {
      cy.get("p").should("have.length", 3);
      cy.textValidation(cy.get("p").eq(0), texts.disclaimer.title);
      cy.textValidation(cy.get("p").eq(1), "");
      cy.textValidation(cy.get("p").eq(2), texts.disclaimer.text);
    });
  });
  it("T15 Validate adress text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-bottom1").within(() => {
      cy.get("p").should("have.length", 5);
      cy.get("p").eq(0).should("have.text", texts.tkelevatorsName);
      cy.get("p").eq(1).should("have.text", texts.adress.street);
      cy.get("p").eq(2).should("have.text", texts.adress.neighborhood);
      cy.get("p").eq(3).should("have.text", texts.adress.city);
      cy.get("p").eq(4).should("have.text", texts.adress.country);
    });
  });
  it("T16 Validate back to configuration buttom", () => {
    cy.visit(urls.backOverPage);
    cy.scrollTo("bottom");
    cy.contains("span", "Etapas de configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});
