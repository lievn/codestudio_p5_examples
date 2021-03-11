function setup() {
	createCanvas(400, 400);
	ellipseMode(CORNER);
}

function draw() {
	background(255, 183, 0);
	fill(2, 76, 104);
	noStroke();

	translate(width / 2, height / 2);

	// eerste texture
	for (let i = -15; i < 15; i++) {
		for (let j = -15; j < 15; j++) {
			ellipse(i * 15, j * 15, 12, 12);
		}
	}

	//tweede met rotatiefactor
	rotate(frameCount / 100.0);
	for (let i = -15; i < 15; i++) {
		for (let j = -15; j < 15; j++) {
			ellipse(i * 15, j * 15, 12, 12);
		}
	}
}
