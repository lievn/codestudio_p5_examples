let x = 0;
let s = 200;

function setup() {
    createCanvas(400, 400);
    ellipseMode(CORNER);
}

function draw() {
    background(7, 118, 160);

    // update x
    x += 5;

    // eerste branch checkt de x positie tov het canvas
    if (x > width) {
        x = -s;
    }

    // een tweede past kleur aan vanaf de helft van het canvas
    if (x > width / 2 - s / 2) {
        fill(255, 44, 0);
    } else {
        fill(0, 140, 230);
    }

    line(width / 2, 0, width / 2, height);
    ellipse(x, height / 2, s, s);
}
