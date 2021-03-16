function setup() {
    createCanvas(400, 400);
}

function spaceShip() {
    strokeWeight(3.0);
    fill(255, 182, 0);
    ellipseMode(CENTER);
    ellipse(0, 0, 50, 50);
    ellipse(0, -40, 30, 30);
    line(-20, 15, -50, 80);
    line(20, 15, 50, 80);
    line(0, 0, -5, 100);
}

function drawBackground() {
    fill(7, 118, 160);
    rect(0, height / 2, width, height / 2);
}

function draw() {
    background(2, 76, 104);
    drawBackground();
    push();
    translate(mouseX, mouseY);
    if (mouseX < width / 2 && mouseY <= height / 2) {
        rotate(90);
    } else if (mouseY > height / 2) {
        rotate(0);
    } else {
        rotate(-90);
    }
    spaceShip();
    pop();
}
