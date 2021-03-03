///* // clapping (steve reich)

var seq = "x x x o x x o x o x x o";
var steps;
var count = -1;
var speed = 8;
var shift = 0;
var repeat = 4;
var now, canon;
var sounds = [];
var soundFile;
var sf, sf2;
var f;


function preload() {
	soundFile = loadSound(["../files/clap2.wav"]);
}

function setup() {
	createCanvas(400, 400);
	steps = seq.split(" ");
	sf = soundFile;
	sf2 = soundFile;
}

function hitMeSteve(when, sound, loc) {
	if (when == 'x' && frameCount % speed == 0) {
		f = 0;
		sound.pan(-.15);
		sound.play();
	} else if (when == "o" && frameCount % speed == 0) {
		f = 255;
	}
	fill(f, f, f);
	rect(loc, height / 2 - 100, width / 2 - 20, 200);
}

function draw() {
	background(255, 183, 0);

	if (frameCount % speed == 0) {
		count++;
	}

	if (frameCount % (steps.length * speed * repeat) == 0) {
		shift++;
	}

	shift = shift % steps.length;

	now = steps[count % steps.length];
	canon = steps[(count + shift) % steps.length];

	hitMeSteve(now, sf, 10);
	hitMeSteve(canon, sf2, width / 2 + 10);

	fill(255);
	noStroke();
	text(str(now), width / 2 - 7, height / 2 + 100);
	text(str(canon), width / 2 + 2, height / 2 + 100);
	text("SHIFT: " + shift, width / 2 - 25, height / 2 + 130);
}

//*/
