/// <reference types="cypress" />
import P01_SignIn from "../pages/P01_SignIn";

// main test suit that include all test cases related to the sign in flow
describe("Sign in flow", function()
{
    // create global variable to get data from json file
    let userData;

    // configuration function before every test cases will be run
    beforeEach("set configuration", function()
    {
        cy.openDemo();
    });

    // get all data we will need from json file once in  the beginning of the scrip
    before("load fixture", function()
    {
        cy.fixture("testData").then((data)=>
            {
                userData = data;
            });
    });

    context("Happy Scenarios", function()
    {
        it("verify that user can login with valid data", function()
        {
            // step 1: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);

            // step 2: get the user name text filed and type a valid user name
            P01_SignIn.EnterUserName(userData.UserName);

            // step 3: get the password text filed and type a valid password
            P01_SignIn.EnterPassword(userData.Password);

            // step 4: verify that the login button is visible and click on it
            P01_SignIn.ClickSignIn();
            
            // step 5: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 6: check the logo's title
            P01_SignIn.CheckLogo(userData.Title);

            // step 6: check the tap's title
            cy.title().should("eq", userData.Title);
        });
    });

    context("Sad Scenarios", function()
    {
        it("verify that user can not login with invalid data'user name'", function()
        {
            // step 1: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);

            // step 2: get the user name text filed and type an invalid user name
            P01_SignIn.EnterUserName(userData.InvalidUserName);

            // step 3: get the password text filed and type a valid password
            P01_SignIn.EnterPassword(userData.Password);

            // step 4: verify that the login button is visible and click on it
            P01_SignIn.ClickSignIn();

            // step 5: check the system behavior 
            P01_SignIn.CheckUserNameValidation("Username and password do not match any user in this service");
            
            // step 6: verify that the user still in the sign in page
            cy.checkUrl(userData.SignInPage);
        });

        it("verify that user can not login with empty user name", function()
        {
            // step 1: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);

            // step 2: get the password text filed and check it visible
            P01_SignIn.EnterPassword(userData.Password);

            // step 3: verify that the login button is visible and click on it
            P01_SignIn.ClickSignIn();

            // step 4: check the system behavior 
            P01_SignIn.CheckUserNameEmpty("Epic sadface: Username is required");
            
            // step 5: verify that the user still in the sign in page
            cy.checkUrl(userData.SignInPage);
        });

        it("verify that user can not login with empty password", function()
        {
            // step 1: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);

            // step 2: get the user name text filed and type a valid user name
            P01_SignIn.EnterUserName(userData.UserName);

            // step 3: verify that the login button is visible and click on it
            P01_SignIn.ClickSignIn();

            // step 4: check the system behavior 
            P01_SignIn.CheckPasswordEmpty("Epic sadface: Password is required");
            
            // step 5: verify that the user still in the sign in page
            cy.checkUrl(userData.SignInPage);
        });
        
    });
});