///* // iteration - lijstjes bekijken we verder ook nog.

var letters = ['a', 'b', 'c', 'd', 'e'];
var col = [[7, 118, 160], [255, 182, 0], [255, 44, 0], [2, 76, 104], [0, 140, 230]];
var count = 0;

function setup() {
    createCanvas(400, 400);
    textSize(100);
}

function draw() {
    background(col[count][0], col[count][1], col[count][2]);

    if (frameCount % 10 == 0) {
        count++;
    }
    count = count % col.length;
    translate(50, 0);
    for (var i = 0; i < letters.length; i++) {
        fill(col[i][0], col[i][1], col[i][2]);
        text(letters[i], i * 60, height / 2);
    }

}

//*/
