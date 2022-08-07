const hero = document.querySelector('#hero');
const sections = document.querySelectorAll('section');
const selector = document.querySelector('.selector');
const links = document.querySelectorAll('a');
const navBar = document.querySelector('nav');
const black = '#393d3f';
const white = '#ebebeb';

const observerOpts = { threshold: 0.25 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const li = document.querySelector(`[data-section=${entry.target.dataset.section}]`);
        let link = document.querySelector(`[data-section=${entry.target.id}] a`);

        const dimensions = li.getBoundingClientRect();
        if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove('black-text'));
            selector.style.width = `${dimensions.width + 10}px`;
            selector.style.height = `${dimensions.height}px`;
            selector.style.top = `${dimensions.top}px`;
            selector.style.left = `${dimensions.left}px`;
            if (link === null) {
                link = document.querySelector(`[data-section=${entry.target.dataset.section}]`);
            }
            link.classList.add('black-text');
        }
    });
}, observerOpts);

sections.forEach((section) => {
    observer.observe(section);
});

const heroSection = document.querySelector('#hero');
const confetti = document.querySelector('.confetti');
const goToProjects = document.querySelector('.to-projects');
const heroObserverOpts = { threshold: 0.8 };

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            goToProjects.classList.add('show');
        } else {
            goToProjects.classList.remove('show');
        }
    });
}, heroObserverOpts);

heroObserver.observe(heroSection);

const projectsSection = document.querySelector('#facebook');
goToProjects.addEventListener('click', () => {
    projectsSection.scrollIntoView();
});

const videoModal = document.querySelector('.video-modal');
const videoModalVideo = document.querySelector('.video-modal video');
const videoModalSource = document.querySelector('.video-modal source');
const videoModalDesc = document.querySelector('.video-modal p');
const videos = document.querySelectorAll('.images figure video');
videos.forEach((video) => {
    video.addEventListener('click', (e) => {
        const src = e.target.children[0].getAttribute('src');
        videoModal.classList.add('open');
        videoModalSource.setAttribute('src', src);
        videoModalDesc.textContent = e.target.dataset.desc;
        videoModalVideo.load();
    });
});

videoModal.addEventListener('click', (e) => {
    videoModal.classList.remove('open');
});

const contactSection = document.querySelector('#contact');
const contactObserverOpts = {
    threshold: 0.15,
};


contactObserver.observe(contactSection);

const aboutSection = document.querySelector('#about');


aboutObserver.observe(aboutSection);

const toTop = document.querySelector('.back-to-top');
toTop.addEventListener('click', () => {
    heroSection.scrollIntoView();
});

const name = document.querySelectorAll('#name-svg > path');
const lengths = [];
for (let i = 0; i < name.length; i++) {
    lengths.push(name[i].getTotalLength());
}
console.log(lengths);


const typed = new Typed(".typed", {
    strings: ["hi, I'm lucas", "Lucas Garcia"],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


function sendForm(e) {
    e.preventDefault();
}
