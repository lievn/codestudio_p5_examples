///* // jump stap 1

var x = 200;
var y;
var w = 20;
var h = 180;
var j = 1;
var amount = 2;

function setup() {
	createCanvas(400, 400);
	ellipseMode(CORNER);
	y = height - h;

}

function man() {
	translate(0, -amount * abs(sin(frameCount / 10.0)));
	rect(x, y, w, h);
	ellipse(x, y - 30, w, w);
}

function draw() {

	background(2, 76, 104);
	text("hover over jumper to make it jump", 10, 20);
	if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
		amount = 100;
		fill(255, 183, 0, 200);
	} else {
		fill(0, 140, 230);
		amount = 0;
	}
	man();
}


//*/
