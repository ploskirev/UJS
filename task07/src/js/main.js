'use strict';

let startBtn = document.getElementById('start');
let resultTable = document.querySelector('.result-table');
//let resultTableItems = resultTable.querySelectorAll('[class$="-value"]');

let budgetValue = resultTable.querySelector('.budget-value');
let dayBudgetValue = resultTable.querySelector('.daybudget-value');
let levelValue = resultTable.querySelector('.level-value');
let expensesValue = resultTable.querySelector('.expenses-value');
let optionalExpensesValue = resultTable.querySelector('.optionalexpenses-value');
let incomeValue = resultTable.querySelector('.income-value');
let monthsavingsValue = resultTable.querySelector('.monthsavings-value');
let yearsavingsValue = resultTable.querySelector('.yearsavings-value');



let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


let money,
  time;

startBtn.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');
  while (isNaN(money) || money == null || money == '') {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budjet = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
})

expensesBtn.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;
    if (a != null && b != null && a != '' && b != '') {
      appData.expenses[a] = b;
      sum += +b;
      expensesValue.textContent = sum;
    } else {
      i = i - 1;
    }
  }
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let optionalExpensesCat = optionalExpensesItems[i].value;
    appData.optionaExpenses[i] = optionalExpensesCat;
    optionalExpensesValue.textContent += appData.optionaExpenses[i] + ', ';
  }
});

countBtn.addEventListener('click', function() {

  if (appData.budjet != undefined) {
    appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent)/ 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budjet: money,
  expenses: {},
  optionaExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};


// for (let prop in appData) {
//   console.log('Наша программа включает в себя данные: ' + prop + ': ' + appData[prop]);
// }