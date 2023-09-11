function readMore() {
  let dots = document.getElementById("content__dots");
  let more = document.getElementById("content__more");
  let button = document.getElementById("content__button");

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

const containers = document.querySelectorAll(".dropdown");
for (let container of containers) {
  container.addEventListener("click", function readMore() {
    let dots = container.querySelector(".dropdown__dots");
    let more = container.querySelector(".dropdown__more");
    let button = container.querySelector(".dropdown__button");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Читать полностью";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      button.innerHTML = "Скрыть";
      more.style.display = "inline";
    }
  });
}

// =================================================================================================

function readMore1() {
  let dots = document.getElementById("content__dots");
  let more = document.getElementById("content__more");
  let button = document.getElementById("content__button");

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

// ==========================================================================================================

function readMore2() {
  let dots = document.getElementById("content__dots");
  let more = document.getElementById("content__more");
  let button = document.getElementById("content__button");

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

let currentDroppable = null;

const platePlace = document.querySelector("#platePlace");

platePlace.onmousedown = function (event) {
  let shiftX = event.clientX - platePlace.getBoundingClientRect().left;
  let shiftY = event.clientY - platePlace.getBoundingClientRect().top;

  platePlace.style.position = "absolute";
  platePlace.style.zIndex = 1000;
  document.body.append(platePlace);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    platePlace.style.left = pageX - shiftX + "px";
    platePlace.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    platePlace.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    platePlace.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest(".droppable");
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) {
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener("mousemove", onMouseMove);

  platePlace.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    platePlace.onmouseup = null;
  };
};

function enterDroppable(elem) {
  elem.style.background = "pink";
}

function leaveDroppable(elem) {
  elem.style.background = "";
}

platePlace.ondragstart = function () {
  return false;
};
