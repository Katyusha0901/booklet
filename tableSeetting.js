function readMore2() {
  let dots = document.getElementById("tableSetting__dots");
  let more = document.getElementById("tableSetting__more");
  let button = document.getElementById("tableSetting__button");

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

ball.onmousedown = function (event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + "px";
    ball.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest(".droppable");
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) {
        // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener("mousemove", onMouseMove);

  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };
};

function enterDroppable(elem) {
  elem.style.background = "pink";
}

function leaveDroppable(elem) {
  elem.style.background = "";
}

ball.ondragstart = function () {
  return false;
};
