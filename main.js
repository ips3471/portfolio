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

const mainNavLinks = document.querySelectorAll('.navbar__menu li');
const mainSections = document.querySelectorAll('section');
// Global


function toSection(event) {
    let target = event.target.dataset.link;
    let toTarget = document.querySelector(target);
    target && toTarget.scrollIntoView({behavior : 'smooth'});
}


function navbarEffect() {
    let homeBottom = home.getBoundingClientRect().bottom;
    let navbarHeight = navbar.getBoundingClientRect().height;
    if ( window.scrollY > navbarHeight ) {
        navbar.classList.add('navbar-color');
    } else {
        navbar.classList.remove('navbar-color');
    }
    const navOpacity = 1 / window.scrollY * homeBottom;
    home.style.opacity = `${navOpacity}`;
}

window.addEventListener('scroll', () => {
    navbarEffect();
    navbarMenuMove();
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
    else if( testimonialsRect.top < window.scrollY <= contactRect.bottom - testimonialsRect.height ) {
        mainNavLinks[3].style.border = 'none';
        mainNavLinks[5].style.border = 'none';
        mainNavLinks[4].style.border = '1px solid var(--color-white)';

    }
    else if( contactRect.bottom - testimonialsRect.height < window.scrollY ) {
        mainNavLinks[4].style.border = 'none';
        mainNavLinks[5].style.border = '1px solid var(--color-white)';

    }
}

