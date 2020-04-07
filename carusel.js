var items = document.querySelectorAll('.img-wrap');
var point = document.querySelector('.container');
var click = point.addEventListener('click', caruselR);
var intervalId = setInterval(caruselR, 3000);
var index = items.length - 1;
function caruselR() {
    delEvent();
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('arrive');
        items[i].classList.remove('leave');
        clearInterval(intervalId);
        intervalId = setInterval(caruselR, 3000);
    }
    if (index === items.length - 1) {
        items[index].classList.add('leave');
        index = 0;
        items[index].classList.add('arrive');
    }
    else {
        items[index].classList.add('leave');
        index += 1;
        items[index].classList.add('arrive');
    }
}
function delEvent() {
    click = point.removeEventListener('click', caruselR);
    setTimeout(function () { return point.addEventListener('click', caruselR); }, 800);
}
