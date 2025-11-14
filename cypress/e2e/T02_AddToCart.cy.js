/// <reference types="cypress" />
import P02_AddToCart from "../pages/P02_AddToCart";
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
       
    });

    context("Sad Scenarios", function()
    {

    });
    
   
});