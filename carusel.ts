const items: NodeListOf<Element> = document.querySelectorAll('.img-wrap');
const point: HTMLElement = document.querySelector('.container');
let click = point.addEventListener('click', caruselR);
let intervalId: number = setInterval(caruselR,3000)

let index: number = items.length - 1;

function caruselR() {
            delEvent();
    for(let i= 0; i < items.length; i++) {
           items[i].classList.remove('arrive');
           items[i].classList.remove('leave');
           clearInterval(intervalId)
           intervalId = setInterval(caruselR,3000);
     }
        if ( index ===  items.length - 1 ) {

            items[index].classList.add('leave');
            index = 0;
            items[index].classList.add('arrive');
        }else {
            items[index].classList.add('leave'); 

            index += 1
            items[index].classList.add('arrive');
        }
}
function delEvent() {
    click = point.removeEventListener('click', caruselR);
    setTimeout(() => point.addEventListener('click', caruselR), 800)
}