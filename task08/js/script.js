'use strict';

window.addEventListener('DOMContentLoaded', function() {

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    infoMain = document.querySelector('.info');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(e) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer 

  let deadline = '2020-02-10';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60) + '',
      minutes = Math.floor((t / 1000 / 60) % 60) + '',
      hours = Math.floor((t / (1000 * 60 * 60))) + '';




    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(digit) {
        if (digit.length == 1) {
          digit = '0' + digit;
        }
        return digit;
      };

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

  let more = document.querySelector('.more');
  let overlay = document.querySelector('.overlay');
  let close = document.querySelector('.popup-close');

  more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  infoMain.addEventListener('click', function(e) {
    let target = event.target;
    if (target && target.classList.contains('description-btn')) {
      overlay.style.display = 'block';
      more.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
  });

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form');
  let input = form.getElementsByTagName('input');
  let statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);
    request.send(formData);

    request.addEventListener('readystatechange', function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }

  });

  let contactForm = document.querySelector('#form');
  let inputContactForm = contactForm.getElementsByTagName('input');

  statusMessage.classList.add('status');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

    let formDataContact = new FormData(form);
    request.send(formDataContact);

    request.addEventListener('readystatechange', function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < inputContactForm.length; i++) {
      inputContactForm[i].value = '';
    }

  });

});





