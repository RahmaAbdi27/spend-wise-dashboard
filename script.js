
// SPENDWISE - WEEK 5 JAVASCRIPT ASSIGNMENT

// 1. Collect user input
function collectUserInput() {
    let monthlyBudget = Number(prompt("Enter your monthly budget:"));

    let food = Number(prompt("Enter food expenses:"));
    let transport = Number(prompt("Enter transport expenses:"));
    let rent = Number(prompt("Enter rent expenses:"));
    let entertainment = Number(prompt("Enter entertainment expenses:"));
    let utilities = Number(prompt("Enter utilities expenses:"));
    let savings = Number(prompt("Enter savings amount:"));

    return {
        monthlyBudget,
        food,
        transport,
        rent,
        entertainment,
        utilities,
        savings
    };
}

// 2. Calculate total expenses
function calculateTotalExpenses(data) {
    return data.food + data.transport + data.rent +
           data.entertainment + data.utilities;
}

// 3. Calculate remaining balance
function calculateRemainingBalance(budget, expenses, savings) {
    return budget - expenses - savings;
}

// 4. Collect data and calculate results
let budgetData = collectUserInput();

let totalExpenses = calculateTotalExpenses(budgetData);

let remainingBalance = calculateRemainingBalance(
    budgetData.monthlyBudget,
    totalExpenses,
    budgetData.savings
);

// 5. Display budget report
console.log("===== SPENDWISE BUDGET REPORT =====");
console.log("Monthly Budget: KSh " + budgetData.monthlyBudget);
console.log("Food: KSh " + budgetData.food);
console.log("Transport: KSh " + budgetData.transport);
console.log("Rent: KSh " + budgetData.rent);
console.log("Entertainment: KSh " + budgetData.entertainment);
console.log("Utilities: KSh " + budgetData.utilities);
console.log("Savings: KSh " + budgetData.savings);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
