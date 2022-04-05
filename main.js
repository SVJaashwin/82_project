var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "Empty";
var lastPositionX, lastPositionY;

var Radius = 50;
var Colour = blue;
var lineWidth = 1;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    mouseEvent = "mousedown";
    Radius = document.getElementById("Radius").value;
    Colour = document.getElementById("Colour").value;
    lineWidth = document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentPostionX = e.clientX - canvas.offsetLeft;

    currentPostionY = e.clientY - canvas.offsetTop;


    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = Colour;
        ctx.arc(currentPostionX, currentPostionY, Radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastPositionX = currentPostionX;
    lastPositionY = currentPostionY;
}