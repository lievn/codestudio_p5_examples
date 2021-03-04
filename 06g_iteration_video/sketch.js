///* // iteration - videopixels.

var video;
var seg = 7;

function setup() {
    createCanvas(640, 480);
    video = createVideo("../files/BritneyRemix2.mov")
    video.hide();
    video.loop();
    frameRate(12);
}

function draw() {
    background(2, 76, 104);
    video.loadPixels();
    fill(255, 182, 0);
    translate(0, -15);
    for (var i = 0; i < video.width; i += seg) {
        for (var j = 0; j < video.height; j += seg) {
            var num = j * video.width + i;
            var s = video.pixels[num * 4] / 12.0;
            ellipse(i * 2, j * 1.8, s, s);
        }
    }
}

//*/