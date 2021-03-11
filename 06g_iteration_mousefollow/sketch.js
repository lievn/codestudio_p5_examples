///* // iteration - volgt de muis. positie worden bewaard in 2 lijsten

let xpos = [];
let ypos = [];
let amount = 30;

function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < amount; i++) {
        xpos[i] = 0;
        ypos[i] = 0;
    }
}

function draw() {
    background(244, 183, 0);

    for (let i = 0; i < xpos.length - 1; i++) {
        xpos[i] = xpos[i + 1];
        ypos[i] = ypos[i + 1];
    }

    // Nieuwe locatie
    xpos[xpos.length - 1] = int(mouseX);
    ypos[ypos.length - 1] = int(mouseY);

    // Teken alles.
    for (let i = 0; i < xpos.length; i++) {
        noStroke();
        fill(0, 140, 230, 255 - i * 5);
        ellipse(xpos[i], ypos[i], i * 3, i * 3);
    }
}

//*/
