describe("Testing fetching weather forecast", () => {
  it("Search weather for valid city", () => {
    cy.visit("/");
    cy.get("[data-cy='cityName']").type("London");
    cy.get("[data-cy='submitCity']").click();
    cy.get("[data-cy='weatherDisplay']").contains("London");
    cy.get("[data-test-id='nextDays']").should("exist");
  });
});

describe("Testing fetching weather forecast", () => {
  it("Search weather for invalid city", () => {
    cy.visit("/");
    cy.get("[data-cy='cityName']").type("fsnoesij");
    cy.get("[data-cy='submitCity']").click();
    cy.get("[data-cy='notFound']").contains("City not found...");
  });
});
