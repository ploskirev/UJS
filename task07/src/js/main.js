'use strict';

let startBtn = document.getElementById('start');
let resultTable = document.querySelector('.result-table');
let resultTableItems = resultTable.querySelectorAll('[class$="-value"]');
let expensesItems = document.querySelectorAll('.expenses-item');
let expensesBtn = document.querySelector('.expenses-item-btn');
let optExpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBtn = document.querySelector('.count-budget-btn');
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item');
let incomeField = document.querySelector('.choose-income');
let savingsCheckbox = document.querySelector('#savings');
let sumField = document.querySelector('#sum');
let percentField = document.querySelector('#percent');
let yearField = document.querySelector('.year-value');
let monthField = document.querySelector('.month-value');
let dayField = document.querySelector('.day-value');