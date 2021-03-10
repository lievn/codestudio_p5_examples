///* // Variables sketchpad

function setup() {
	createCanvas(400, 400);
	background(7, 118, 160);
	text("beweeg de muis over het canvas om te tekenen", 20, 20);
	text("klik een toets om te herstarten", 20, 40);
}

function draw() {
	stroke(0, 140, 230);
	strokeWeight(4.0);
	if (mouseIsPressed) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function keyPressed() {
	background(7, 118, 160);
}

//*/
