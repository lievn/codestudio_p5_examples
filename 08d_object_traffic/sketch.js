let cars = [];
let images = [];

function preload() {
	for (let i = 0; i < 9; i++) {
		const im = loadImage("files/export-" + i + ".png");
		images.push(im);
	}
}

function setup() {
	createCanvas(400, 400);
	ellipseMode(CORNER);
	for (var i = 0; i < 20; i++) {
		const c = {
			x: random(width),
			y: 50 + random(height - 100),
			sx: -2 + random(4),
			beeld: images[int(random(images.length))]
		};
		cars.push(c);
	}
}

function driveAllCars() {
	for (c of cars) {
		c.x += c.sx;
		if (c.x > width) {
			c.x = -c.beeld.width * 1.5;
		}
		if (c.x < -c.beeld.width * 1.5) {
			c.x = width;
		}
	}
}

function draw() {
	background(0, 140, 230);
	driveAllCars()
	for (c of cars) {
		image(c.beeld, c.x, c.y, c.beeld.width * 1.5, c.beeld.height * 1.5);
	}
}
