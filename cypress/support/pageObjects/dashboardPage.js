class dashboardPage {
  openDirectory() {
    cy.intercept("GET", "**/api/v2/directory/**").as("getDirectory");
    cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
    cy.wait("@getDirectory");
  }

  validateDirectoryPage() {
    cy.contains("Directory").should("be.visible");
  }
}

export default new dashboardPage();
