/// <reference types="cypress" />
import P02_AddToCart from "../pages/P02_AddToCart";
import P01_SignIn from "../pages/P01_SignIn";
import helpers from "../support/helpers";


// main test suit that include all test cases related to the add to cart flow
describe("Add to Cart Flow", function()
{
    // create global variable to get data from json file
    let userData;

    // create global variable to store product name
    let ProductName1;
    let ProductName2;

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
        it("verify that user can add a product to his cart successfully from the add to cart page", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: get product's name
            P02_AddToCart.GetProductName(0).then((element)=>
                {
                    ProductName1 = element.text();
                });
             
            // step 6: add that product to the cart
            P02_AddToCart.ClickAddToCartButton(0);

            //step 7: open the  cart page 
            P02_AddToCart.OpenCartPage();

            // step 8: check the url of the cart page
            cy.checkUrl(userData.CartPage);

            // step 9: check the product name is match
            P02_AddToCart.GetInventoryItemName(0).then((element)=>
                {
                    let ProductName = element.text();
                    helpers.CompareText(ProductName, ProductName1);
                });
        });

        it("verify that the user can go the product's page and add it to cart page successfully", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: get product's name
            P02_AddToCart.GetProductName(0).then((element)=>
                {
                    ProductName1 = element.text();
                });
            // Step 6: open the product's page
            P02_AddToCart.OpenProductPage();

            // step 7: check the url of the product page
            cy.checkUrl(userData.ProductPage);

            // step 8: add that product to the cart
            P02_AddToCart.AddProductToCart();

            //step 9: open to cart page 
            P02_AddToCart.OpenCartPage();

            // step 10: check the product name is match
            P02_AddToCart.GetInventoryItemName(0).then((element)=>
                {
                    let ProductName = element.text();
                    helpers.CompareText(ProductName, ProductName1);
                });
        }); 
        
        it("verify that user can add more than a product to his cart successfully from the add to cart page", function()
        {
            // step 1: verify that the actual base url match the expected url for sign in page
            cy.checkUrl(userData.SignInPage);

            // step 2: login with valid username and password
            cy.login(userData.UserName, userData.Password);
            
            // step 3: verify that the user reach the home page
            cy.checkUrl(userData.ProductsPage);

            // step 4: check the logo's title in the add to cart page
            P01_SignIn.CheckLogo(userData.Title);

            // step 5: get product's name
            P02_AddToCart.GetProductName(0).then((element)=>
                {
                    ProductName1 = element.text();
                });
                        
            // step 6: get another product's name
            P02_AddToCart.GetProductName(2).then((element)=>
                {
                    ProductName2 = element.text();
                });
            // step 7: add that product to the cart
            P02_AddToCart.ClickAddToCartButton(0);

            // step 8: add the second product to the cart
            P02_AddToCart.ClickAddToCartButton(1);

            // Step 9: open the product's page
            P02_AddToCart.OpenCartPage();

            // step 10: check the url of the product page
            cy.checkUrl(userData.CartPage);

           // step 11: check the product name is match
           P02_AddToCart.GetInventoryItemName(0).then((element)=>
            {
                let ProductName = element.text();
                helpers.CompareText(ProductName, ProductName1);
            });
            
            // step 12: check the product name is match
            P02_AddToCart.GetInventoryItemName(1).then((element)=>
            {
                    let ProductName = element.text();
                    helpers.CompareText(ProductName, ProductName2);
            });
        });

    });

    context("Sad Scenarios", function()
    {
        it("should redirect unauthenticated user to login page", function()
            {
                // step 1: user try to access products page during the url
                cy.visit("https://www.saucedemo.com/inventory.html", { failOnStatusCode: false });

                // step 2: check the user will redirect to sign in page
                cy.checkUrl(userData.SignInPage);
            });
              
            it("should not allow adding product without login", function()
            {
                // step 1: user try to access product page during the url
                cy.visit("https://www.saucedemo.com/inventory-item.html?id=4", { failOnStatusCode: false });

                // step 2: verify that the add to cart button not exists 
                cy.get("#add-to-cart").should("not.exist");

                // step 3: check the user will redirect to sign in page
                 cy.checkUrl(userData.SignInPage);
            });

    });
    
   
});