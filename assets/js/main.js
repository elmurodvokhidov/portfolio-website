/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
};


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
};


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
};

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        });

        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // mousewheel: true,
    // keyboard: true,
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(a => {
        const sectionHeight = a.offsetHeight;
        const sectionTop = a.offsetTop - 50;
        let sectionId = a.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
};

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
};

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});