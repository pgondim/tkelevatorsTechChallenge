import { urls } from "../fixtures/urls";
describe("Main content", () => {
  it("T01 Validate center text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-center").should("have.text", "www.TKELEVATOR.BR");
    cy.get(`div.text-center > a`).then((link) => {
      const url = link.prop("href");
      expect(url).to.eq(urls.tkelevators);
    });
  });
  it("T01 Validate disclamer text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-bottom2-in").within(() => {
      cy.get("p").should("have.length", 3);
      cy.get("p").eq(0).should("have.text", "   Tutorial do AGILE, 2023, V1  ");
      cy.get("p").eq(1).should("have.text", "");
      cy.get("p")
        .eq(2)
        .should(
          "have.text",
          "As informações contidas neste folheto somente serão válidas se forem expressamente confirmadas por escrito. Reprodução e armazenamento somente com a permissão da TK Elevator. As cores, opções e especificações estão sujeitas a alterações. Todas as opções de design de cabina ilustradas neste folheto são apenas para fins ilustrativos. As amostras mostradas podem variar do original em termos de cor e material. Os desenhos não estão em escala. Seu contato na TK Elevator terá prazer em fornecer amostras de materiais reais. "
        );
    });
  });
  it("T01 Validate adress text", () => {
    cy.visit(urls.backOverPage);
    cy.get("div.text-bottom1").within(() => {
      cy.get("p").should("have.length", 5);
      cy.get("p")
        .eq(0)
        .should("have.text", "TK Elevadores S.A. (Headquarters)");
      cy.get("p").eq(1).should("have.text", "Rua Santa Maria, 1000");
      cy.get("p").eq(2).should("have.text", "Bairro Columbia City");
      cy.get("p").eq(3).should("have.text", "Guaíba – Rio Grande do Sul");
      cy.get("p").eq(4).should("have.text", "Brazil");
    });
  });
  it.only("T01 Validate back to configuration buttom", () => {
    cy.visit(urls.backOverPage);
    cy.scrollTo('bottom');
    cy.contains("span","Etapas de configuração").click();
    cy.url().should("eq", urls.configPage);
  });
});