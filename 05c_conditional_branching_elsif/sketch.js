///* // Branching stap 3

let x = 0;
let t;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0, 140, 230);
    x += 5;

    if (x > width) {
        x = 0;
    }

    // if --  else if -- else structuur

    if (mouseX > width / 2) {
        fill(255, 182, 0);
        t = "oranje";
    } else if (mouseX < width / 4) {
        fill(255, 44, 0);
        t = "rood";
    } else {
        fill(7, 118, 160);
        t = "blauw";
    }

    line(width / 2, 0, width / 2, height);
    line(width / 4, 0, width / 4, height);

    ellipse(x, height / 2, 100, 100);
    fill(255);
    text("beweeg de muis om het kleur aan te passen", 10, 20);
    text("kleur: " + t, 10, 40);
}

//*/
