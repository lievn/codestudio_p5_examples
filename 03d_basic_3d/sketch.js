function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw() {
	background(2, 76, 104);
	var locY = 200 * sin(frameCount / 50.0);
	var locX = 200 * cos(frameCount / 150.0);

	pointLight(250, 250, 250, locX, locY, 200);
	ambientMaterial(255, 182, 0);

	rotateY(frameCount / 20.0);
	rotateX(frameCount / 40.0);
	rotateZ(frameCount / 30.0);

	push();
	box(150, 150, 150);
	cylinder(100, 200);
	translate(0, 300, 0);
	sphere(30);
	translate(0, -600, 0);
	sphere(30);
	pop();
}
