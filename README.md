# SpendWise - Personal Budgeting Dashboard

## Project Description

SpendWise is an interactive personal budgeting application developed to help users manage their monthly budgets, track expenses, calculate savings, and monitor their remaining balances.

The application allows users to add new expenses, update their monthly budget, view transactions, and receive feedback about their spending habits.

This week's improvements focus on making the dashboard interactive using JavaScript decision-making, arrays, loops, DOM manipulation, and event handling.

## Improvements Made This Week

The following improvements were made to the SpendWise application:

- Added an interactive expense form.
- Added a monthly budget update feature.
- Introduced arrays to store multiple expense records.
- Implemented loops to calculate and display expenses.
- Added conditional statements to evaluate budget status.
- Used DOM manipulation to update dashboard information dynamically.
- Implemented event listeners to respond to user interactions.
- Added input validation to prevent invalid expense entries.
- Updated the transaction section to display newly added expenses.

## JavaScript Concepts Implemented

### 1. Variables and Data Types

The application uses variables to store the monthly budget, savings, expense records, total expenses, and remaining balance.

The following data types are used:

- **Numbers:** Represent budgets, expenses, and savings.
- **Strings:** Store expense descriptions, categories, and messages.
- **Arrays:** Store multiple expense records.
- **Objects:** Organise individual expense information into descriptions, categories, and amounts.

### 2. Decision Making (Conditionals)

Conditional statements (`if`, `else if`, and `else`) are used to evaluate the user's financial situation.

For example:
- If the remaining balance is below zero, the application displays a warning that the budget has been exceeded.
- If the remaining balance is zero, it informs the user that the budget has been fully used.
- If the remaining balance is 20% or less of the monthly budget, it displays a warning.
- Otherwise, it displays a positive budget management message.

### 3. Arrays

Arrays are used to store multiple expense records instead of relying on individual variables.

The application uses an array called `expenses` to store expense objects containing:

- Expense description
- Expense category
- Expense amount

The `push()` method adds new expense records to the array whenever a user submits the expense form.

### 4. Loops

Loops are used to process multiple expense records efficiently.

The application uses:
- `for` loop to calculate total expenses.
- `forEach()` to calculate expenses by category.
- `forEach()` to display transaction records on the dashboard.

This makes it easier to process and manage multiple financial records.

### 5. DOM Manipulation

Document Object Model (DOM) manipulation allows JavaScript to update webpage content dynamically.

The application uses `document.getElementById()` to access HTML elements and `textContent` to update dashboard information.

DOM manipulation is used to:
- Display total expenses.
- Update the remaining balance.
- Update individual expense categories.
- Display budget status messages.
- Show newly added transactions.

The `createElement()` and `appendChild()` methods are also used to display transaction records.

### 6. Event Handling

Event listeners allow the application to respond to user actions.

The application uses `addEventListener()` to handle form submissions.

Two main interactions are implemented:

- **Expense Form:** Allows users to enter an expense description, select a category, and enter an amount.
- **Budget Form:** Allows users to update their monthly budget.

The `preventDefault()` method prevents the browser from reloading the page when a form is submitted.

After a successful submission, the dashboard automatically updates.

### 7. Functions

Reusable functions organise the application into smaller tasks.

The main functions include:

- `formatCurrency()` – Formats financial amounts in Kenyan Shillings.
- `calculateTotalExpenses()` – Calculates the total expenses using a loop.
- `calculateRemainingBalance()` – Determines the remaining balance.
- `calculateCategoryTotals()` – Calculates spending for each category.
- `updateDashboard()` – Updates dashboard information.
- `displayTransactions()` – Displays expense records on the webpage.

## Challenges Encountered and Solutions

### 1. Moving from Console Output to Dashboard Display

**Challenge:** The previous version displayed budget information in the browser console instead of directly on the webpage.

**Solution:** DOM manipulation was introduced using `document.getElementById()` and `textContent` to display financial information directly on the dashboard.

### 2. Managing Multiple Expense Records

**Challenge:** Managing expenses using individual variables made it difficult to add and process new records.

**Solution:** Arrays and objects were introduced to organise multiple expense records. The `push()` method allows users to add new transactions.

### 3. Updating Dashboard Information

**Challenge:** Ensuring that dashboard figures change whenever a user adds an expense or updates their budget.

**Solution:** Event listeners were implemented to detect user actions and call the `updateDashboard()` function automatically.

### 4. Validating User Input

**Challenge:** Preventing empty descriptions, missing categories, and invalid expense amounts.

**Solution:** Conditional statements were used to validate user input before adding new records.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Ubuntu Terminal
- Git and GitHub

## Project Files

- `index.html` – Provides the structure of the SpendWise dashboard and interactive forms.
- `style.css` – Controls the appearance, layout, responsiveness, and styling of the dashboard.
- `script.js` – Handles expense records, budget calculations, decision-making, DOM manipulation, and event handling.
- `README.md` – Provides documentation about the project.

## How to Run the Project

1. Open the SpendWise project folder in Visual Studio Code.
2. Open `index.html` using a web browser or Live Server.
3. View the initial budget and expense information.
4. Add a new expense using the expense form.
5. Update the monthly budget using the budget form.
6. Observe how the dashboard updates automatically.
7. Check the budget status and recent transactions.

## Author

SpendWise - PLP Week 6 JavaScript Assignment.