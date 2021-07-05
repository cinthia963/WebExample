
/*menu*/
const btnmenu =document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnmenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
})


/* galeria 1*/ 
let slider = document.querySelector('.contenido-slider');
let sliderInd = document.querySelectorAll('.slider-imagenes');
let contador = 1;
let tamano = sliderInd[0].clientWidth;
let intervalo = 3500;

setInterval(() => {
    slide()
}, intervalo)

function slide() {
    slider.style.transform = "translate("+(- tamano * contador)+"px)";
    slider.style.transition = `transform .3s`;
    contador++;

    if (contador === sliderInd.length) {
      setTimeout(() => {
            slider.style.transform = `translate(0px)`
            slider.style.transition = `transform 0s`;
            contador=1;
        }, 1500)


    }

}

const hover = document.querySelector("#menu-slider");
let hoverSection = document.querySelectorAll(".imagenes-slider");
let hoverSectionLast = hoverSection[hoverSection.length -1];


const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

hover.insertAdjacentElement('afterbegin', hoverSectionLast);

function Next(){
    let hoverSectionFirst = document.querySelectorAll(".imagenes-slider")[0];
    hover.style.marginLeft="-200%";
    hover.style.transition ="all 0.5s";
    setTimeout(function(){
        hover.style.transition = "none";
        hover.insertAdjacentElement('beforeend', hoverSectionFirst);
        hover.style.marginLeft="-100%";
    }, 500);
}
btnright.addEventListener('click', function(){
    Next();    
})

function previo(){
    let hoverSection = document.querySelectorAll(".imagenes-slider");
    let hoverSectionFirst = document.querySelectorAll(".imagenes-slider")[0];
    hover.style.marginLeft="0";
    hover.style.transition ="all 0.5s";
    setTimeout(function(){
        hover.style.transition = "none";
        hover.insertAdjacentElement('afterbegin', hoverSectionLast);
        hover.style.marginLeft="-100%";
    }, 500);
}
btnleft.addEventListener('click', function(){
    Next();    
})
