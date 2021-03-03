///* // images - beeld als constructie element --> transformaties.

var img;
var aantal = 10;

function preload() {
	img = loadImage('files/thing2.png');
}

function setup() {
	createCanvas(400, 400);
	imageMode(CENTER);
}

function draw() {
	background(255, 44, 0);
	translate(width / 2, height / 2);
	for (var i = 0; i < aantal; i++) {
		push();
		rotate(radians(i * (360 / aantal)));
		image(img, 0, img.height / 2 - mouseX, 100, 100);
		pop();
	}
}

//*/
