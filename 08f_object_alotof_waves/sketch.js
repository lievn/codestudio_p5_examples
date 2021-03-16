wavers = [];

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    for (var i = 0; i < 6; i += 1) {
        for (var j = 0; j < 3; j += 1) {
            wavers.push(new Waver(20 + i * 70, 120 + j * 70));
        }
    }
}

function draw() {
    background(255, 183, 0);
    fill(2, 76, 104, 100);
    translate(20, 20);

    for (var i = 0; i < wavers.length; i++) {
        var w = wavers[i];
        w.draw();
    }
}

class Waver {
    constructor(xx, yy) {
        this.x = xx;
        this.y = yy;
        this.w = 80;
        this.h = 80;
        this.waveOfset = random(100);
        this.ocataveDobler = random(2);
        this.osc = new p5.SinOsc();
        this.osc.start();
        this.osc.setType("square");
    }

    draw() {
        var d = dist(this.x, this.y, mouseX, mouseY) / 100.0;
        this.w = 120 * sin(d + frameCount / 70.0);
        this.h = 120 * cos(d + frameCount / 140.0);
        rect(this.x, this.y, this.w, this.h);
        this.osc.freq(this.ocataveDobler * 440 * abs(1 + d));
        this.osc.amp(this.w / 100.0);
    }
}
