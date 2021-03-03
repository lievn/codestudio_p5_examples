///* // Branching 4 button

var x = 100;
var y = 100;
var w = 200;
var h = 200;
var rSize = 100;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(2, 76, 104);

    if (mouseX < width - rSize && mouseY < height - rSize && mouseX > rSize && mouseY > rSize) {
        fill(255, 182, 0);
    } else {
        fill(255);
    }

    rect(x, y, w, h);

}

//*/
