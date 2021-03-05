let jumpers = [];

function setup() {
	createCanvas(400, 400);
	ellipseMode(CORNER);
	for (let i = 0; i < 100; i++) {
		const j = {
			x: random(width),
			y: height / 2,
			w: 20 + random(20),
			h: random(height / 2),
			amount: 0,
			offset: random(90)
		};
		jumpers.push(j);
	}
}


function draw() {
	background(2, 76, 104);
	translate(0, 0);
	for (let j of jumpers) {
		if (mouseX > j.x && mouseX < j.x + j.w && mouseY > j.y && mouseY < j.y + j.h) {
			j.amount = 100;
			fill(255, 183, 0, 200);
		} else {
			fill(0, 140, 230);
			j.amount = 0;
		}
		push()
		translate(0, -j.amount * abs(sin(frameCount / 10.0 + j.offset)));
		rect(j.x, j.y, j.w, j.h);
		ellipse(j.x, j.y - 30, j.w, j.w);
		pop();
	}
}
