'use strict';
const navbar = document.querySelector('#navbar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');
const contactBtn = document.querySelector('.button__contactme');
const upArrowBtn = document.querySelector('.button__arrow-up');
const mainNavLinks = document.querySelectorAll('.navbar__menu li');
const mainSections = document.querySelectorAll('section');

// Navbar
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbar__menu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('visible');
})
function navbarEffect() {
    const homeBottom = home.getBoundingClientRect().bottom;
    const navbarHeight = navbar.getBoundingClientRect().height;
    navbar__menu.classList.remove('visible');
    if ( window.scrollY > navbarHeight ) {
        navbar.classList.add('navbar-color');
    } else {
        navbar.classList.remove('navbar-color');
    }
    const navOpacity = homeBottom / window.scrollY;
    home.style.opacity = `${navOpacity}`;
}

// Work
const projectBtns = document.querySelector('.work__btns');
const projectBtn = document.querySelectorAll('.work__btn');
const workCount = document.querySelectorAll('.work__count');
const projects = document.querySelectorAll('.work__item');
const projectContainer = document.querySelector('.work__items');
projectBtns.addEventListener('click', (e) => {
    const active = document.querySelector('.work__btn.active');
    active.classList.remove('active');
    e.target.nodeName === 'BUTTON' ? e.target.classList.add('active') 
                                    : e.target.parentNode.classList.add('active');
    projectContainer.classList.add('invisible');
    setTimeout(() => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if ( filter === null) {
            return;
        }
        projects.forEach((project) => {
            if ( filter === 'all' || filter === project.dataset.type) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        })
        projectContainer.classList.remove('invisible');
    },150);
})


function toSection(event) {
    const target = event.target.dataset.link;
    const scrollTo = document.querySelector(target);
    scrollTo && scrollTo.scrollIntoView({behavior : 'smooth'});
}

upArrowBtn.addEventListener('click', event => {
    toSection(event);
})





function displayArrowBtn() {
    if ( window.scrollY > skills.getBoundingClientRect().top) {
        upArrowBtn.classList.remove('hide');
    } else {
        upArrowBtn.classList.add('hide');
    }
}

window.addEventListener('scroll', event => {
    navbarEffect();
    navbarMenuMove();
    displayArrowBtn();
})

navbar.addEventListener('click', (event) => {
    toSection(event);
})

contactBtn.addEventListener('click', (event) => {
    toSection(event);
})



function navbarMenuMove() {
    const homeRect = home.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();
    const skillsRect = skills.getBoundingClientRect();
    const workRect = work.getBoundingClientRect();
    const testimonialsRect = testimonials.getBoundingClientRect();
    const contactRect = contact.getBoundingClientRect();

    if( homeRect.top < window.scrollY <= homeRect.bottom ) {
        mainNavLinks[1].style.border = 'none';
        mainNavLinks[0].style.border = '1px solid var(--color-white)';
    } 
    else if( aboutRect.top < window.scrollY <= aboutRect.bottom ) {
        mainNavLinks[0].style.border = 'none';
        mainNavLinks[2].style.border = 'none';
        mainNavLinks[1].style.border = '1px solid var(--color-white)';
    }
    else if( skillsRect.top < window.scrollY <= skillsRect.bottom ) {
        mainNavLinks[1].style.border = 'none';
        mainNavLinks[3].style.border = 'none';
        mainNavLinks[2].style.border = '1px solid var(--color-white)';
    }
    else if( workRect.top < window.scrollY <= workRect.bottom ) {
        mainNavLinks[2].style.border = 'none';
        mainNavLinks[4].style.border = 'none';
        mainNavLinks[3].style.border = '1px solid var(--color-white)';

    }
    else if( testimonialsRect.top < window.scrollY <= testimonialsRect.bottom ) {
        mainNavLinks[3].style.border = 'none';
        mainNavLinks[5].style.border = 'none';
        mainNavLinks[4].style.border = '1px solid var(--color-white)';

    }
    else {
        mainNavLinks[4].style.border = 'none';
        mainNavLinks[5].style.border = '1px solid var(--color-white)';
    }
}

