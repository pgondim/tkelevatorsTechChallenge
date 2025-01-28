import { urls } from "../fixtures/urls";
describe("Brochure content", () => {
  it("T01 Validate Configuração buttom should open configuration steps", () => {
    cy.visit(urls.homePage);
    cy.contains("Configuração").should(
      "have.attr",
      "href",
      "configuration-steps-2/"
    );
    cy.contains("Configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});

describe("Nav", () => {
  it("T01 Validate menu buttom open and close menu content", () => {
    cy.visit(urls.homePage);
    cy.get("#menu-btn").click();
    cy.get("#menu-container").should("be.visible");
    cy.get("#menu-btn").click();
    cy.get("#menu-container").should("not.be.visible");
  });
  it.only("T01 Validate Share buttom opens share-menu content", () => {
    cy.visit(urls.homePage);
    cy.get("div.nav-links").realClick();
    cy.get("div")
      .should("have.class", "nav-link")
      .and("have.class", "w-sublinks")
      .and("have.class", "active");
  });
  it("T01 Validate Share with LinkedIn", () => {
    cy.visit(urls.homePage);
    cy.get(`a[href="${urls.linkedinShare}"]`).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.linkedinShare);
    });
  });
  it("T01 Validate Share with Facebook", () => {
    cy.visit(urls.homePage);
    cy.get(`a[href="${urls.facebookShare}"]`).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.facebookShare);
    });
  });
  it("T01 Validate Share with X", () => {
    cy.visit(urls.homePage);
    cy.get(`a[href="${urls.xShare}"]`).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.xShare);
    });
  });
  it("T01 Validate Share with clipboard copy", () => {
    cy.visit(urls.homePage);
    cy.get(
      `span[data-link="https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br"]`
    ).realClick();
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.eq("https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br");
      });
    });
  });
});

describe("Bottom page", () => {
  it("TXX Validate Configuração buttom should open configuration steps", () => {
    cy.visit(urls.homePage);
    cy.scrollTo("bottom");
    //cy.contains('Etapas de configuração').should('have.attr', 'href', 'configuration-steps-2/');
    cy.get("span.text").contains("Etapas de configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});
