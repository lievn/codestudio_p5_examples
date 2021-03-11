let balls = [];

function setup() {
	createCanvas(400, 400);
	for (let i = 0; i < 100; i++) {
		const b = {
			x: random(width),
			y: random(height),
		};
		balls.push(b);
	}
}

function draw() {
	background(2, 76, 104);
	fill(255, 183, 0, 100);
	stroke(0, 100);
	for (let b of balls) {
		let d = dist(mouseX, mouseY, b.x, b.y);
		ellipse(b.x, b.y, d, d);
	}
}
