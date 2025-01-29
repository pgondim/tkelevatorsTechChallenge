import { texts } from "cypress/fixtures/texts";
import { urls } from "../fixtures/urls";
describe("Brochure content", () => {
  it("T01 Validate Configuração buttom should open configuration steps", () => {
    cy.visit(urls.homePage);
    cy.contains("Configuração").should(
      "have.attr",
      "href",
      texts.linkBtnConfiguracao
    );
    cy.contains("Configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});

describe("Nav", () => {
  it("T02 Validate menu buttom open and close menu content", () => {
    cy.visit(urls.homePage);
    cy.get("#menu-btn").click();
    cy.get("#menu-container").should("be.visible");
    cy.get("#menu-btn").click();
    cy.get("#menu-container").should("not.be.visible");
  });
  it("T03 Validate Share buttom opens share-menu content", () => {
    cy.visit(urls.homePage);
    cy.get("div.nav-links").realClick();
    cy.get("div")
      .should("have.class", "nav-link")
      .and("have.class", "w-sublinks")
      .and("have.class", "active");
  });
  it("T04 Validate Share with LinkedIn", () => {
    cy.visit(urls.homePage);
    cy.getByHref(urls.linkedinShare).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.linkedinShare);
    });
  });
  it("T05 Validate Share with Facebook", () => {
    cy.visit(urls.homePage);
    cy.getByHref(urls.facebookShare).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.facebookShare);
    });
  });
  it("T06 Validate Share with X", () => {
    cy.visit(urls.homePage);
    cy.getByHref(urls.xShare).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.xShare);
    });
  });
  it("T07 Validate Share with clipboard copy", () => {
    cy.visit(urls.homePage);
    cy.get(
      `span[data-link="${urls.dataLink}"]`
    ).realClick();
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.eq(urls.dataLink);
      });
    });
  });
});

describe("Bottom page", () => {
  it("T08 Validate Configuração buttom should open configuration steps", () => {
    cy.visit(urls.homePage);
    cy.scrollTo("bottom");
    cy.get("span.text").contains("Etapas de configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});
