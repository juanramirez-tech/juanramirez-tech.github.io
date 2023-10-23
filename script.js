
// Funciones de desplazamiento pra desktop

function scrollToSection() {
    // Obtiene la posición de la sección de destino (INICIO)
    var destino = document.getElementById("inicio");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 140; // Ajusta según tu barra de navegación
    posicion -= espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_1() {
    // Obtiene la posición de la sección de destino (SOBRE MI)
    var destino = document.getElementById("sobre-mi");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 430; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_2(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (PORTAFOLIO)
    var destino = document.getElementById("portafolio-titulo");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 780; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_3(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (EXPERIENCIA)
    var destino = document.getElementById("experiencia");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 1700; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_4(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (EXPERIENCIA)
    var destino = document.getElementById("experiencia");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 3000; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}



// Funciones de desplazamiento para monbile

document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.querySelector('.icon-menu');
    const mobileMenu = document.querySelector('.menu_mobile');
    const closeButton = mobileMenu.querySelector('.close-button'); // Obtener el botón de cierre
    const closeButton1 = mobileMenu.querySelector('.close-button1'); // Obtener el botón de cierre
    const closeButton2 = mobileMenu.querySelector('.close-button2'); // Obtener el botón de cierre
    const closeButton3 = mobileMenu.querySelector('.close-button3'); // Obtener el botón de cierre
    const closeButton4 = mobileMenu.querySelector('.close-button4'); // Obtener el botón de cierre

    // Función para abrir el menú
    function abrirMenu() {
        mobileMenu.classList.remove('hidden');
        // Agregar un evento de clic al área fuera del menú para cerrarlo
        document.addEventListener('click', cerrarMenuFuera);
    }

    // Función para cerrar el menú cuando se hace clic fuera de él
    function cerrarMenuFuera(event) {
        if (!mobileMenu.contains(event.target) && !iconMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            // Eliminar el evento de clic fuera del menú
            document.removeEventListener('click', cerrarMenuFuera);
        }
    }

    // Función para cerrar el menú
    function cerrarMenu() {
        mobileMenu.classList.add('hidden');
    }

    // Agregar evento de clic al botón de cierre
    closeButton.addEventListener('click', cerrarMenu);
    closeButton1.addEventListener('click', cerrarMenu);
    closeButton2.addEventListener('click', cerrarMenu);
    closeButton3.addEventListener('click', cerrarMenu);
    closeButton4.addEventListener('click', cerrarMenu);

    iconMenu.addEventListener('click', abrirMenu);
});


function scrollToSection_mobile() {
    // Obtiene la posición de la sección de destino (INICIO)
    var destino = document.getElementById("inicio");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 140; // Ajusta según tu barra de navegación
    posicion -= espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_1_mobile() {
    // Obtiene la posición de la sección de destino (SOBRE MI)
    var destino = document.getElementById("sobre-mi");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 90; // Ajusta según tu barra de navegación
    posicion -= espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });

}

function scrollToSection_2_mobile(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (PORTAFOLIO)
    var destino = document.getElementById("portafolio-titulo");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 800; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_3_mobile(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (EXPERIENCIA)
    var destino = document.getElementById("experiencia");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 2000; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function scrollToSection_4_mobile(event) {
    event.preventDefault();

    // Obtiene la posición de la sección de destino (EXPERIENCIA)
    var destino = document.getElementById("experiencia");
    var posicion = destino.offsetTop;

    // Ajusta la posición para agregar espacio superior
    var espacioSuperior = 3550; // Ajusta según tu barra de navegación
    posicion += espacioSuperior;

    // Desplaza la página a la posición
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
}









