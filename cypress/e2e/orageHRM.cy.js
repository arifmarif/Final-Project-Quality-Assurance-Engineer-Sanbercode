import loginPage from "../support/pageObjects/loginPage";
import forgetPasswordPage from "../support/pageObjects/forgetPasswordPage";
import dashboardPage from "../support/pageObjects/dashboardPage";
import loginData from "../fixtures/loginData.json";

describe("orangeHRM", () => {
  it("Test Login", () => {
    loginPage.visit();
    loginPage.fillUsername("Admin");
    loginPage.fillPassword("admin123");
    loginPage.submit();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  it("should send reset link", () => {
    forgetPasswordPage.visit();
    forgetPasswordPage.forgetPS();
    forgetPasswordPage.fillUsername("Admin");
    forgetPasswordPage.submit();

    cy.contains("Reset Password link sent successfully").should("be.visible");
  });

  it("should open Directory page", () => {
    loginPage.visit();
    loginPage.fillUsername("Admin");
    loginPage.fillPassword("admin123");
    loginPage.submit();
    dashboardPage.openDirectory();
    dashboardPage.validateDirectoryPage();
  });
});
