// @ts-nocheck
// ===== DOM ELEMENTS =====
const expenseList = document.querySelector("#expenseList");
const totalText = document.querySelector("#totalText");
const emptyText = document.querySelector("#emptyText");
const countBadge = document.querySelector("#countBadge");

// ===== RENDER FUNCTIONS =====
export function renderExpenses(expenses) {
    expenses.forEach(exp => {
        //exp =  {id, title, amount}
        const li = renderExpenseItem(exp)
        expenseList.appendChild(li)
    });
}

export function renderExpenseItem(expense) {
    return createExpenseElement(expense)
}

export function renderTotal(total) {
    totalText.textContent = total
}

export function renderEmptyState(count) {
    if (count === 0) {
        emptyText.classList.remove("hidden")
    } else {
        emptyText.classList.add("hidden")
    }
}

export function updateCountBadge(count) {
    countBadge.textContent = `${count} ta`
}

// ===== UI HELPERS =====
//expense =  {id, title, amount}
function createExpenseElement(expense) {
    const li = document.createElement("li")
    li.className = "flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3"
    // left
    const leftDiv = document.createElement("div")

    const titleP = document.createElement("p")
    titleP.className = "font-medium"
    titleP.textContent = expense.title

    const idP = document.createElement("p")
    idP.className = "text-xs text-zinc-400"
    idP.textContent = expense.id
    // right
    const rightDiv = document.createElement("div")
    rightDiv.className = "flex items-center gap-3"

    const amountP = document.createElement("p")
    amountP.className = "font-semibold"
    amountP.textContent = expense.amount

    const delBtn = document.createElement("button")
    delBtn.className = "rounded-lg bg-rose-600 px-3 py-2 text-xs font-medium text-white hover:bg-rose-500"
    delBtn.textContent = "Delete"

    leftDiv.appendChild(titleP)
    leftDiv.appendChild(idP)

    rightDiv.appendChild(amountP)
    rightDiv.appendChild(delBtn)

    li.appendChild(leftDiv)
    li.appendChild(rightDiv)
    return li
}

function clearList() { }