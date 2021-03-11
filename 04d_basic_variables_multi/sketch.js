///* // Variables stap 4

let x, y, s;
let r, g, b;

function setup() {
    createCanvas(400, 400);
    ellipseMode(CENTER);
}

function draw() {
    background(2, 76, 104, 5);

    r = random(255);
    g = random(130);
    b = random(20);

    fill(r, g, b);

    x = random(width);
    y = random(height);
    s = random(20, 50);

    ellipse(x, y, s, s);
}

//*/

/* // Variables stap 6 kleur via color functie.
//introductie branching (if)

var c;

function setup() {
    createCanvas(800, 600);
    c = color(255, 255, 255);
}

function draw() {
    background(c);
    if (frameCount % 20 == 0) {
        c = color(random(255), random(255), random(255));
    }
}




//*/
