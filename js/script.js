const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    document.body.classList.toggle('lock');
    menuBody.classList.toggle('active');
})