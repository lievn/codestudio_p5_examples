// model from 
// https://kitronik.co.uk/blogs/resources/bbc-microbit-cad-resources

let microbit;

function preload() {
	microbit = loadModel('../files/micro.obj', true);
}

function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw() {
	background(255, 182, 0);
	orbitControl();
	rotateX(radians(-45));
	rotateY(radians(-45));
	model(microbit);
}
