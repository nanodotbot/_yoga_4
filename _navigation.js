const bodies = document.querySelectorAll('body');

const navModal = document.getElementById('nav-modal');
const navMenu = document.getElementById('nav-menu');
const modalLinks = document.querySelectorAll('.modal-link');

const main = document.getElementById('main');
const footer = document.getElementById('footer');

navMenu.onclick = () => {
    navModal.classList.toggle('active');
    navMenu.classList.toggle('active');
    bodies.forEach(body => body.classList.toggle('no-scroll'));
    main.classList.toggle('inactive');
    footer.classList.toggle('inactive');
};

modalLinks.forEach(modalLink => {
    modalLink.onclick = () =>{
        navModal.classList.toggle('active');
        navMenu.classList.toggle('active');
        bodies.forEach(body => body.classList.toggle('no-scroll'));
        main.classList.toggle('inactive');
        footer.classList.toggle('inactive');    
    }
})