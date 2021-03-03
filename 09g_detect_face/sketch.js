///* // iteration - face detect.

var capture;
var seg = 10;

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
}


function draw() {
	background(2, 76, 104);
	capture.loadPixels();
	fill(255, 182, 0);
	for (var i = 0; i < width; i += seg) {
		for (var j = 0; j < height; j += seg) {
			var num = j * width + i;
			var s = capture.pixels[num * 4] / 20.0;
			ellipse(i, j, s, s);
		}
	}
}


//*/
