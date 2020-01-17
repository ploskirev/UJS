'use strict';

let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');

// Задание 2.1.1
menu.insertBefore(menuItems[1], menuItems[3]);

// Задание 2.1.2
let fifthMenuItem = document.createElement('li');
fifthMenuItem.classList.add('menu-item');
fifthMenuItem.innerText = 'Пятый пункт';
menu.appendChild(fifthMenuItem);

// Задание 2.2
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// Задание 2.3
let heading = document.getElementById('title');
heading.textContent  = 'Мы продаем только подлинную технику Apple';

// Задание 2.4
let cols = document.querySelectorAll('.column');
let advert = document.querySelector('.adv');
cols[1].removeChild(advert);


// Задание 2.5
let feedback = cols[1].querySelector('#prompt');
feedback.textContent = prompt('Какое у Вас отношение к технике Apple?', '');
