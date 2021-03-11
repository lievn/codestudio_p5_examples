function setup() {
	createCanvas(400, 400);
	background(255);
	noStroke();
}

function draw() {
	let red_prob = 0.6; // 60% kans op rood
	let orange_prob = 0.1; // 10% kans op groen
	let blue_prob = 0.3; // 30% kans op blauw
	let num = random(1); // kies een random nummer tussen 0 en 1.

	if (num < red_prob) {
		fill(255, 44, 0);
	} else if (num < orange_prob + red_prob) {
		fill(255, 182, 0);
	} else {
		fill(2, 76, 104);
	}

	ellipse(random(width), random(height), 30, 30);
}
