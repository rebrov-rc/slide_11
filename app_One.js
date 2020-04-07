var ul = document.querySelector('ul');
var li = document.querySelectorAll('.cl');
var par = document.querySelectorAll('p');
for (var i = 0; i < li.length; i++) {
    li[i].onclick = abc;
}
par.forEach(function (item) { return item.addEventListener('click', abc); });
function abc() {
    console.log(this);
    this.style.background = 'yellow';
    this.style.margin = '1em';
}
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.pageYOffset);
// this
