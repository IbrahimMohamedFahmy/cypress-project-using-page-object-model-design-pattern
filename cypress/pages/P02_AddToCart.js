import helpers from "../support/helpers";

class addToCart
{
    // Data Members
    elements = 
    {
        ProductName:  ()=> cy.get('[data-test="inventory-item-name"]'),
        AddToCartButton: ()=>  cy.get("button[id^='add-to-cart']"),
        CartPage: ()=> cy.get(".shopping_cart_link"),
        InventoryItemName: ()=> cy.get('[data-test="inventory-item-name"]'),
        ProductPage: ()=> cy.get("#item_4_title_link"),
        AddToCartB: ()=> cy.get("#add-to-cart")
    };

    // Methods
    GetProductName(indx)
    {
        return this.elements.ProductName().eq(indx);
    };

    ClickAddToCartButton(indx)
    {
        this.elements.AddToCartButton().should("be.visible").eq(indx).click();
    };

    OpenCartPage()
    {
        this.elements.CartPage().should("be.visible").click();
    };

    GetInventoryItemName(indx)
    {
        return this.elements.InventoryItemName().eq(indx);
    };

    OpenProductPage()
    {
        this.elements.ProductPage().should("be.visible").click();
    };

    AddProductToCart()
    {
        return this.elements.AddToCartB();
    };

};
module.exports = new addToCart();