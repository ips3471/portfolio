'use strict';
const navbar = document.querySelector('#navbar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

const navbar__menu = document.querySelector('.navbar__menu');

const mainNavLinks = document.querySelectorAll('.navbar__menu li');
const mainSections = document.querySelectorAll('section');
// Global
const scrolled = window.scrollY;
const homeHeight = home.getBoundingClientRect().height - navbar.getBoundingClientRect().height;




function onScroll() {
    let scrollY = window.scrollY;
    if ( scrollY < homeHeight ) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = 'var(--color-white-blue)';
        navbar.style.opacity = '0.9';
    }}

navbar.addEventListener('click', (event) => {
    let target = event.target.dataset.link;
    let toTarget = document.querySelector(target);
    target && toTarget.scrollIntoView({behavior: 'smooth'});
})

window.addEventListener('scroll', () => {
    onScroll();
    navbarChange();
})

function navbarChange() {
    const homeRect = home.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();
    const skillsRect = skills.getBoundingClientRect();
    const workRect = work.getBoundingClientRect();
    const testimonialsRect = testimonials.getBoundingClientRect();
    const contactRect = contact.getBoundingClientRect();

    if( homeRect.top < scrolled <= homeRect.bottom ) {
        mainNavLinks[1].style.border = 'none';
        mainNavLinks[0].style.border = '1px solid var(--color-white)';
    } 
    else if( aboutRect.top < scrolled <= aboutRect.bottom ) {
        mainNavLinks[0].style.border = 'none';
        mainNavLinks[2].style.border = 'none';
        mainNavLinks[1].style.border = '1px solid var(--color-white)';
    }
    else if( skillsRect.top < scrolled <= skillsRect.bottom ) {
        mainNavLinks[1].style.border = 'none';
        mainNavLinks[3].style.border = 'none';
        mainNavLinks[2].style.border = '1px solid var(--color-white)';
    }
    else if( workRect.top < scrolled <= workRect.bottom ) {
        mainNavLinks[2].style.border = 'none';
        mainNavLinks[4].style.border = 'none';
        mainNavLinks[3].style.border = '1px solid var(--color-white)';

    }
    else if( testimonialsRect.top < scrolled <= contactRect.bottom - testimonialsRect.height ) {
        mainNavLinks[3].style.border = 'none';
        mainNavLinks[5].style.border = 'none';
        mainNavLinks[4].style.border = '1px solid var(--color-white)';

    }
    else if( contactRect.bottom - testimonialsRect.height < scrolled ) {
        mainNavLinks[4].style.border = 'none';
        mainNavLinks[5].style.border = '1px solid var(--color-white)';

    }
}

