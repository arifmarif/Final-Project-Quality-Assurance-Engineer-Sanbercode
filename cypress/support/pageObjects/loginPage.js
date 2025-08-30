class loginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new loginPage();
