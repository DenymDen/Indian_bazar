$(document).ready(function () {
   $('.slider').slick();
});

$(document).ready(function () {
   $('.slider-top-products').slick({
      slidesToShow: 3,
   });
});

const navBtn = document.querySelector('.button');
const menuNav = document.querySelector('.menu-nav');

navBtn.addEventListener('click', function (event) {
   toggleMenuNav();
   event.stopPropagation();
})

window.addEventListener('click', function () {
   if (menuNav.classList.contains('menu-nav-active')) {
      toggleMenuNav();
   }
})

menuNav.addEventListener('click', function (event) {
   event.stopPropagation();
})

function toggleMenuNav() {
   menuNav.classList.toggle('menu-nav-active');
}

// MOBILE-NAV

const mobNavBtn = document.querySelector('.mobile-nav-button');
const mobileNav = document.querySelector('.mobile-menu-nav');
const body = document.body;

mobNavBtn.addEventListener('click', function(event) {
   toggleMobileNav();
   event.stopPropagation();
})

mobNavBtn.addEventListener('click', function(event) {
   event.stopPropagation();
})


function toggleMobileNav() {
   mobileNav.classList.toggle('menu-nav-active');
   mobNavBtn.classList.toggle('nav-button-close');
   body.classList.toggle('no-scroll');
}