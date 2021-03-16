let audio = [];
let sf, soundsection, cutter;
let t = "";
let info = "click on the canvas and press keys e-r-t-y-u-i-o-p";
let pressedKeys = info.split("");

function preload() {
    let soundFile = loadSound(["../files/centaur0.wav"]);
    let soundFile2 = loadSound(["../files/centaur1.wav"]);
    audio.push(soundFile);
    audio.push(soundFile2);
}

function setup() {
    createCanvas(400, 400);
    background(0);
    sf = audio[0];
    sf.playMode("restart");
    calc(sf);
    textAlign(CENTER);
}

function calc(sFile) {
    soundsection = sFile.duration() / 8.0;
    cutter = makecuts(soundsection, 8.0);
    // console.log(sFile.duration());
    // console.log(soundsection);
    // console.log(cutter);
}

function makecuts(slice, segments) {
    let cuts = [];
    for (let i = 0; i < segments; i++) {
        let n = i * slice;
        cuts.push(n);
    }
    return cuts;
}
// when a key is pressed...

function draw() {
    background(0, 140, 230);
    fill(255, 183, 0);
    textSize(20);
    for (let i = 0; i < pressedKeys.length; i++) {
        let x = 10 + ((i * 20) % width);
        let y = 20 + int(i / 20) * 20;
        text(pressedKeys[i], x, y);
    }
    textSize(250);
    text(str(t), width / 2, height / 2 + 50);
}

function keyPressed() {
    let key = keyCode;
    // w = sample up | h sample down
    if (key == 87) {
        sf = audio[1];
        calc(sf);
    }
    if (key == 81) {
        sf = audio[0];
        calc(sf);
    }
    // keys e - r - t - y - u - i - o - p
    if (key == 69) {
        sf.play(0, 1.0, 2, cutter[0], soundsection);
        t = "e";
    }
    if (key == 82) {
        sf.play(0, 1.0, 2, cutter[1], soundsection);
        t = "r";
    }
    if (key == 84) {
        sf.play(0, 1.0, 2, cutter[2], soundsection);
        t = "t";
    }
    if (key == 89) {
        sf.play(0, 1.0, 2, cutter[3], soundsection);
        t = "y";
    }
    if (key == 85) {
        sf.play(0, 1.0, 2, cutter[4], soundsection);
        t = "u";
    }
    if (key == 73) {
        sf.play(0, 1.0, 2, cutter[5], soundsection);
        t = "i";
    }
    if (key == 79) {
        sf.play(0, 1.0, 2, cutter[6], soundsection);
        t = "o";
    }
    if (key == 80) {
        sf.play(0, 1.0, 2, cutter[7], soundsection);
        t = "p";
    }
    pressedKeys.push(t);
}

function keyReleased() {
    // make the background black again when the key is released
    background(0);
    //sf.stop();
}
