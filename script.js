function aumentarTamanho(elemento) {
    elemento.style.transform = "scale(1.3)";
}

function restaurarTamanho(elemento) {
    elemento.style.transform = "scale(1)";
}


function rotacionar(elemento) {
    elemento.classList.toggle("rotacionado");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('meuElemento').classList.add('animacao');

window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateY(' + window.scrollY * 0.5 + 'px)';
});
