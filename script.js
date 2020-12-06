const page = document.querySelector(".page");

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey! I am red.";
para.style.cssText = "color: red";
page.appendChild(para);

const head = document.createElement("h3");
head.classList.add("head");
head.textContent = "I'm a blue h3!";
head.style.cssText = "color:blue";
page.appendChild(head);

const div = document.createElement("div");
div.classList.add("div");
div.style.cssText = "border-style: solid; border-width: 3px; background-color: pink";
page.appendChild(div);

const head1 = document.createElement("h1");
head1.classList.add("head1");
head1.textContent = "I'm in a div!";
div.appendChild(head1);

const p2 = document.createElement("p");
p2.classList.add("p2");
p2.textContent = "ME TOO!";
div.appendChild(p2);



// Button onclick DOM Exercise
const btn = document.querySelector("#btn");
btn.onclick = () => alert('Hello World');

//Button EventListener DOM Exercise
const button = document.querySelector("#button");
button.addEventListener('click', () => {alert("Hello World!!!!!")});

button.addEventListener("click", function(e) {console.log(e.target.style.background = "blue")});


//DOM Key Event
const main = document.querySelector("#window");

window.addEventListener("keydown", event => {
                        if (event.key = "v") {
                          main.style.cssText = "background-color: blue";
                        }
                        })
