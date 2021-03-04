///* // Branching BMI.

let lengte = 1.82;
let gewicht = 120;

function setup() {
	createCanvas(400, 400);
	textSize(30);
}

function draw() {
	background(2, 76, 104);
	var BMI = gewicht / (pow(lengte, 2));

	if (BMI < 18) {
		fill(250, 0, 0);
		text("onder bmi", 20, 180);
	} else if (BMI > 25) {
		fill(255, 44, 0);
		text("boven bmi", 20, 180);
	} else {
		fill(0, 140, 230);
		text("prima bmi", 20, 180);

	}

	text("BMI: " + int(BMI), 20, 150);

	fill(255);
	text("Lengte: " + lengte * 100 + " cm", 20, 50);
	text("Gewicht: " + gewicht + " kg", 20, 100);
}

//*/
