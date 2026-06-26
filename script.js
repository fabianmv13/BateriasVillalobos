

// Lógica para el Carrusel de Imágenes Autónomo
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    // 1. Quitamos la clase activa a la imagen que se está mostrando actualmente
    slides[currentSlide].classList.remove('active');
    
    // 2. Calculamos el índice de la siguiente imagen de forma cíclica
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 3. Le añadimos la clase activa a la nueva imagen para que haga el desvanecimiento
    slides[currentSlide].classList.add('active');
}

// 4. Arrancar el temporizador: cambia de imagen automáticamente cada 4 segundos (4000ms)
setInterval(nextSlide, 4000);


// Mensaje de bienvenida en consola para verificar que tu JS está conectado correctamente
console.log("¡Sitio web de Baterías Villalobos cargado con éxito!");

// Pequeño script para suavizar el scroll al hacer clic en el menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

