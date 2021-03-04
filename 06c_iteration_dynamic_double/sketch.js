///* // iteration - stap 3

let segment;
let aantal = 20;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	aantal = constrain(mouseX / 10.0, 4, 40);
	segment = width / aantal;
	console.log(aantal);
	for (let i = 0; i < aantal; i++) {
		for (let j = 0; j < aantal; j++) {
			fill(random(255), random(130), 0);
			rect(i * segment, j * segment, segment - 5, segment - 5);
		}
	}
}

//*/
