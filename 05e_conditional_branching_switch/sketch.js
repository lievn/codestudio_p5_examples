let button = false;

const x = 100;
const y = 100;
const w = 200;
const h = 200;

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER);
}

function draw() {
    background(255, 182, 0);
    strokeWeight(30.0);

    if (button == true) {
        background(255, 44, 0);
        stroke(7, 118, 160);
    } else {
        background(7, 118, 160);
        stroke(255, 44, 0);
    }

    fill(255);
    rect(x, y, w, h);
    noStroke();
    fill(0);
    text(button, width / 2, height / 2);
}

function mousePressed() {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        button = !button;
    }
}
