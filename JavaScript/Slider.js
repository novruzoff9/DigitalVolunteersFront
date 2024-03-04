const CarouselSlide = document.querySelector(".slides");
const CarouselImages = document.querySelectorAll(".slides img");

const PrevBtn = document.querySelector("#slide-right");
const NextBtn = document.querySelector("#slide-left");

const progressbar = document.querySelector(".slider-progressbar");

let counter = 1;
const size = CarouselImages[0].clientWidth;

CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

NextBtn.addEventListener('click',()=>{
    time = 0;
    if(counter >=CarouselImages.length -1 ) return;
    CarouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter++;
    CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
PrevBtn.addEventListener('click',()=>{
    time = 0;
    if(counter <=0 ) return;
    CarouselSlide.style.transition ="transform 0.4s ease-in-out";
    counter--;
    CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});    

CarouselSlide.addEventListener('transitionend',()=>{
    if(CarouselImages[counter].id === "last-clone"){
        CarouselSlide.style.transition="none";
        counter = CarouselImages.length - 2;
        CarouselSlide.style.transform='translateX(' +(-size*counter)+'px)';
    }
    if(CarouselImages[counter].id === "first-clone"){
        CarouselSlide.style.transition="none";
        counter = CarouselImages.length - counter;
        CarouselSlide.style.transform='translateX(' +(-size*counter)+'px)';
    }
});

var time = 0;
setInterval(function(){
    time++;
    var width = time/360 * 100 + '%';
    progressbar.style.width = width;
    if(time == 360){
        if(counter >=CarouselImages.length -1 ) return;
        CarouselSlide.style.transition ="transform 0.4s ease-in-out";
        counter++;
        CarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        time = 0;
    }
}, 10);