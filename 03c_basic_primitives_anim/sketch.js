///* //   Primitives stap 3

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function face() {
    stroke(0);
    strokeWeight(5.0);
    strokeCap(ROUND); // of SQUARE of PROJECT
    strokeJoin(ROUND); // of MITER of BEVEL

    fill(0, 140, 230);
    rect(200, 200, 200, 200, 20);
    fill(255);
    ellipse(150, 190, 100, 100);
    ellipse(250, 200, 100, 100);
    fill(0);
    ellipse(150, 190, 15, 15);
    ellipse(250, 200, 15, 15);
    fill(0, 140, 230);
    triangle(100, 400, 200, 300, 300, 400);
    quad(300, 400, 320, 340, 340, 380, 320, 400);

    fill(255);
    beginShape();
    vertex(100, 290);
    vertex(125, 230);
    vertex(150, 290);
    vertex(175, 270);
    vertex(200, 290);
    vertex(225, 270);
    vertex(250, 290);
    vertex(275, 230);
    vertex(300, 290);
    endShape(CLOSE);
}


function draw() {
    background(255, 44, 0);
    translate(width / 2 - mouseX, height / 2 - mouseY);
    face();
}

//*/
