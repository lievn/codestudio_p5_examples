///* // iteration - video: edges _ simple.

let capture;
let seg = 5;

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function draw() {
    background(2, 76, 104);
    capture.loadPixels();
    fill(0, 140, 230);
    var allpoints = [];
    for (let i = 0; i < width; i += seg) {
        for (let j = 0; j < height; j += seg) {
            let num = j * width + i;
            let num2 = j * width + (i + 1);
            let num3 = (j + 1) * width + i;
            let c = [capture.pixels[num * 4], capture.pixels[1 + num * 4], capture.pixels[2 + num * 4]];
            let c1 = [capture.pixels[num2 * 4], capture.pixels[1 + num2 * 4], capture.pixels[2 + num2 * 4]];
            let c2 = [capture.pixels[num3 * 4], capture.pixels[1 + num3 * 4], capture.pixels[2 + num3 * 4]];

            if (pixelchecker(c, c1, c2, mouseX / 10.0)) {
                allpoints.push([i, j]);
            }
        }
    }

    for (var i = 0; i < allpoints.length; i++) {
        ellipse(allpoints[i][0], allpoints[i][1], seg, seg);
    }
    fill(255);
    text("move mouse x to increase edge parameter", 10, 20);
}

// simple edge detection function
function pixelchecker(c, c1, c2, edge) {
    let r = c[0];
    let g = c[1];
    let b = c[2];
    let r1 = c1[0];
    let g1 = c1[1];
    let b1 = c1[2];
    let r2 = c2[0];
    let g2 = c2[1];
    let b2 = c2[2];
    if (
        sqrt((r - r1) * (r - r1) + (g - g1) * (g - g1) + (b - b1) * (b - b1)) >= edge ||
        sqrt((r - r2) * (r - r2) + (g - g2) * (g - g2) + (b - b2) * (b - b2)) >= edge
    ) {
        return true;
    } else {
        return false;
    }
}

//*/
