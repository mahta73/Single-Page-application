'use strict'

// routing 

let firstPage = document.getElementById('firstPage');
let secondPage = document.getElementById('secondPage');

let firstPage_menuItem = document.getElementById('menu__firstPage');
let secondPage_menuItem = document.getElementById('menu__secondPage');

firstPage_menuItem.addEventListener('click', () => {
    firstPage.style.display = 'block';
    secondPage.style.display = 'none';
});

secondPage_menuItem.addEventListener('click', () => {
    secondPage.style.display = 'block';
    firstPage.style.display = 'none';
});

