///* // Branching 4 button

const x = 100;
const y = 100;
const w = 200;
const h = 200;
const rSize = 100;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(2, 76, 104);

	if (mouseX < width - rSize && mouseY < height - rSize && mouseX > rSize && mouseY > rSize) {
		fill(255, 182, 0);
	} else {
		fill(255);
	}

	rect(x, y, w, h);

}

//*/
