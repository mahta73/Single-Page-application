'use strict'

// routing 
let countryMainBody = document.getElementById('country__mainBody');
let muneItems = document.querySelectorAll('.menu__item');
let allPages = document.querySelectorAll('.page');


const app = {
    pages: [],
    show: new Event('show'),
    init: () => {
        app.pages = Array.from(allPages);
        app.pages.forEach(page => {
            page.addEventListener('show', app.pageShown);
        });

        muneItems.forEach(link => link.addEventListener('click', app.nav));

        history.replaceState({}, '', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(e) {
        e.preventDefault();
        let currentPage = e.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(`${currentPage}`).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(e) {
        console.log('page', e.target.id, 'just shown');
    },
    poppin: function(ev) {
        let hash = location.hash.replace('#' ,'');
        console.log(hash);
        document.querySelector('.active').classList.remove('active');
        document.getElementById(`${hash}`).classList.add('active');
        document.getElementById(`${hash}`).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);
