const hamburger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top');

hamburger.addEventListener('.click', function () {
    stickyTop.style.overflow = 'visible';
});