describe("Visit homepage", function () {
  const url = "http://localhost:3000/";
  it("Home page can be opened", function () {
    cy.log("Visiting url: ", url);
    cy.visit(url);
    const mustContain = ["Tomi Salo", "Full-stack developer", "About"];
    mustContain.forEach((word) => {
      cy.contains(word);
    });
  });
});
