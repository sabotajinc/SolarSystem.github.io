function Slider (selector){
    this.selector = selector;
    this.rootEl = document.querySelector(selector);
    this.listOfSlides = this.rootEl.querySelector('.slider__slides');
    this.slides = Array.from(this.rootEl.querySelectorAll('.slider__slide'));
    this.buttons = this.rootEl.querySelector('.slider__pages');
    this.button = Array.from(this.buttons.querySelectorAll('.slider__page'));
    

}
const sliders = new Slider('.motto');

Slider.prototype.moveSlide = function (){
    this.button[0].addEventListener("click", function transformation(){
            return sliders.listOfSlides.style.transform = `translate(0%)`;
        });
    this.button[1].addEventListener("click", function transformation(){
            return sliders.listOfSlides.style.transform = `translate(-100%)`;
        });
};


sliders.moveSlide();
console.log( );