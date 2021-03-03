///* // car stap 1

var x = 200;
var y = 200;
var sx = 2;
var beeld;

function preload() {
    beeld = loadImage("files/car.png");
}

function setup() {
    createCanvas(400, 400);
}

function drive() {
    x += sx;
    if (x > width) {
        x = -beeld.width;
    }
}

function draw() {
    background(255, 183, 0);
    drive();
    image(beeld, x, y);
}


//*/
