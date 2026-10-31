
/* SpendWise - Week 6 JavaScript Assignment */

// 1. Variables: store the dashboard's budgeting data
let monthlyBudget = 20000;

let foodExpense = 4500;
let transportExpense = 2000;
let rentExpense = 6000;
let entertainmentExpense = 1200;
let savings = 3000;
let utilitiesExpense = 1500;

// 2. Function to calculate total expenses
function calculateTotalExpenses() {
    return foodExpense + transportExpense + rentExpense
        + entertainmentExpense + utilitiesExpense;
}

// 3. Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses, savingsAmount) {
    return budget - expenses - savingsAmount;
}

// 4. Function to collect user input
function collectUserInput() {
    let budgetInput = prompt(
        "Welcome to SpendWise!\nEnter your monthly budget in KSh:"
    );

    if (budgetInput === null || budgetInput.trim() === "") {
        console.log("Budget input was cancelled or left empty.");
        return;
    }

    let userBudget = Number(budgetInput);

    if (!Number.isFinite(userBudget) || userBudget <= 0) {
        console.log("Please enter a valid budget greater than zero.");
        return;
    }

    let expenseInput = prompt(
        "Enter an additional expense amount in KSh:"
    );

    if (expenseInput === null || expenseInput.trim() === "") {
        console.log("Expense input was cancelled or left empty.");
        return;
    }

    let additionalExpense = Number(expenseInput);

    if (!Number.isFinite(additionalExpense) || additionalExpense < 0) {
        console.log("Please enter a valid expense amount.");
        return;
    }

    // 5. Perform calculations
    let totalExpenses = calculateTotalExpenses() + additionalExpense;

    let remainingBalance = calculateRemainingBalance(
        userBudget,
        totalExpenses,
        savings
    );

    // 6. Display clearly labelled results in the console
    console.log("===== SPENDWISE BUDGET REPORT =====");
    console.log("Monthly Budget: KSh " + userBudget.toFixed(2));
    console.log("Food: KSh " + foodExpense.toFixed(2));
    console.log("Transport: KSh " + transportExpense.toFixed(2));
    console.log("Rent: KSh " + rentExpense.toFixed(2));
    console.log("Entertainment: KSh " + entertainmentExpense.toFixed(2));
    console.log("Utilities: KSh " + utilitiesExpense.toFixed(2));
    console.log("Savings: KSh " + savings.toFixed(2));
    console.log("Additional Expense: KSh " + additionalExpense.toFixed(2));
    console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
    console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: Your budget has been fully allocated.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("==================================");
}

// 7. Run the application
collectUserInput();
