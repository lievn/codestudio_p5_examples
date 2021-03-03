///* // iteration - videotext.

var capture;
var seg = 10;

var letters = ['a', 'b', 'c', 'd', 'e'];
var col = [[7, 118, 160], [255, 182, 0], [255, 44, 0], [2, 76, 104], [0, 140, 230]];

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
    textAlign(CENTER);
}



function draw() {
    background(255);
    capture.loadPixels();
    for (var i = 0; i < width; i += seg) {
        for (var j = 0; j < height; j += seg) {
            var num = j * width + i;
            var s = capture.pixels[num * 4] / 15.0;
            var p = col[int(random(col.length))];
            fill(p[0], p[1], p[2]);
            textSize(s);
            var pick = int(random(letters.length));
            text(letters[pick], i, j);
        }
    }
}

//*/
