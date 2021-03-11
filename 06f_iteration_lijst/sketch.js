///* // iteration - lijstjes bekijken we verder ook nog.

const woorden = ["dit", "zijn", "allemaal", "stukjes", "lopende", "tekst"];
let count = 0;
let pos = 0;

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER);
    textSize(90);
}

function draw() {
    background(255, 183, 0);

    pos++;
    pos = pos % height;

    if (frameCount % 20 == 0) {
        count++;
    }
    count = count % woorden.length;
    fill(0, 50, 110);
    for (let i = 0; i < 3; i++) {
        text(woorden[(count + i) % woorden.length], width / 2, height / 4 + i * 120);
    }
}

//*/
