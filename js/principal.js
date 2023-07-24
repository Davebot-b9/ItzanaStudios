"use strict";
//Header animado
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
        menu.style.top = '100px'
        abrir.style.color = '#000';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '110px'
        abrir.style.color = '#000';
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
window.addEventListener('click', function (e) {
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll', function () {
    menus();
});
window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function () {
    apertura();
});

// const servicio1 = document.querySelector(".servicio1");
// const servicio2 = document.querySelector(".servicio2");
// const body = document.querySelector("body");

// servicio1.addEventListener("mouseover", () => {
// 	servicio1.style.transform = "translateX(320px)";
// 	servicio2.style.transform = "translateX(1000px)";
// });

// servicio1.addEventListener("mouseout", () => {
// 	servicio1.style.transform = "translateX(0px)";
// 	servicio2.style.transform = "translateX(0px)";
// 	//body.style.backgroundImage = "url(/Images/other-fondo.png) no-repeat center center fixed";
// });

// servicio2.addEventListener("mouseover", () => {
// 	servicio1.style.transform = "translateX(-1000px)";
// 	servicio2.style.transform = "translateX(-320px)";
// });

// servicio2.addEventListener("mouseout", () => {
// 	servicio1.style.transform = "translateX(0px)";
// 	servicio2.style.transform = "translateX(0px)";
// 	// body.style.backgroundImage = "url(/Images/other-fondo.png) no-repeat center center fixed";
// });

// function cambiarFondo(servicio) {
//     const body = document.body;
//     if (servicio === "game") {
//         body.style.background = "url(/img/game2-fondo.jpg) no-repeat center center fixed";
//     } else if (servicio === "film") {
//         body.style.background = "url(/img/music-fondo.jpg) no-repeat center center fixed";
//     }
// }