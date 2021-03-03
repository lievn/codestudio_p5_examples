var element;
var images = [];
var ts = 1.25;
var scalslider;
var lineslider;
var speedslider;
var animationslider;
var waveslider;
var runner = 0;
var bu;

function preload() {
	for (var i = 0; i < 3; i++) {
		var img = loadImage('images/export-' + i + '.png');
		images.push(img);
	}
}

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);
	scalslider = createSlider(-30, 35, 0);
	scalslider.position(20, 20);
	lineslider = createSlider(2, 30, 7);
	lineslider.position(20, 40);
	speedslider = createSlider(1, 20, 5);
	speedslider.position(20, 60);
	animationslider = createSlider(0, 2, 1);
	animationslider.position(20, 80);
	waveslider = createSlider(1, 100, 20);
	waveslider.position(20, 100);
	element = new Element(createVector(width / 2, height / 2));
	bu = createButton("create new", 1);
	bu.position(20, 130);
	bu.mousePressed(newThingy);
}


function newThingy() {
	element = new Element(createVector(width / 2, height / 2));
}

function draw() {
	background(250, 44, 0);
	fill(255);
	textSize(12);
	noStroke();
	text("size", 165, 32);
	text("segments - " + str(lineslider.value()), 165, 52);
	text("rotationspeed - " + str(speedslider.value()), 165, 72);
	text("animation change", 165, 92);
	text("wave speed", 165, 112);
	element.display();
}


function Element(position) {
	this.x = position.x;
	this.y = position.y;
	this.amount = int(random(2, 10));
	this.segment = 360.0 / this.amount;
	this.voffset = -1000 - random(height);
	this.scaler = .25; //random(.025, .125);
	this.scal = random(25, 125);
	this.pick = int(random(images.length));
	console.log(this.pick);
	this.im = images[this.pick]
	this.ofset = random(360);

	this.display = function () {

		this.scal = scalslider.value() / 200.0;
		this.amount = lineslider.value();
		this.segment = 360.0 / this.amount;
		for (var i = 0; i < this.amount; i++) {
			push();
			translate(this.x, this.y);
			rotate(radians(i * this.segment + (frameCount / speedslider.value()) * 2.0));
			scale(this.scaler + this.scal, this.scaler + this.scal);
			if (animationslider.value() == 0) {
				image(this.im, 0, this.voffset / 2 * Math.sin(this.ofset + frameCount / waveslider.value()));
			}
			if (animationslider.value() == 1) {
				image(this.im, 0, this.voffset * .250 * Math.sin(i * 3.0 + frameCount / waveslider.value()));
			}
			if (animationslider.value() == 2) {
				image(this.im, this.voffset / 2 * Math.sin(this.ofset + frameCount / waveslider.value()), 0);
			}
			pop();
		}
	};
}