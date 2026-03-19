// @ts-nocheck
// ===== PRIVATE STATE =====
let expenses = [];

// ===== CRUD FUNCTIONS =====
export function addExpense(expense) {
    // {id, title, amount}
    const newExpense = {
        id: generateId(),
        ...expense
    }
    expenses.push(newExpense)
}

export function removeExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id)
}

export function clearExpenses() {
    expenses = []
}

export function getExpenses() {
    return [...expenses]
}

export function getTotal() {
    // const totalExp = expenses.reduce((total, currentExp) => {
    //     return total += currentExp.amount
    // }, 0)
    // return totalExp
    let sum = 0
    for (let exp of expenses) {
        sum += exp.amount
    }
    return sum
}

// ===== HELPERS =====
function generateId() {
    const uuid = crypto.randomUUID()
    return uuid
}