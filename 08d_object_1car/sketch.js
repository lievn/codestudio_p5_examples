///* // car stap 1

let x = 200;
let y = 200;
let sx = 2;
let beeld;

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
