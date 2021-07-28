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
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-color');
    } else {
        navbar.classList.remove('navbar-color');
    }
    const navOpacity = homeBottom / window.scrollY;
    home.style.opacity = navOpacity;
}

// Work
const projectBtns = document.querySelector('.work__btns');
const projectBtn = document.querySelectorAll('.work__btn');
const workCount = document.querySelectorAll('.work__count');
const projects = document.querySelectorAll('.work__item');
const projectContainer = document.querySelector('.work__items');
projectBtns.addEventListener('click', (e) => {
    if (!e.target.dataset.filter) {
        return;
    }
    const active = document.querySelector('.work__btn.active');
    active && active.classList.remove('active');
    e.target.nodeName === 'BUTTON' ? e.target.classList.add('active')
        : e.target.parentNode.classList.add('active');
    projectContainer.classList.add('invisible');
    setTimeout(() => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if (filter === null) {
            return;
        }
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.type) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        })
        projectContainer.classList.remove('invisible');
    }, 150);
})


function toSection(target) {
    const scrollTo = document.querySelector(target);
    const prevNavItem = document.querySelector('.navbar__menu__item.active');
    const clickedNavItem = document.querySelector(`[data-link='${target}']`);
    prevNavItem && prevNavItem.classList.remove('active');
    clickedNavItem && clickedNavItem.classList.add('active');
    scrollTo && scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

upArrowBtn.addEventListener('click', event => {
    toSection('#home');
})





function displayArrowBtn() {
    if (window.scrollY > skills.getBoundingClientRect().top) {
        upArrowBtn.classList.remove('hide');
    } else {
        upArrowBtn.classList.add('hide');
    }
}




window.addEventListener('wheel', () => {
    if (window.scrollY === 0) {
        selectedNavIndex = 0;
    }
    else if (Math.ceil(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
        selectedNavIndex = navItems.length - 1;
    }
    selectNavMenu(navItems[selectedNavIndex]);
})

window.addEventListener('scroll', () => {
    const navbar__menu__open = navbar__menu.classList.contains('visible');
    navbar__menu__open && navbar__menu.classList.remove('visible');
    navbarEffect();
    displayArrowBtn();
})

navbar.addEventListener('click', (event) => {
    let target = event.target.dataset.link; //#home ~ #contact
    target && navbar__menu.classList.toggle('visible');
    toSection(target);
})

contactBtn.addEventListener('click', (event) => {
    toSection(event);
})






const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    // '#testimonials',
    '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
let selectedNavItem = navItems[0];
let selectedNavIndex;
const observerOptions = {
    root: null, //viewport
    rootMargin: '0px',
    threshold: 0.4,
}
function selectNavMenu(selected) {
    selectedNavItem && selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem && selectedNavItem.classList.add('active');
}
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            if (entry.boundingClientRect.y < 0) {
                selectedNavIndex = index + 1;
            } else {
                selectedNavIndex = index - 1;
            }
        }
    })
}
const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));
