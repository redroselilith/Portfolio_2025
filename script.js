const burger = document.querySelector('.burger');
const navItemsLeft = document.querySelector('.nav-links.left').closest('.nav-items');
const navItemsRight = document.querySelector('.nav-links.right').closest('.nav-items');
const navLinks = document.querySelectorAll('.nav-links li a');

burger.addEventListener('click', () => {
    navItemsLeft.classList.toggle('active');
    navItemsRight.classList.toggle('active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navItemsLeft.classList.remove('active');
        navItemsRight.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});