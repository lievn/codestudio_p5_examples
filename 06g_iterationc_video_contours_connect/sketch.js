///* // iteration - video: edges+ trail

var capture;
var seg = 7;

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function closest(list, item) {
    var d = 10000;
    var pick = 0;
    for (var i = 0; i < list.length; i++) {
        var dd = dist(list[i][0], list[i][1], item[0], item[1]);
        if (dd < d && dd > 1) {
            pick = i;
            d = dd;
        }

    }
    return pick;
}

function draw() {
    background(255, 90);
    capture.loadPixels();
    var allpoints = [];
    for (var i = 0; i < width; i += seg) {
        for (var j = 0; j < height; j += seg) {
            var num = j * width + i;
            var num2 = j * width + (i + 1);
            var num3 = (j + 1) * width + i;
            var c = [capture.pixels[num * 4], capture.pixels[1 + num * 4], capture.pixels[2 + num * 4]];
            var c1 = [capture.pixels[num2 * 4], capture.pixels[1 + num2 * 4], capture.pixels[2 + num2 * 4]];
            var c2 = [capture.pixels[num3 * 4], capture.pixels[1 + num3 * 4], capture.pixels[2 + num3 * 4]];

            if (pixelchecker(c, c1, c2, 25)) {
                allpoints.push([i, j]);
            }
        }
    }

    stroke(2, 76, 104);
    strokeWeight(2.0);
    for (var i = 0; i < allpoints.length; i++) {
        var m = closest(allpoints, [allpoints[i][0], allpoints[i][1]]);
        line(allpoints[i][0], allpoints[i][1], allpoints[m][0], allpoints[m][1]);
    }
}

function pixelchecker(c, c1, c2, edge) {
    var r = c[0];
    var g = c[1];
    var b = c[2];
    var r1 = c1[0];
    var g1 = c1[1];
    var b1 = c1[2];
    var r2 = c2[0];
    var g2 = c2[1];
    var b2 = c2[2];
    if ((sqrt((r - r1) * (r - r1) + (g - g1) * (g - g1) + (b - b1) * (b - b1)) >= edge) || (sqrt((r - r2) * (r - r2) + (g - g2) * (g - g2) + (b - b2) * (b - b2)) >= edge)) {
        return true;
    } else {
        return false;
    }
}

//*/
