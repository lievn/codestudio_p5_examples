///* // Variables sketchpad

function setup() {
    createCanvas(400, 400);
    background(7, 118, 160);
    text("beweeg de muis over het canvas om te tekenen", 20, 20);
    text("klik om opnieuw te beginnen", 20, 40);
}

function draw() {
    stroke(0, 140, 230);
    strokeWeight(4.0);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    background(7, 118, 160);
}

//*/
