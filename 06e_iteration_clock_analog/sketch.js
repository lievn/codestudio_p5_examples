function setup() {
	createCanvas(400, 400);
	textAlign(CENTER);
	frameRate(100);
}

function draw() {
	background(2, 76, 104);

	let s = second();
	let m = minute();
	let h = hour();
	let mi = millis();

	let ss = s * 6.0;
	let mm = m * 6.0;
	let hh = h * 30.0;
	let mim = mi * 0.36;

	noFill();
	stroke(255);
	ellipse(width / 2, height / 2, 40, 40);
	ellipse(width / 2, height / 2, 200, 200);

	strokeWeight(3.0);

	//secondenwijzer
	push();
	translate(width / 2, height / 2);
	rotate(radians(ss));
	stroke(0, 140, 230);
	line(0, -20, 0, -100);
	pop();

	//minutenwijzer
	push();
	translate(width / 2, height / 2);
	rotate(radians(mm));
	stroke(255, 182, 0);
	line(0, -20, 0, -70);
	pop();

	//uur wijzer
	push();
	translate(width / 2, height / 2);
	rotate(radians(hh));
	stroke(255, 44, 0);
	line(0, -20, 0, -50);
	pop();

	strokeWeight(1.0);
	push();
	translate(width / 2, height / 2);
	rotate(radians(mim));
	strokeWeight(6.0);
	stroke(7, 118, 160);
	line(0, 0, 0, -20);
	pop();
}
