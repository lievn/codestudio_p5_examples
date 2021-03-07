///* // clapping with video

let seq = "x x x o x x o x o x x o";
let count = 0;
let speed = 5;
let steps;
let shift = 0;
let repeat = 12;
let now, canon;
let vide, vide2;

function preload() {
	vide = createVideo('../files/appie2.mov');
	vide2 = createVideo('../files/appie2flip.mov');
	vide.hide();
	vide2.hide();
	vide.play();
	vide2.play();
	frameRate(45);
}

function setup() {
	createCanvas(400, 400);
	steps = seq.split(" ");
}

function draw() {

	background(255, 44, 0);
	if (frameCount % speed == 0) {
		count++;
	}
	if (frameCount % (repeat * speed * 4) == 0) {
		shift++;
	}

	now = steps[count % steps.length];
	canon = steps[(count + shift) % steps.length];


	if (now == 'x' && frameCount % speed == 0) {
		fill(0);
		vide.time(0);
	}

	if (canon == "x" && frameCount % speed == 0) {
		vide2.time(0);
	}
	image(vide, 10, 40, width / 2 - 20, height - 80);
	image(vide2, width / 2 + 10, 40, width / 2 - 20, height - 80);


	fill(255, 44, 0, 150);
	rect(0, 0, width, height);
	fill(255);
	noStroke();
	text(str(now), width / 2 - 7, height - 40);
	text(str(canon), width / 2 + 2, height - 40);
	text(shift + " /12", width / 2 - 12, height - 25);

}

//*/
