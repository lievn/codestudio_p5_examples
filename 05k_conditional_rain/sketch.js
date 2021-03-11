///* // Conditional: rain.
let x, y, vy;

function resetRaindrop() {
    y = 0;
    x = random(width);
    vy = random(5, 20);
    fill(random(180, 220), random(20, 80), random(20, 80));
}

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    background(200, 30, 20);
    noStroke();
    resetRaindrop();
}

function draw() {
    background(200, 30, 80, 0.01);

    ellipse(x, y, 50);
    y += vy;

    if (y > height) {
        resetRaindrop();
    }
}

//*/
