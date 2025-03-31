let shape = document.querySelector(".shape");
let btnCircle = document.querySelector(".btncircle");
let btnTriangle = document.querySelector(".btntriangle");
let btnSquare = document.querySelector(".btnsquare");
let btnRectangle = document.querySelector(".btnrectangle");
let btnTrapezoid = document.querySelector(".btntrapezoid");

btnCircle.addEventListener("click", function () {
    shape.className = "shape circle";
});

btnTriangle.addEventListener("click", function () {
    shape.className = "shape triangle";
});

btnSquare.addEventListener("click", function () {
    shape.className = "shape square";
});

btnRectangle.addEventListener("click", function () {
    shape.className = "shape rectangle";
});

btnTrapezoid.addEventListener("click", function () {
    shape.className = "shape trapezoid";
});
