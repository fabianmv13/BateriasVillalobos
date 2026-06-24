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