/// <reference types="cypress" />
import P04_SignOut from "../pages/P04_SignOut";
import P03_CheckOut from "../pages/P03_CheckOut";
import P02_AddToCart from "../pages/P02_AddToCart";
import P01_SignIn from "../pages/P01_SignIn";
import helpers from "../support/helpers";

// main test suit that include all test cases related to the checkout flow
describe("Checkout Flow", function()
{
    // create global variable to get data from json file
    let userData;

    // create global variables to store the item price and its tax
    var priceNumber;
    var tax;
    let ProductName;

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
        it("verify that user can sign out after successfully sign in", function()
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

            // step 7: check the tap's title
            cy.title().should("eq", userData.Title);

            // step 8: verify that left side menu is visible and click on it
            P03_CheckOut.GetLeftSideMenu().should("be.visible").click();

            // step 9: verify that the user can signout during click on sign out button
            P04_SignOut.GetSignOutButton().should("be.visible").click();

            // step 10: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);
        });

        it("verify that user can sign out from left side menu on the check out page", function()
        {
             // step 1: verify that the actual base url match the expected url for sign in page
             cy.checkUrl(userData.SignInPage);

             // step 2: login with valid username and password
             cy.login(userData.UserName, userData.Password);
             
             // step 3: verify that the user reach the home page
             cy.checkUrl(userData.ProductsPage);
 
             // step 4: check the logo's title in the add to cart page
             P01_SignIn.CheckLogo(userData.Title);
 
             // step 5: add that product to the cart
             P02_AddToCart.ClickAddToCartButton(0);
 
             //step 6: open the  cart page 
             P02_AddToCart.OpenCartPage();
 
             // step 7: check the url of the cart page
             cy.checkUrl(userData.CartPage);
 
             // step 8: get the checkout button and verify it is visible and its name is "Checkout"
             P03_CheckOut.GetCheckOutPage().should("contain", "Checkout").click();
 
             // step 9: check the url for checkout page
             cy.checkUrl(userData.CheckOutPage1);
 
            // step 10: verify that left side menu is visible and click on it
            P03_CheckOut.GetLeftSideMenu().should("be.visible").click();

            // step 11: verify that the user can signout during click on sign out button
            P04_SignOut.GetSignOutButton().should("be.visible").click();

            // step 12: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);
        });

        it("verify that user can signout from left side menu after end to end scenario", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: add that product to the cart
            P02_AddToCart.ClickAddToCartButton(0);

            // step 6: open the  cart page 
            P02_AddToCart.OpenCartPage();

            // step 7: check the url of the cart page
            cy.checkUrl(userData.CartPage);

            // step 8: get the checkout button and verify it is visible and its name is "Checkout"
            P03_CheckOut.GetCheckOutPage().should("contain", "Checkout").click();

            // step 9: check the url for checkout page
            cy.checkUrl(userData.CheckOutPage1);

            // step 10: get the text filed for the first name and type a valid first name
            P03_CheckOut.GetFirstNameFiled().type(userData.FirstName);

            // step 11: get the text filed for the last name and type a valid last name
            P03_CheckOut.GetLastNameFiled().type(userData.LastName);

            // step 12: get the text filed for the post code and type a valid code
            P03_CheckOut.GetPostCodeFiled().type(userData.PostCode);

            // step 13: verify that the continue button is visible and click in it
            P03_CheckOut.GetContinueButton().should("be.visible").click();

            // step 14: verify that the url of the second step of the checkout process is true
            cy.checkUrl(userData.CheckOutPage2);

            // step 15: verify that the finish button is visible 
            P03_CheckOut.GetFinishButton().should("be.visible").click();

            // step 16: check tha successful message is shown
            P03_CheckOut.GetSuccessFulMessage().should("be.visible").and("contain", "Thank you for your order!");

            // step 17: verify that the go back button is exist and redirect to the products page
            P03_CheckOut.GetBackToProductsPageButton().should("be.visible").click(); 

            // step 18: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage); 

            // step 19: verify that left side menu is visible and click on it
            P03_CheckOut.GetLeftSideMenu().should("be.visible").click();

            // step 20: verify that the user can signout during click on sign out button
            P04_SignOut.GetSignOutButton().should("be.visible").click();

            // step 21: verify that the actual base url match the expected url
            cy.checkUrl(userData.SignInPage);
        });
    });

    context("Sad Scenarios", function()
    {   
        it("verify that user can not sign out after successfully sign in without open the left side", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: verify that left side menu is visible
            P03_CheckOut.GetLeftSideMenu().should("be.visible");

            // step 6: verify that the sign out button is not visible
            P04_SignOut.GetSignOutButton().should("not.be.visible");
        });

        it("verify that user can not sign out from left side menu without open it on the cart page", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: open the  cart page 
            P02_AddToCart.OpenCartPage();

            // step 6: check the url of the cart page
            cy.checkUrl(userData.CartPage);

           // step 7: verify that left side menu is visible
           P03_CheckOut.GetLeftSideMenu().should("be.visible");

           // step 8: verify that the sign out button is not visible
           P04_SignOut.GetSignOutButton().should("not.be.visible");
        });

        it("verify that user can not sign out from left side menu on the check out page without open it", function()
        {
            /// step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);
             
            // step 5: add that product to the cart
            P02_AddToCart.ClickAddToCartButton(0);

            // step 6: open the  cart page 
            P02_AddToCart.OpenCartPage();

            // step 7: check the url of the cart page
            cy.checkUrl(userData.CartPage);

            // step 8: get the checkout button and verify it is visible and its name is "Checkout"
            P03_CheckOut.GetCheckOutPage().should("contain", "Checkout").click();

            // step 9: check the url of the cart page
            cy.checkUrl(userData.CheckOutPage1);

           // step 10: verify that left side menu is visible
           P03_CheckOut.GetLeftSideMenu().should("be.visible");

           // step 11: verify that the sign out button is not visible
           P04_SignOut.GetSignOutButton().should("not.be.visible");
        });
    });
   
});