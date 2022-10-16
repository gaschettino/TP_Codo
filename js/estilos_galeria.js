const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");

// Voy a obtener el último elemento y lo ubico donde quiero, ahora voy a hacerlo después de que termine
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next () {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev () {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev();
});
/*
// Para que se ejecute automáticamente cada 5 segundos
setInterval(function(){
    Next();
}, 5000);
*/
const fotoBebe = document.querySelector("#foto_bebe");
const fotoNiños = document.querySelector("#foto_niños");
const fotoQuince = document.querySelector("#foto_quince");
const fotoEmb = document.querySelector("#foto_embarazadas");
const fotoFam = document.querySelector("#foto_familia");

function mostrarBB() {
    document.getElementById('BB').style.display = 'block';
}
function mostrarNiños() {
    document.getElementById('Niños').style.display = 'block';
}
function mostrar15años() {
    document.getElementById('XVaños').style.display = 'block';
}
function mostrarEmbarazadas() {
    document.getElementById('Embarazadas').style.display = 'block';
}
function mostrarFamilia() {
    document.getElementById('Familia').style.display = 'block';
}
function ocultarTodo() {
    document.getElementById('BB').style.display = "none";
    document.getElementById('Niños').style.display = "none";
    document.getElementById('XVaños').style.display = "none";
    document.getElementById('Embarazadas').style.display = "none";
    document.getElementById('Familia').style.display = "none";
}
      

fotoBebe.addEventListener('click', function(){
    ocultarTodo();
    mostrarBB();
});
fotoNiños.addEventListener('click', function(){
    ocultarTodo();
    mostrarNiños();
});
fotoQuince.addEventListener('click', function(){
    ocultarTodo();
    mostrar15años();
});
fotoEmb.addEventListener('click', function(){
    ocultarTodo();
    mostrarEventos();
});
fotoFam.addEventListener('click', function(){
    ocultarTodo();
    mostrarFamilia();
});
