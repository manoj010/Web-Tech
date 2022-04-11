const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach(link => {
            if(link.getElementsByClassName.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = 'navLinkFade 2s ease forwards'; 
            }
        });

        menu.classList.toggle('toggle');
    });
}

navSlide();