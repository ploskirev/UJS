"use strict";

function start() {
  while (isNaN(money) || money == null || money == '') {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');
  }
}

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    while (true) {
      let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
      let expCatMoney = prompt('Во сколько это обойдется?', '');
      if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
        appData.expenses[expCat] = expCatMoney;
        break;
      }
    }
  }
}

function checkSavings() {
  if (appData.savings) {
    let save = +prompt('Какова сумма накоплений?', '');
    let percent = +prompt('Под какой процент?', '');

    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
  }
}

function detectDayBudget() {
  appData.moneyPerDay = (appData.budjet / 30).toFixed();
  alert('Ваш бюджет на 1 день составляет: ' + appData.moneyPerDay + ' рублей');
}

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optionalExpensesCat = null;
    while (optionalExpensesCat == null || optionalExpensesCat == '') {
      optionalExpensesCat = prompt('Статья необязательных расходов', '');
      appData.optionaExpenses[i + 1] = optionalExpensesCat;
    }
  }
}

let money = null,
  time = null;

start();

let appData = {
  budjet: money,
  expenses: {},
  optionaExpenses: {},
  income: [],
  timeData: time,
  savings: true
};

chooseExpenses();

detectDayBudget();

checkSavings();

detectLevel();

chooseOptExpenses();