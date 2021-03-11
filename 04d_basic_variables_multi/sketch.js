let x, y, s;
let r, g, b;

function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
}

function draw() {
	background(2, 76, 104, 5);

	r = random(255);
	g = random(130);
	b = random(20);

	fill(r, g, b);

	x = random(width);
	y = random(height);
	s = random(20, 50);

	ellipse(x, y, s, s);
}
