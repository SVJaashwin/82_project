var canvas = document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
color="red";

canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseDown (e) {
    color = document.getElementById("text_colour").value;
    
    radius = document.getElementById("text_Radius").value;

    width = document.getElementById("text_width").value;

    mouseX= e.clientX-canvas.offsetLeft;
    
    mouseY= e.clientY-canvas.offsetTop;
    console.log(e.clientX+" & e.clientY =" +e.clientY)  
    console.log("offsetX = " +  canvas.offsetLeft + " & offsetY =" +canvas.offseTop);
    console.log( "X = "+ mouseX  + " & Y =" + mouseY);
    circle(mouseX,mouseY);
} 

function my_mousemove (e) {
    currentPostionX=e.clientX-canvas.offsetLeft;
    
    currentPostionY=e.clientY-canvas.offsetTop;
    
    
    if ( mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.arcWidth=arcwidth;
    ctx.strokeStyle=color;
    ctx.moveTo(lastPositionX,lastPositionY);
    ctx.arc(currentPostionX,currentPostionY,radius,0,2*Math.PI);
    ctx.stroke();
    }
    lastPositionX=currentPostionX;
    lastPositionY=currentPostionY;
    }