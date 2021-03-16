let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(2, 76, 104, 20);
    fill(255);
    text("gebruik de pijltoetsen om te bewegen", 10, 20);
    ellipse(x, y, 20, 20);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        x -= 10;
    } else if (keyCode == RIGHT_ARROW) {
        x += 10;
    } else if (keyCode == UP_ARROW) {
        y -= 10;
    } else if (keyCode == DOWN_ARROW) {
        y += 10;
    }
}
