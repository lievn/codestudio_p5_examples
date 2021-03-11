///* // Branching bouncer

let circleX;
let circleY;
let moveX = 5;
let moveY = 2;
let circleSize = 100;
let r, g, b;

function setup() {
    createCanvas(400, 400);
    ellipseMode(CENTER);
    circleX = width / 2;
    circleY = height / 2;
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
    background(r, g, b);
    circleX += moveX;
    circleY += moveY;

    if (circleX > width - circleSize / 2 || circleX < circleSize / 2) {
        moveX = -moveX;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    if (circleY > height - circleSize / 2 || circleY < circleSize / 2) {
        moveY = -moveY;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    ellipse(circleX, circleY, circleSize, circleSize);
}

//*/
