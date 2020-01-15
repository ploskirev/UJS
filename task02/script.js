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

for (let i = 0; i < 2; i++) {
    while (true) {
        let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
        let expCatMoney = prompt('Во сколько это обойдется?', '');
        if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
            appData.expenses[expCat] = expCatMoney;
            break;
        }
    }
};



/* Решения по-умолчанию. Цикл for
for (let i = 0; i < 2; i++) {
    let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
    let expCatMoney = prompt('Во сколько это обойдется?', '');

    if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
        appData.expenses[expCat] = expCatMoney;
    } else {
        while (true) {
            expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
            expCatMoney = prompt('Во сколько это обойдется?', '');
            if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
                appData.expenses[expCat] = expCatMoney;
                break;
            }
        }
    }
};
*/

/* Решения по-умолчанию. Цикл while
let i = 0;
while (i < 2) {
    let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
    let expCatMoney = prompt('Во сколько это обойдется?', '');
    if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
        appData.expenses[expCat] = expCatMoney;
    } else {
        while (true) {
            expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
            expCatMoney = prompt('Во сколько это обойдется?', '');
            if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
                appData.expenses[expCat] = expCatMoney;
                break;
            }
        }
    }
    i++;
}
*/

/* Решения по-умолчанию. Цикл do while
let i = 0;
do {
    let expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
    let expCatMoney = prompt('Во сколько это обойдется?', '');
    if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
        appData.expenses[expCat] = expCatMoney;
    } else {
        while (true) {
            expCat = prompt('Введите обязательную статью расходов в этом месяце', '');
            expCatMoney = prompt('Во сколько это обойдется?', '');
            if (expCat != null && expCatMoney != null && expCat != '' && expCatMoney != '') {
                appData.expenses[expCat] = expCatMoney;
                break;
            }
        }
    }
    i++;
}
while (i < 2);
*/

appData.moneyPerDay = appData.budjet / 30;
alert('Ваш бюджет на 1 день составляет: ' + appData.moneyPerDay + ' рублей');

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}