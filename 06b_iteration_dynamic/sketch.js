let segment;
const aantal = 20;

function setup() {
	createCanvas(400, 400);
	segment = width / aantal;
}

function draw() {
	background(0, 140, 230);
	for (let i = 0; i < aantal; i++) {
		rect(i * segment, 200, segment - 5, segment - 5);
	}
}
