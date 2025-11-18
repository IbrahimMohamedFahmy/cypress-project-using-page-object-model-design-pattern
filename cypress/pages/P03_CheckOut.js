class checkOut
{
    // Data Members
    elements = 
    {
        CheckOutButton: ()=> cy.get("#checkout"),
        FirstNameFiled: ()=> cy.get("#first-name"),
        LastNameFiled: ()=> cy.get("#last-name"),
        PostCodeFiled: ()=> cy.get("#postal-code"),
        ContinueButton: ()=>  cy.get("#continue"),
        ItemPrice: ()=> cy.get('[data-test="subtotal-label"]'),
        Tax: ()=> cy.get('[data-test="tax-label"]'),
        TotalPrice: ()=> cy.get('[data-test="total-label"]'),
        FinishButton: ()=> cy.get("#finish"),
        SuccessFulMessage: ()=> cy.xpath("//h2[text()='Thank you for your order!']"),
        BackToProducts: ()=> cy.get("#back-to-products"),
        Validation: ()=> cy.xpath("//h3[@data-test='error']"),
        leftSideMenu: ()=> cy.get("#react-burger-menu-btn"),
        AllItems: ()=> cy.get("#inventory_sidebar_link"),
        
        
    };
    // Methods
    GetCheckOutPage()
    {
        return this.elements.CheckOutButton();
    };

    GetFirstNameFiled()
    {
        return this.elements.FirstNameFiled();
    };

    GetLastNameFiled()
    {
        return this.elements.LastNameFiled();
    };

    GetPostCodeFiled()
    {
        return this.elements.PostCodeFiled();
    };

    GetContinueButton()
    {
        return this.elements.ContinueButton();
    };

    GetItemPrice()
    {
        return this.elements.ItemPrice();
    };

    GetTax()
    {
        return this.elements.Tax();
    };

    GetTotalPrice()
    {
        return this.elements.TotalPrice();
    };

    GetFinishButton()
    {
        return this.elements.FinishButton();
    };

    GetSuccessFulMessage()
    {
        return this.elements.SuccessFulMessage();
    };

    GetBackToProductsPageButton()
    {
        return this.elements.BackToProducts();
    };

    GetValidation()
    {
        return this.elements.Validation();
    };

    GetLeftSideMenu()
    {
        return this.elements.leftSideMenu();
    };

    GetAllItems()
    {
        return this.elements.AllItems();
    };
};

module.exports = new checkOut();