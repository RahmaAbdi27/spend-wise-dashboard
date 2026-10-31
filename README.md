# SpendWise - Personal Budgeting Dashboard

## Project Description
SpendWise is a personal budgeting application that helps users manage their monthly budget, track expenses, calculate savings, and determine their remaining balance.

## JavaScript Concepts Implemented

### 1. Variables
The application uses variables to store the monthly budget, food expenses, transport expenses, rent, entertainment, utilities, and savings.

### 2. Data Types
Numbers represent budget and expense amounts, while strings are used for messages and user input.

### 3. User Input
The `prompt()` function collects the user's monthly budget and additional expenses. The `Number()` function converts the entered values into numbers.

### 4. Budget Calculations
The `calculateTotalExpenses()` function adds all expense categories and additional expenses.

The `calculateRemainingBalance()` function subtracts total expenses and savings from the user's budget.

### 5. Reusable Functions
The application uses:
- `calculateTotalExpenses()`
- `calculateRemainingBalance()`
- `collectUserInput()`

These functions organize the code into smaller reusable tasks.

### 6. Displaying Results
The `console.log()` method displays the budget, expense categories, total expenses, remaining balance, and budget status in the browser console.

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Project Files
- `index.html` - Structures the dashboard.
- `style.css` - Styles the dashboard.
- `script.js` - Handles budgeting calculations and user input.
- `README.md` - Documents the project.

## How to Run
1. Open the project folder in Visual Studio Code.
2. Open `index.html` using a browser or Live Server.
3. Enter your monthly budget when prompted.
4. Enter an additional expense.
5. Open Developer Tools and select Console to view the budget report.

## Author
SpendWise - PLP Week 6 JavaScript Assignment
