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
