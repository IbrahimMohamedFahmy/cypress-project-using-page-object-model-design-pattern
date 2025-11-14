/// <reference types="cypress" />
import P01_SignIn from "../pages/P01_SignIn";
import helpers from "../support/helpers";

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
     
    });

    context("Sad Scenarios", function()
    {
        
    });
});