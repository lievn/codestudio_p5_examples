var lengte = 1.82;
var gewicht = 120;
var weightslider, lengthSlider;

function setup() {
	createCanvas(400, 400);
	textSize(20);
	weightslider = createSlider(0, 150, 75);
	weightslider.position(width / 2, 40);
	lengthSlider = createSlider(0, 220, 180);
	lengthSlider.position(width / 2, 60);
}

function draw() {
	background(2, 76, 104);
	gewicht = weightslider.value();
	lengte = lengthSlider.value() / 100.0;
	var BMI = gewicht / (pow(lengte, 2));
	fill(255, 183, 0);
	rect(0, height / 3, width, height / 3);

	if (BMI < 18) {
		fill(250, 0, 0);
		text("onder bmi", width / 2, 210);
	} else if (BMI > 25) {
		fill(255, 44, 0);
		text("boven bmi", width / 2, 210);
	} else {
		fill(0, 140, 230);
		text("prima bmi", width / 2, 210);
	}

	text("BMI: " + int(BMI), width / 2, 190);
	fill(255);
	text("Lengte: " + lengte * 100 + " cm", 20, 75);
	text("Gewicht: " + gewicht + " kg", 20, 55);
}
