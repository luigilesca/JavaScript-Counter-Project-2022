//COUNTER BUILD

// Monitor

let screen = document.createElement("div");

document.getElementById("box").appendChild(screen);

screen.classList.add("screen");

// Number Monitor
let numb = document.createElement("p");
let numb_text = document.createTextNode("0");

numb.appendChild(numb_text);
screen.appendChild(numb);

numb.classList.add("number");

// Btn Container

let btn_container = document.createElement("div");
screen.after(btn_container);

btn_container.classList.add("container");

// Button: +

let plus = document.createElement("button");
let plus_text = document.createTextNode("+");

plus.appendChild(plus_text);
btn_container.appendChild(plus);

// Button: Reset

let reset = document.createElement("button");
let reset_text = document.createTextNode("Reset");

reset.appendChild(reset_text);

btn_container.appendChild(reset);

reset.classList.add("reset-btn");

// Button: -

let minus = document.createElement("button");
let minus_text = document.createTextNode("-");

minus.appendChild(minus_text);
btn_container.appendChild(minus);

//COUNTER  FUNCTION

let i = 0;

plus.addEventListener("click", () => {
  i++;

  numb.innerHTML = i;

  if (i > 0) {
    numb.style.color = "#0029F5";
  }
});

minus.addEventListener("click", () => {
  i--;
  numb.innerHTML = i;
  if (i < 0) {
    numb.style.color = "#C71400";
  }
});

reset.addEventListener("click", () => {
  i = 0;

  numb.innerHTML = i;

  if (i == 0) {
    numb.style.color = "#4f4f4f";
  }
});
