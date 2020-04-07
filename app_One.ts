const ul: HTMLElement = document.querySelector('ul');
const li: NodeListOf<Element> = document.querySelectorAll('.cl');
const par: NodeListOf<Element> = document.querySelectorAll('p');

for (let i = 0; i < li.length; i++) {
li[i].onclick = abc;  
}
par.forEach((item)=> item.addEventListener('click', abc));

function abc(){
     console.log(this)
     this.style.background = 'yellow';
     this.style.margin = '1em';
}
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.pageYOffset);

// this