let x, y, ys;
let select, max;
let locations = [];

function setup() {
	createCanvas(400, 400);
	x = random(width);
	y = random(20);
	ys = random(0.5, 2);
	locations.push(y);
	max = int(random(5, 25));
	noStroke();
}

function move() {
	y += ys;
}

function store() {
	if (frameCount % 10 == 0) {
		locations.push(y);
	}
	if (locations.length > max) {
		locations.splice(0, 1);
	}
}

function resetthis() {
	if (y > height * 2) {
		y = 0;
	}
}

function draw() {
	background(0, 140, 230);
	move();
	store();
	resetthis();
	for (let i = 0; i < locations.length; i++) {
		let f = locations[i];
		fill(255, 183, 0, (f + i) / 2.0);
		ellipse(x, f, 20, 20);
	}
}
