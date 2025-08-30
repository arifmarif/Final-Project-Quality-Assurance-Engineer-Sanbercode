import LoginPage from "../support/pageObjects/loginPage";
import ForgotPasswordPage from "../support/pageObjects/forgotPasswordPage";
import DashboardPage from "../support/pageObjects/dashboardPage";

describe("orangeHRM", () => {
  it("Test Login", () => {
    LoginPage.visit();
    LoginPage.fillUsername("Admin");
    LoginPage.fillPassword("admin123");
    LoginPage.submit();

    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  it("Test Forget Password", () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.fillUsername("Admin");
    ForgotPasswordPage.submit();

    cy.contains("Reset Password link sent successfully").should("be.visible");
  });

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillUsername("Admin");
    LoginPage.fillPassword("admin123");
    LoginPage.submit();
  });

  it("should open Directory page", () => {
    DashboardPage.openDirectory();
    DashboardPage.validateDirectoryPage();
  });
});
