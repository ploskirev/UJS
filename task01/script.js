"use strict";

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');
let appData = {
    budjet: money,
    expenses: {},
    optionaExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
let expCatMoney = +prompt('Во сколько это обойдется?', '');
let expCat2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expCatMoney2 = +prompt('Во сколько это обойдется?', '');

appData.expenses[expCat] = expCatMoney;
appData.expenses[expCat2] = expCatMoney2;

alert('Ваш бюджет на 1 день составляет: ' + appData.budjet / 30 + ' рублей');
