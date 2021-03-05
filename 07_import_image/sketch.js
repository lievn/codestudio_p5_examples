///* // images - laden en weergeven.

let img;

function preload() {
	img = loadImage('files/thing.png');

}

function setup() {
	createCanvas(400, 400);
	imageMode(CENTER);
}

function draw() {
	background(2, 76, 104);
	//image(img, width / 2, height / 2);
	image(img, width / 2, height / 2, mouseX, mouseY);
	//image(img, width / 2, height / 2, width * sin(frameCount / 20.0), height * cos(frameCount / 25.0));
}

//*/
