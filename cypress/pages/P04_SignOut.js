import helpers from "../support/helpers";

class signOut
{
    // Data Members
    elements = 
    {
        SignOutButton: ()=> cy.get("#logout_sidebar_link"),
    };

    // Methods
    GetSignOutButton()
    {
        return this.elements.SignOutButton();
    };
};
module.exports = new signOut();