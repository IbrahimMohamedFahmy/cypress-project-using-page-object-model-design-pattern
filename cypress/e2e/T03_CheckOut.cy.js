/// <reference types="cypress" />
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
    let priceNumber;
    let tax;
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
        it("verify that user can go to the checkout page successfully and order his item", function()
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

            // step 15: get the item total price
            P03_CheckOut.GetItemPrice().invoke('text').then((text) => 
            {
            const price = text.match(/\d+(\.\d+)?/)[0];
            priceNumber = parseFloat(price);
            });
  
            // step 16: get the item tax
            P03_CheckOut.GetTax().invoke('text').then((text) => 
            {
            const taxValue = text.match(/\d+(\.\d+)?/)[0];
            tax = parseFloat(taxValue);
            });

            // step 17: get the total price and check calculation
            P03_CheckOut.GetTotalPrice().invoke('text').then((text) => 
            {
                const totalValue = text.match(/\d+(\.\d+)?/)[0];
                var total = parseFloat(totalValue);
                helpers.CompareValues((priceNumber+tax),total);
            });

            // step 18: verify that the finish button is visible 
            P03_CheckOut.GetFinishButton().should("be.visible").click();

            // step 19: check tha successful message is shown
            P03_CheckOut.GetSuccessFulMessage().should("be.visible").and("contain", "Thank you for your order!");

            // step 20: verify that the go back button is exist and redirect to the products page
            P03_CheckOut.GetBackToProductsPageButton().should("be.visible").click(); 

            // step 21: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);
        });
    });

    context("Sad Scenarios", function()
    {   
        it("verify that the user can not go to the checkout page without the first name in the step one", function()
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

            // step 10: get the text filed for the last name and type a valid last name
            P03_CheckOut.GetLastNameFiled().type(userData.LastName);

            // step 11: get the text filed for the post code and type a valid code
            P03_CheckOut.GetPostCodeFiled().type(userData.PostCode);

            // step 12: verify that the continue button is visible and click in it
            P03_CheckOut.GetContinueButton().should("be.visible").click();

            // step 13: get the validation for the first name text filed
            P03_CheckOut.GetValidation().then((validation)=>
                {
                    helpers.CompareValues((validation.text()), "Error: First Name is required");
                });
        });

        it("verify that the user can not go to the checkout page without the last name in the step one", function()
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

            // step 10: get the text filed for the first name and type a valid first name
            P03_CheckOut.GetFirstNameFiled().type(userData.FirstName);

            // step 11: get the text filed for the post code and type a valid code
            P03_CheckOut.GetPostCodeFiled().type(userData.PostCode);

            // step 12: verify that the continue button is visible and click in it
            P03_CheckOut.GetContinueButton().should("be.visible").click();

            // step 13: get the validation for the first name text filed
            P03_CheckOut.GetValidation().then((validation)=>
                {
                    helpers.CompareValues((validation.text()), "Error: Last Name is required");
                });
        });

        it("verify that the user can not go to the checkout page without the post code in the step one", function()
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

            // step 10: get the text filed for the first name and type a valid first name
            P03_CheckOut.GetFirstNameFiled().type(userData.FirstName);

            // step 11: get the text filed for the last name and type a valid last name
            P03_CheckOut.GetLastNameFiled().type(userData.LastName);

            // step 12: verify that the continue button is visible and click in it
            P03_CheckOut.GetContinueButton().should("be.visible").click();

            // step 13: get the validation for the first name text filed
            P03_CheckOut.GetValidation().then((validation)=>
                {
                    helpers.CompareValues((validation.text()), "Error: Postal Code is required");
                })
        });

        it("verify that user can not order his item without complete the second step", function()
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

            // step 15: verify that item is not ordered if user leaves checkout before finishing
            P03_CheckOut.GetLeftSideMenu().should("be.visible").click();

            // step 16: select the "all items" option
            P03_CheckOut.GetAllItems().should("be.visible").click();

            // step 17: get product's name
            P02_AddToCart.GetProductName(0).then((element)=>
                {
                    ProductName = element.text();
                });

             //step 18: go to cart page 
             P02_AddToCart.OpenCartPage();

             // step 19: check the url of the cart page
             cy.checkUrl(userData.CartPage);

             // step 20: check that the product still exist in the cart and not order yet
             P02_AddToCart.GetInventoryItemName(0).then((element)=>
                {
                    let ProductName1 = element.text();
                    helpers.CompareValues(ProductName1, ProductName);
                });
        });
    });
   
});