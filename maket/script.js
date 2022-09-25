function Slider (selector){
    this.selector = selector;
    this.rootEl = document.querySelector(selector);
    this.listOfSlides = this.rootEl.querySelector('.slider__slides');
    this.button = Array.from(this.rootEl.querySelectorAll('.slider__page'));
}

Slider.prototype.moveSlide = function (){
    this.button[0].addEventListener("click", () => {
            return this.listOfSlides.style.transform = `translate(0%)`;
        });
    this.button[1].addEventListener("click", () => {
            return this.listOfSlides.style.transform = `translate(-100%)`;
        });
};
const sliders = new Slider('.motto');
sliders.moveSlide();

function Carousel (selector){
    this.selector = selector;
    this.rootElem = document.querySelector(selector);
    this.carouselList = this.rootElem.querySelector('.excurs__carousel-list');
    this.prevButton = this.rootElem.querySelector('.excurs__carousel-btn-left');
    this.nextButton = this.rootElem.querySelector('.excurs__carousel-btn-right');
}

Carousel.prototype.moveCarousel = function (){
    let trans = 0;
    this.nextButton.addEventListener("click", () => {
        if(trans<=-30){
            trans = -30;
            return this.carouselList.style.transform = `translate(${trans}%)`;
        }else{
            trans -= 10;
            return this.carouselList.style.transform = `translate(${trans}%)`;
        }
    });
    this.prevButton.addEventListener("click", () => {
        if(trans>=30){
            trans = 30;
            return this.carouselList.style.transform = `translate(${trans}%)`;
        }else{
            trans += 10;
            return this.carouselList.style.transform = `translate(${trans}%)`;
        }
    }, {'once': false});
}
const carousel = new Carousel('.excurs__carousel');
carousel.moveCarousel();