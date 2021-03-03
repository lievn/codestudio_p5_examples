///* // clapping  too(steve reich)

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


function preload() {
	soundFile = loadSound(["../files/clap2.wav"]);
	//soundFile.setPitch(40);
}

function setup() {
	createCanvas(400, 400);
	steps = seq.split(" ");
	sf = soundFile;
	sf2 = soundFile;
	textSize(30);
}

function hitMeSteve(when, sound, loc) {
	if (when == 'x' && frameCount % speed == 0) {
		sound.pan(-.15);
		sound.play();
	}
}

function draw() {
	background(2, 76, 104);

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

	noStroke(0);

	for (var i = 0; i < steps.length; i++) {
		if (i == count % steps.length) {
			fill(255, 183, 0);
		} else {
			fill(255);
		}
		text(steps[i], 110 + (shift / 2 + i) * 15, height / 2);
	}


	for (var i = 0; i < steps.length; i++) {
		if (i == (count + shift) % steps.length) {
			fill(255, 183, 0);
		} else {
			fill(255);
		}
		text(steps[i], 110 + (-shift / 2 + i) * 15, height / 2 + 20);
	}

}


//*/
