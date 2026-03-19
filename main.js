// @ts-nocheck
// ===== IMPORTS =====
import {
    addExpense,
    removeExpense,
    getExpenses,
    getTotal,
    clearExpenses
} from "./store.js";

import {
    renderExpenses,
    renderTotal,
    renderEmptyState,
    updateCountBadge,
    renderExpenseItem
} from "./ui.js";


// ===== DOM SELECTORS =====
const form = document.querySelector("#expenseForm");
const titleInput = document.querySelector("#titleInput");
const amountInput = document.querySelector("#amountInput");
const clearAllBtn = document.querySelector("#clearAllBtn");
const expenseList = document.querySelector("#expenseList")

// ===== INIT FUNCTION =====
function initApp() {
    renderExpenses(getExpenses());
    renderTotal(getTotal());
    updateCountBadge(getExpenses().length);
    renderEmptyState(getExpenses().length);
}

// refresh ui yani expense change bo'lsa ui o'zgarishi kerak
function refreshUI() {
    const expenses = getExpenses()
    const total = getTotal()

    renderTotal(total)
    renderExpenses(expenses)
    updateCountBadge(expenses.length)
    renderEmptyState(expenses.length)
}

// ===== EVENT HANDLERS =====

function handleRemoveExpense(event) { }

function handleClearAll() { }


// ===== EVENT LISTENERS =====
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const expense = {
        title: titleInput.value,
        amount: Number(amountInput.value)
    }
    addExpense(expense)
    refreshUI()
});
clearAllBtn.addEventListener("click", handleClearAll);


// ===== START APP =====
initApp();

// const exp = { id: "f47ac10b-58cc-4372-a567-0e02b2c3d479", title: "Coffee", amount: 15000 }
// const el = renderExpenseItem(exp)
// expenseList.appendChild(el)