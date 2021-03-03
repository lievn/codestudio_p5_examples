var elements = [];
var images = [];
var ts = 1.25;
var diamslider;
var scalslider;
var lineslider;
var runner = 0;

function preload() {
	for (var i = 0; i < 3; i++) {
		var img = loadImage('images/export-' + i + '.png');
		images.push(img);
	}

	for (var i = 0; i < 50; i++) {
		elements.push(new Element(createVector(random(width), random(height))));
	}
}

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);
	diamslider = createSlider(0, 50, 35);
	diamslider.position(20, 40);
	scalslider = createSlider(-10, 15, -5);
	scalslider.position(20, 60);
	lineslider = createSlider(10, 400, 170);
	lineslider.position(20, 80);
}


function pointcloud(x, y, z, rotX, rotY, rotZ, perspx, perspy, which) {

	var Sx = Math.sin(radians(rotX));
	var Cx = Math.cos(radians(rotX));
	var Sy = Math.sin(radians(rotY));
	var Cy = Math.cos(radians(rotY));
	var Sz = Math.sin(radians(rotZ));
	var Cz = Math.cos(radians(rotZ));

	var x1 = Cy * (Sz * y + Cz * x) - Sy * z;
	var y1 = Sx * (Cy * z + Sy * (Sz * y + Cz * x)) + Cx * (Cz * y - Sz * x);
	var z1 = Cx * (Cy * z + Sy * (Sz * y + Cz * x)) - Sx * (Cz * y - Sz * x);

	var sca = perspx;
	var fov = perspy;

	var factor = sca / fov + z1;

	var x2 = factor * x1 * fov;
	var y2 = factor * y1 * -fov;

	ellipse(x2, y2, 5, 5);
	var ele = elements[which];
	ele.display(x2, y2);
}

function sphereCloud() {
	var amount = elements.length; //meer punten.
	var seg = PI / amount;
	var mult = 160; // meerder vormen.
	var n = 0;
	for (var i = 0; i < PI; i += seg) {
		var si = Math.sin(i);
		var co = Math.cos(i);
		var si2 = Math.sin(i * mult);
		var co2 = Math.cos(i * mult);
		var mu = (si * si2) * (diamslider.value() / 10.0);
		var mu2 = (si * co2) * (diamslider.value() / 10.0);
		pointcloud(mu2, mu, co * (diamslider.value() / 10.0), frameCount, frameCount, mouseY, 200, 10, n);
		n++;
	}
}

function draw() {
	background(7, 118, 160);
	if (frameCount % 20 == 0) {
		calc();
	}
	fill(255);
	textSize(12);
	noStroke();
	text("use mouse to rotate and tilt", 25, 32);
	text("orbDiameter", 165, 52);
	text("elementSize", 165, 72);
	text("connectionLength", 165, 92);

	resetMatrix();
	translate(width / 2, height / 2);
	sphereCloud();


	for (var i = 0; i < elements.length; i++) {
		var b = elements[i];
		for (var j = 0; j < elements.length; j++) {
			var b2 = elements[j];
			if (i != j && dist(b.x, b.y, b2.x, b2.y) < lineslider.value()) {
				noFill();
				stroke(2, 76, 104);
				strokeWeight(1.0);
				beginShape();
				for (var k = 0; k < 10; k++) {
					var mkx = mix(b.x, b2.x, k / 10.0) + 10.0 * Math.sin(frameCount / 10.0 + (k + 1));
					var mky = mix(b.y, b2.y, k / 10.0) + 10.0 * Math.cos(frameCount / 10.0 + (k + 1));
					vertex(mkx, mky);
					endShape();

				}
			}
		}
	}

}

function mix(x, xx, loc) {
	var xs = (x * (1 - loc)) + (xx * loc);
	return xs;
}

function calc() {
	runner += 1;
}

function Element(position) {
	this.x = position.x;
	this.y = position.y;
	this.amount = int(random(2, 10));
	this.segment = 360.0 / this.amount;
	this.voffset = -1000 - random(height);
	this.scaler = random(.025, .125);
	this.scal = random(25, 125);
	this.im = images[int(random(images.length))];
	this.ofset = random(360);

	this.move = function () {
		this.x += (this.scaler * 4.0) * Math.sin(this.scaler * frameCount / 10.0);
		this.y += (this.scaler * 4.0) * Math.cos(this.scaler * frameCount / 10.0);
	};

	this.display = function (xx, yy) {
		this.x = xx;
		this.y = yy;
		this.scal = scalslider.value() / 200.0;
		this.move();
		for (var i = 0; i < this.amount; i++) {
			push();
			translate(this.x, this.y);
			rotate(radians(i * this.segment + frameCount * 2.0));
			scale(this.scaler + this.scal, this.scaler + this.scal);
			image(this.im, 0, this.voffset / 2 * Math.sin(this.ofset + frameCount / 20.0));
			pop();
		}
	};
}