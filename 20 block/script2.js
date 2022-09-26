const circle = document.querySelector('.circle');
const screenEl = document;
const SPEED = 50;

function moveCircle (circle, dx, dy){
    return new Promise((resolve) => {
        let xStart = circle.getBoundingClientRect().left;
        let yStart = circle.getBoundingClientRect().top;
        if(dx || dy){
            circle.style.transitionDuration = `${((Math.abs((dx-xStart))/SPEED)+(Math.abs((dy-yStart))/SPEED))/2}s`;
            circle.style.transform = `translate(${dx}px, ${dy}px)`;
        } 
        circle.addEventListener('transitionend', resolve, {once:true});
    });
    
};
let arg = [100,100];
function setCord(event){
    arg.push(event.clientX, event.clientY);
};
async function animated(){
    for(let i=0;i<arg.length;i+=2){
        await moveCircle(circle, arg[i], arg[i+1]);
    }
};
screenEl.addEventListener('click', setCord);
animated();
// Поки шарік рухається до першої точки, можна задати скільки завгодно точок,
// але як тільки він припинить свій рух, задаючи нові точки, він більше не буде рухатись,
// не можу зрозуміти як реалізувати наступні рухи після завершення функції animated.


