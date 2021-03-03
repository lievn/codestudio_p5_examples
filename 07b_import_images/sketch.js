///* // images - meerdere beelden laden en weergeven in sequentie.
var imgs = [];
var count = 0;

function preload() {
	for (var i = 0; i < 5; i++) {
		var img = loadImage('files/Grey_horse' + (i + 1) + '.jpg');
		imgs.push(img);
	}
}

function setup() {
	createCanvas(400, 400);
	imageMode(CENTER);
}

function draw() {
	background(255, 44, 0);

	if (frameCount % 10 == 0) {
		count++;
	}
	fill(2, 76, 104);
	rect(0, 100, width, 200);
	tint(2, 76, 104);
	image(imgs[count % 5], width / 2, height / 2, 200, 150);
}

//*/
