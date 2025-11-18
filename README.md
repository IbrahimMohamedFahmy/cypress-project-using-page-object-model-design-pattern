🧪 Cypress E2E Testing Project – SauceDemo Automation (POM Design Pattern)

📌 Overview
This project is a Cypress End-to-End Automation Framework implemented using the Page Object Model (POM) Design Pattern.
It covers all major flows of the SauceDemo web application, including Sign-In, Add to Cart, Checkout, and Sign-Out.
```
project-root
├── cypress
│   ├── e2e
│   │   ├── T01_SignIn.cy.js         # Test cases for Sign-In flow
│   │   ├── T02_AddToCart.cy.js      # Test cases for Add to Cart flow
│   │   ├── T03_CheckOut.cy.js       # Test cases for Checkout flow
│   │   ├── T04_SignOut.cy.js        # Test cases for Sign Out flow
│   ├── fixtures
│   │   └── testData.json            # Contains test data (username, password)
│   ├── pages                        # Page Object Models
│   │   ├── P01_SignIn.js
│   │   ├── P02_AddToCart.js
│   │   ├── P03_CheckOut.js
│   │   └── P04_SignOut.js
│   └── support
│       ├── commands.js              # Custom Cypress commands (openDemo, checkUrl)
│       ├── e2e.js                   # Cypress global configuration
│       └── helpers.js                # Reusable utility functions 
├── cypress.config.js                 # Main Cypress configuration file
├── package.json                      # Project dependencies and scripts
└── README.md                         # Project documentation
```
⚙️ Installation and Setup
```bash

1️⃣ Clone the repository
git clone https://github.com/IbrahimMohamedFahmy/cypress-project-using-page-object-model-design-pattern
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Run the tests
npx cypress open

🧠 Design Pattern: Page Object Model (POM)

Each page in the application has a separate Page Object containing all its related methods.

POM helps with:

Reusability

Maintenance

Scalability without breaking other flows

helpers.js contains all common reusable methods used across pages and tests (e.g., Random Email, Capitalize, Convert Price).

Custom Cypress commands like cy.openDemo() and cy.checkUrl() are defined in support/commands.js to reduce code duplication (DRY Principle).

🧾 Reporting

Test execution results are automatically saved in:

/cypress/reports


Can be later integrated with tools like Mochawesome for HTML reports.

💡 Best Practices Followed

Use of before() and beforeEach() hooks for setup and configuration.

Using fixture files for test data management.

Applying assertions for functional validation.

Clear and organized test case naming (T01, T02, …).

Modular and scalable structure following POM Design Pattern.

Includes Happy and Sad scenarios for complete test coverage.

🧑‍💻 Author

Engineer Ibrahim Omran – QA Automation Engineer
Passionate about software quality, test automation, and continuous improvement.

📅 Last Updated

November 2025
