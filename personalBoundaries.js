function readMore() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let button = document.getElementById("button");

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
