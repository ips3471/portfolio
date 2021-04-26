'use strict';
const navbar = document.querySelector('#navbar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');
const contactBtn = document.querySelector('.button__contactme');
const navbar__menu = document.querySelector('.navbar__menu');
const upArrowBtn = document.querySelector('.button__arrow-up');
const mainNavLinks = document.querySelectorAll('.navbar__menu li');
const mainSections = document.querySelectorAll('section');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const projectBtns = document.querySelector('.work__btns');
const projectBtn = document.querySelectorAll('.work__btn');
const workCount = document.querySelectorAll('.work__count');
// Global



function toSection(event) {
    const target = event.target.dataset.link;
    const scrollTo = document.querySelector(target);
    scrollTo && scrollTo.scrollIntoView({behavior : 'smooth'});
}



function projectFilter(target) {
    const projects = Array.from(document.querySelectorAll('.work__item'));
    const project = projects.filter(item => item.dataset.type === target );
    projects.forEach(item => item.classList.remove('project__visible')); //reset

    if ( target === 'all' ) {
        projects.forEach(item => item.classList.add('project__visible'));
    } else {
        project.forEach(item => item.classList.add('project__visible'));
    }

}

function projectSelector(event) {
    projectBtn.forEach(item => item.classList.remove('btn__selected')); //reset
    workCount.forEach(item => item.classList.remove('active'));
    
    event.target.classList.add('btn__selected');
}

projectBtns.addEventListener('click', event => {
    let target = event.target.dataset.id; //all, front-end, back-end, mobile
    target && projectSelector(event);
    target && projectFilter(target);
})

upArrowBtn.addEventListener('click', event => {
    toSection(event);
})

navbarToggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('visible');
})


function navbarEffect() {
    let homeBottom = home.getBoundingClientRect().bottom;
    let navbarHeight = navbar.getBoundingClientRect().height;
    if ( window.scrollY > navbarHeight ) {
        navbar.classList.add('navbar-color');
    } else {
        navbar.classList.remove('navbar-color');
    }
    const navOpacity = homeBottom / window.scrollY;
    home.style.opacity = `${navOpacity}`;
}

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

