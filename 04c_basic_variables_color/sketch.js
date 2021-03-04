///* // Variables stap 3

let x = 0;
let y = 0;
let r, g, b;

function setup() {
	createCanvas(400, 400);
	r = g = b = 0;
}

function draw() {
	background(255, 44, 0, 20);

	r = random(255);
	g = random(130);
	b = random(0);

	fill(r, g, b);

	x += 5;
	x = x % width;
	y = 100 * sin(frameCount / 20.0);
	ellipse(x, height / 2 + y, 30, 30);
}

//*/
