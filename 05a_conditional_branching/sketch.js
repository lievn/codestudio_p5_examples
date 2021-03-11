///* // Branching stap 1

let x = 0;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(255, 182, 0);

    // update de x locatie met 5 --> increment
    x += 5;

    // als de ellipse voorbij het canvas is wordt x terug 0.
    if (x > width) {
        x = 0;
    }

    ellipse(x, height / 2, 50, 50);
}

//*/
