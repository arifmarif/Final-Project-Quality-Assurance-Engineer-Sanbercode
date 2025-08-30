class ForgotPasswordPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new ForgotPasswordPage();
