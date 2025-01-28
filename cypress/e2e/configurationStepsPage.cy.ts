import { urls } from "../fixtures/urls";
describe("Brochure content", () => {
  it("T01 Validate title", () => {
    cy.visit(urls.configPage);
    cy.contains("h2.title", "Configure a tela do seu terminal AGILE").should(
      "exist"
    );
  });
});

describe("Media player", () => {
  it("T01 Validate start/stop video", () => {
    cy.visit(urls.configPage);
    cy.get("div.video-box").first().click();
    cy.get("div.video-box.playing").should("exist");
    cy.wait(1000);
    cy.get("div.video-box.playing").first().click();
    cy.get("div.video-box.playing").should("not.exist");
  });
  it("T01 Validate maximize vídeo", () => {
    cy.visit(urls.configPage);
    cy.get("span.fullscreen-btn-icon").first().realClick();
  });
  it.only("T01 Validate mute/unmute vídeo", () => {
    cy.visit(urls.configPage);
    cy.get("div.video-box").first().click();
    //cy.wait(1000); //uncomment for human validation
    cy.get("div.video-bar-sound").first().realClick();
    //cy.wait(1000); //uncomment for human validation
    cy.get("div.video-bar-sound").first().realClick();
    //cy.wait(1000); //uncomment for human validation
    cy.get("div.video-box.playing").first().realClick();
  });
});
