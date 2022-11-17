// navbar

function navBar() {
    let nav = document.querySelector('.header');
    let body = document.querySelector('body');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            nav.classList.add('fixed');
            body.style.paddingTop = '50px';
        } else {
            nav.classList.remove('fixed');
            body.style.paddingTop = '0';
        }
    });
}
navBar();