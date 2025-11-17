import helpers from "../support/helpers";

class signIn
{
    // Data Members
    elements = 
    {
        UserName: ()=>  cy.get('[data-test="username"]'),
        Password: ()=>  cy.get('[data-test="password"]'),
        SignInButton: ()=> cy.get('[data-test="login-button"]'),
        Logo: ()=> cy.xpath("//div[text()='Swag Labs']"),
        UserNameValidation: ()=> cy.xpath("//h3[@data-test='error']"),
        ErrorMessage: ()=> cy.get('[data-test="error"]')
    };

    // Methods
    EnterUserName(UserName)
    {
        this.elements.UserName().type(UserName);
    };

    EnterPassword(Password)
    {
        this.elements.Password().type(Password);
    };

    ClickSignIn()
    {
        this.elements.SignInButton().should("be.visible").click();
    };

    CheckLogo(Logo)
    {
        this.elements.Logo().should("contain", Logo);
    };
    
    CheckUserNameValidation(text)
    {
        this.elements.UserNameValidation().should("be.visible").and("contain", text);
    };

    CheckUserNameEmpty(text)
    {
        this.elements.ErrorMessage().should("be.visible").and("contain", text);
    };

    CheckPasswordEmpty(text)
    {
        this.elements.ErrorMessage().should("be.visible").and("contain", text);
    };
};
module.exports = new signIn();