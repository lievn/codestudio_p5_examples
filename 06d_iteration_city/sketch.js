let citySeed = 20;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
}

function draw() {
    background(200, 80, 70);
    randomSeed(citySeed);

    for (let x = 0; x < width; x += 15) {
        let maxHeight = random(height);
        for (let y = 0; y < maxHeight; y += 15) {
            if (random(1) > 0.8) {
                fill(random(40, 60), 80, 80);
            } else {
                fill(0);
            }
            rect(x, height - y, 10, 10);
        }
    }
}

function mousePressed() {
    citySeed = random(0, 200);
}
