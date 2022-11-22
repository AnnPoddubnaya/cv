
//-------burger
const burgerBtn = document.querySelector('.header');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');

const bar3 = document.querySelector('.bar3');


const menuBurger = document.querySelector('.navigation');
burgerBtn.addEventListener('click', function () {
 menuBurger.classList.toggle("open"); 
bar1.classList.toggle('open');
bar2.classList.toggle('open');
bar3.classList.toggle('open');
}  );


//-------slider

const sliderLine = document.querySelector('.progects__items-slider');
const btnRight = document.querySelector('.button-right');
const btnLeft = document.querySelector('.button-left');

let offset = 0;

btnRight.addEventListener('click', function(){
offset = offset + 460;
if(offset > 1840){
    offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

btnLeft.addEventListener('click', function(){
    offset = offset - 460;
    if(offset < 0){
        offset = 1840;
    }
    sliderLine.style.left = -offset + 'px';
});

//---------slider-mob

const slidLine = document.querySelector('.slider-mob__items-line');
const btnPrev = document.querySelector('.button-prev');
const btnNext = document.querySelector('.button-next');

let step = 0;

btnPrev.addEventListener('click', function(){
    step = step + 300;
    if(step > 1500){
        step = 0;
    }
    slidLine.style.left = -step + 'px';
});

btnNext.addEventListener('click', function(){
    step = step - 300;
    if(step < 0){
        step = 1500;
    }
    slidLine.style.left = -step + 'px';
})





























