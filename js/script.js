// navbar

function navBar() {
    let nav = document.querySelector('.header');
    let body = document.querySelector('body');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            nav.classList.add('fixed');
            body.style.padding = '50px';
        } else {
            nav.classList.remove('fixed');
            body.style.padding = '0';
        }
    });
}
navBar();