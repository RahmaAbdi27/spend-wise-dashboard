# SpendWise - Personal Budgeting Dashboard

## Project Description

SpendWise is a personal budgeting application that helps users manage their monthly budget, track expenses, calculate savings, and determine their remaining balance.

The application uses JavaScript to collect financial information from users, perform budget calculations, and display a budget report in the browser console.

## JavaScript Concepts Implemented

### 1. Variables

The application uses variables to store the monthly budget, food expenses, transport expenses, rent, entertainment, utilities, savings, total expenses, and remaining balance.

### 2. Data Types

The application uses:
- **Numbers:** To represent the monthly budget, expenses, savings, and remaining balance.
- **Strings:** To display messages and labels in the budget report.
- **Objects:** To group and organise the user's budget information.

### 3. User Input

The `prompt()` function collects the user's monthly budget and expense details, including food, transport, rent, entertainment, utilities, and savings.

The `Number()` function converts the values entered by the user into numbers for calculations.

### 4. Budget Calculations

The application uses JavaScript functions to perform budget calculations.

- `calculateTotalExpenses()` adds all expense categories to determine the total expenses.
- `calculateRemainingBalance()` subtracts total expenses and savings from the monthly budget.

### 5. Reusable Functions

The application uses the following functions:

- `collectUserInput()` – Collects and organises the user's budget information.
- `calculateTotalExpenses()` – Calculates the total expenses.
- `calculateRemainingBalance()` – Calculates the remaining balance after expenses and savings.

These functions organise the code into smaller reusable tasks and make the application easier to understand and maintain.

### 6. Displaying Results

The `console.log()` method displays the budget report in the browser console.

The report includes:
- Monthly budget
- Food expenses
- Transport expenses
- Rent
- Entertainment expenses
- Utilities
- Savings
- Total expenses
- Remaining balance

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Files

- `index.html` – Provides the structure of the SpendWise dashboard.
- `style.css` – Controls the appearance and layout of the dashboard.
- `script.js` – Handles user input, budget calculations, and displaying results.
- `README.md` – Provides documentation about the project.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Open `index.html` using a web browser or Live Server.
3. Enter your monthly budget when prompted.
4. Enter your expense amounts when prompted.
5. Open the browser Developer Tools.
6. Select the Console tab to view the SpendWise budget report.

## Author

SpendWise - PLP Week 5 JavaScript Assignment