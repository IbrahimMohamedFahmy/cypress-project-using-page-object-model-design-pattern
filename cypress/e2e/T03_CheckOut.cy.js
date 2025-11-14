/// <reference types="cypress" />
import P03_CheckOut from "../pages/P03_CheckOut";
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
        
    });

    context("Sad Scenarios", function()
    {   
        
    });
   
});