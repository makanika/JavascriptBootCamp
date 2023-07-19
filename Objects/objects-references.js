let myAccount = {
    name: 'David Emiru Egwell',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)

//Build an Expense Tracker
//add income to the account and the amount of income
//reset the account reset the expenses and the income to zero
//Get account summary: Account of X has $ in Income and $ in expenses

//Add Income

let addIncome = function (account, income){
    account.income = account.income + income
}

//Reset Account
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return(`Account for ${account.name} has $${balance}. $${account.income} in Income and $${account.expenses} In expenses`)
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))