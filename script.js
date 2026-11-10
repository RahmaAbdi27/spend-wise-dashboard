
// ==========================================
// SPENDWISE - WEEK 6 INTERACTIVE DASHBOARD
// ==========================================

// 1. INITIAL DATA USING ARRAYS

let monthlyBudget = 20000;

let expenses = [
    { description: "Food shopping", category: "Food", amount: 4500 },
    { description: "Transport", category: "Transport", amount: 2000 },
    { description: "House rent", category: "Rent", amount: 6000 },
    { description: "Movie and entertainment", category: "Entertainment", amount: 1200 },
    { description: "Electricity", category: "Utilities", amount: 1500 }
];

let savings = 3000;


// 2. FUNCTION TO FORMAT CURRENCY

function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE");
}


// 3. CALCULATE TOTAL EXPENSES USING A LOOP

function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// 4. CALCULATE REMAINING BALANCE

function calculateRemainingBalance() {
    return monthlyBudget - calculateTotalExpenses() - savings;
}


// 5. CALCULATE EXPENSES BY CATEGORY

function calculateCategoryTotals() {

    let totals = {
        Food: 0,
        Transport: 0,
        Rent: 0,
        Entertainment: 0,
        Utilities: 0
    };

    expenses.forEach(function(expense) {
        totals[expense.category] += expense.amount;
    });

    return totals;
}


// 6. UPDATE DASHBOARD USING DOM MANIPULATION

function updateDashboard() {

    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = calculateRemainingBalance();

    let categoryTotals = calculateCategoryTotals();

    // Update total expenses and balance

    document.getElementById("total-expenses").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("remaining-balance").textContent =
        formatCurrency(remainingBalance);

    // Update category cards

    document.getElementById("food-total").textContent =
        formatCurrency(categoryTotals.Food);

    document.getElementById("transport-total").textContent =
        formatCurrency(categoryTotals.Transport);

    document.getElementById("rent-total").textContent =
        formatCurrency(categoryTotals.Rent);

    document.getElementById("entertainment-total").textContent =
        formatCurrency(categoryTotals.Entertainment);

    document.getElementById("utilities-total").textContent =
        formatCurrency(categoryTotals.Utilities);

    document.getElementById("savings-total").textContent =
        formatCurrency(savings);

    // Display budget status

    let status = document.getElementById("budget-status");

    if (remainingBalance < 0) {
        status.textContent =
            "Warning! You have exceeded your monthly budget.";

    } else if (remainingBalance === 0) {
        status.textContent =
            "Your budget has been fully used.";

    } else if (remainingBalance <= monthlyBudget * 0.2) {
        status.textContent =
            "Warning! You are approaching your budget limit.";

    } else {
        status.textContent =
            "Good job! You are managing your budget well.";
    }

    // Display transaction records

    displayTransactions();
}


// 7. DISPLAY TRANSACTIONS USING A LOOP

function displayTransactions() {

    let transactionList =
        document.getElementById("transaction-list");

    transactionList.innerHTML = "";

    if (expenses.length === 0) {

        let message = document.createElement("li");

        message.textContent = "No transactions yet.";

        transactionList.appendChild(message);

    } else {

        expenses.forEach(function(expense) {

            let item = document.createElement("li");

            item.textContent =
                expense.description + " - " +
                expense.category + " - " +
                formatCurrency(expense.amount);

            transactionList.appendChild(item);

        });
    }
}


// 8. HANDLE ADD EXPENSE FORM USING EVENTS

document.getElementById("expense-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let description =
            document.getElementById("expense-description").value.trim();

        let category =
            document.getElementById("expense-category").value;

        let amount =
            Number(document.getElementById("expense-amount").value);

        let message =
            document.getElementById("form-message");

        // Conditional validation

        if (description === "" || category === "" || amount <= 0 ||
            !Number.isFinite(amount)) {

            message.textContent =
                "Please enter valid expense information.";

            return;
        }

        // Add new record to array

        expenses.push({
            description: description,
            category: category,
            amount: amount
        });

        message.textContent =
            "Expense added successfully!";

        // Reset form

        document.getElementById("expense-form").reset();

        // Refresh dashboard

        updateDashboard();
    });


// 9. HANDLE MONTHLY BUDGET FORM

document.getElementById("budget-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let newBudget =
            Number(document.getElementById("monthly-budget").value);

        if (!Number.isFinite(newBudget) || newBudget <= 0) {

            document.getElementById("budget-status").textContent =
                "Please enter a valid monthly budget.";

            return;
        }

        monthlyBudget = newBudget;

        updateDashboard();
    });


// 10. DISPLAY INITIAL DASHBOARD DATA

updateDashboard();
