let capture;
let seg = 8;

function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
    capture.size(width, height);
    capture.hide();
}

function draw() {
    background(0, 140, 230);
    capture.loadPixels();
    for (let x = 0; x < width; x += seg) {
        beginShape();
        for (let y = 0; y < height; y += seg) {
            let num = y * width + x;
            let r = capture.pixels[num * 4];
            let g = capture.pixels[num * 4 + 1];
            let b = capture.pixels[num * 4 + 2];
            let c = color(r, g, b);
            // effect op basis van de waarde vd kleur component
            let fx = brightness(c) / 5.0;
            // golf beweging
            let wave = fx * sin(frameCount / 40.0);
            stroke(255);
            noFill();
            //fill(c);
            vertex(x + wave, y);
        }
        endShape();
    }
}
