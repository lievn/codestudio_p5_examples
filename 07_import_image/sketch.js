///* // images - laden en weergeven.

var img;

function preload() {
    img = loadImage('files/thing.png');
    imageMode(CENTER);
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(2, 76, 104);
    //image(img, width / 2, height / 2);
    //image(img, width / 2, height / 2, mouseX, mouseY);
    image(img, width / 2, height / 2, width * sin(frameCount / 20.0), height * cos(frameCount / 25.0));
}

//*/
