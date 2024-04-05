let x = document.getElementsByTagName("BODY")[0];
let widthSpan = document.getElementById("w");
let heightSpan = document.getElementById("h");
widthSpan.innerText = window.innerWidth;
heightSpan.innerText = window.innerHeight;

window.addEventListener("resize", () => {
  widthSpan.innerText = window.innerWidth;
  heightSpan.innerText = window.innerHeight;
});
console.log(window.innerWidth);
