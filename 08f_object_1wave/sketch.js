///* // wave object stap 1

let x = 200;
let y = 200;
let w = 50;
let h = 50;
let osc;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    osc = new p5.SinOsc();
    osc.start();
    osc.setType("square");
}

function draw() {
    background(255, 183, 0);

    let d = dist(x, y, mouseX, mouseY) / 100.0;
    w = 120 * sin(d + frameCount / 70.0);
    h = 120 * cos(d + frameCount / 140.0);
    fill(2, 76, 104);
    rect(x, y, w, h);

    osc.freq(440 * abs(1 + d));
    osc.amp(1 - (0.5 - d / 8) + w / 50.0);
}

//*/
