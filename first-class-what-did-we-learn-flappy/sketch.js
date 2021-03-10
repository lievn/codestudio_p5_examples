let x, y;
let px, py;
let vx = 2;
let ph;
let score = 0;
let highscore = 0;

function setup() {
	createCanvas(400, 400);
	x = width / 4;
	y = height / 2;
	px = width;
	py = 100;
	ph = 120;
	noStroke();
}

function draw() {
	background(0, 140, 230);

	// flappy
	y += 2;
	if (y > height - 10) {
		y = height - 10
	}
	stroke(255, 205, 0);
	noFill();
	rect(x, y, 10, 10);

	// pipe
	px -= vx;
	if (px < 0) {
		px = width;
		py = 100 + random(height / 2);
		ph = random(50, 150);
	}
	//line(px, 0, px, height);
	fill(2, 76, 104);
	noStroke();
	rect(px, 0, 30, py);
	rect(px, py + ph, 30, height - ph - py);
	if (x > px && y > py && y < py + ph && x < px + vx + 1) {
		fill(255, 205, 0);
		score += 1;
	} else if (x > px && (y > py + ph || y < py) && x < px + vx + 1) {
		if (score > highscore) {
			highscore = score;
		}
		noFill();
		score = 0;
	} else {
		noFill();
	}
	rect(px, py, 30, ph);
	fill(255, 205, 0);
	text(score, 20, 20);
	text(highscore, width - 20, 20);
}

function mousePressed() {
	y -= 50;
}
