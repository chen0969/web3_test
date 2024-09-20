// let file = "https://pokeapi.co/api/v2/pokemon/ditto"
// fetch (file)
// .then(textFile => textFile.text())
// .then(y => document.getElementById("name").innerHTML = y)
// .then(data => console.log(data.name))

console.log(document.title);

const colorButton = document.getElementById("colorButton");
const toggle = document.getElementById("toggle");
const colorText = document.getElementById("colorText");
const resetBtn = document.getElementById("resetBtn");
const boxes = document.querySelectorAll('.box');
const Swiper = ["red", "yellow", "green", "blue"];
console.log(boxes);

boxes[1].setAttribute('data-state', 0);
boxes[2].setAttribute('style', 'display:block;');
// boxes.forEach();

colorButton.addEventListener('click', ()=> {
    // text content
    console.log("clcked");
    colorText.textContent = "what!? you changed my color!????";
    // style
    colorText.setAttribute('style', "font-family: fantasy; color: green;");
});

toggle.addEventListener("click", ()=>{
    boxes[2].removeAttribute('style', 'display:none;');
});
toggle.addEventListener("click", ()=>{
    boxes[2].toggleAttribute('style', 'display:none;');
});

// function colorSwipe(){

// }

const currentState = boxes[1].getAttribute("data-state");
console.log(currentState > 0);
boxes[1].setAttribute('data-state', currentState > 0);
boxes[1].innerHTML = '<p>state' + currentState + '</p>';


resetBtn.addEventListener("click", ()=>{
boxes[0].classList.remove('highlight');
colorText.removeAttribute('style');
});