class forgotPasswordPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  forgetPS() {
    cy.get(".orangehrm-login-forgot > .oxd-text").click();
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new forgotPasswordPage();
