"use strict";
//let name: string = "Priti";
//export {}
var myName = "Priti";
console.log(myName);
// <HTMLCanvasElement>
// var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("In DrawRect");
    var num = document.getElementById('numofrect').value;
    console.log(document.getElementById('numofrect').value);
    for (var i = 0; i < num; i++) {
        var red = Math.floor((Math.random() * 256));
        var green = Math.floor((Math.random() * 256));
        var blue = Math.floor((Math.random() * 256));
        var x = Math.floor((Math.random() * canvas.width));
        var y = Math.floor((Math.random() * canvas.height));
        //    const x = instanceOfMouseEvent.offsetX;
        //  const y = instanceOfMouseEvent.offsetX.offsetY;
        //Math.random() * (max - min) + min;
        var width = Math.floor((Math.random() * 19 + 1)) * 10;
        var height = Math.floor((Math.random() * 19 + 1)) * 10;
        //console.log ("Red : " +red +"Green : " + green + "Blue : " + blue);
        ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        ctx.fillRect(x, y, width, width);
    }
}
var size = 20;
//let x = Math.floor((Math.random() * canvas.width)) ;
//let y = Math.floor((Math.random() * canvas.height));
var drawing = false;
function drawSnack1() {
    drawing = true;
    var x = Math.floor((Math.random() * canvas.width));
    var y = Math.floor((Math.random() * canvas.height));
    drawSnack(x, y);
}
function drawSnack(x, y) {
    if (drawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var num = document.getElementById('numofrect').value;
        //  let x = Math.floor((Math.random() * canvas.width)) ;
        // let y = Math.floor((Math.random() * canvas.height));
        for (var i = 0; i < num; i++) {
            var red = Math.floor((Math.random() * 256));
            var green = Math.floor((Math.random() * 256));
            var blue = Math.floor((Math.random() * 256));
            ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
            ctx.fillRect(x, y, size, size);
            x += size;
            var random = Math.random();
            if (random < 0.5)
                y -= size;
            else
                y += size;
        }
    }
}
function moveSnake() {
    canvas.addEventListener('mousemove', function (e) {
        console.log(e.target);
        var x = e.offsetX;
        var y = e.offsetY;
        // ctx.fillStyle = "green";
        // ctx.fillRect(x, y, size, size);
        drawSnack(x, y);
        console.log(x);
        console.log(y);
    });
}
module.exports = {};
