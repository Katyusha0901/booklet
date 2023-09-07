function readMore1() {
  let dots = document.getElementById("complements__dots");
  let more = document.getElementById("complements__more");
  let button = document.getElementById("complements__button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Читать полностью";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Скрыть";
    more.style.display = "inline";
  }
}

const carousel = document.querySelector(".carousel");
let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");
let i = 1;
for (let li of listElems) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

let width = 267;
let count = 1;

let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
