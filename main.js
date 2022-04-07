var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "Empty";
var lastPositionX, lastPositionY;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e) {
    mouseEvent = "mousedown";
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
        ctx.lineWidth = 1;
        ctx.strokeStyle = "red";
        ctx.arc(currentPostionX, currentPostionY, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastPositionX = currentPostionX;
    lastPositionY = currentPostionY;
}