"use strict";
//variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
//Funciones
function menus() {
    let desplazamiento_actual = window.pageYOffset;

    if (desplazamiento_actual <= 100) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top='100px'
        abrir.style.color='#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top='110px'
        abrir.style.color='#000';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden'
        cerrado = true;
    }
}
//Eventos
window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden')
    menus();
});
window.addEventListener('click', function(e){
    if (cerrado==false) {
        let span=document.querySelector('span');
        if (e.target!==span && e.target!==abrir) {
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
});

window.addEventListener('scroll', function () {
    menus();
});
window.addEventListener('resize', function(){
    if (screen.width>=700) {
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function () {
    apertura();
});

// Obtener los elementos de la galería
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Guardar la posición actual
let posicion = 0

// Función para cambiar la imagen
function cambiarImagen() {
    // Incrementar la posición y volver a 0 cuando se alcanza el límite
    posicion = (posicion + 1) % punto.length

    // Calcular la posición de la imagen y actualizar el estilo
    let operacion = posicion * -10
    grande.style.transform = `translateX(${operacion}%)`

    // Actualizar la clase activa en el punto correspondiente
    punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove('activo')
    })
    punto[posicion].classList.add('activo')
}

// Ejecutar la función cada 3 segundos
setInterval(cambiarImagen, 3000)

const form = document.getElementById('formu');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', function (event) {
    // Validar el campo de Nombre
    if (!nameInput.value.match(/^[a-zA-Z\s]*$/)) {
        alert('El campo Nombre no puede contener números.');
        event.preventDefault();
        return false;
    }

    // Validar el campo de Teléfono
    if (!phoneInput.value.match(/^[0-9]*$/)) {
        alert('El campo Teléfono no puede contener letras.');
        event.preventDefault();
        return false;
    }

    // Validar el campo de Email
    if (!emailInput.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        alert('El campo Email debe ser una dirección de correo electrónico válida.');
        event.preventDefault();
        return false;
    }

    // Validar el campo de Mensaje
    if (messageInput.value.trim().length > 300) {
        alert('El campo Mensaje sobrepaso los 300 caracteres.');
        event.preventDefault();
        return false;
    }

    if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Por favor llene todos los campos del formulario.');
        event.preventDefault();
        return false;
        }

    // Mostrar mensaje de éxito
    alert('Los datos se han enviado correctamente.');
    return true;
});
