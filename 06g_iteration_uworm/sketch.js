let points = 40;
let calc = 0;
let p = [];
let x = 100;
let y = 120;
let xs = 3.0;
let ys = 2.0;

function setup() {
    createCanvas(400, 400);
}

function mover() {
    x += xs;
    y += ys;
}

function checkedges(x, y) {
    if (x < 0 || x > width) {
        xs = -xs;
    }
    if (y < 0 || y > height) {
        ys = -ys;
    }
}

// voegt locaties toe - neemt locaties weg uit de lijst
function storeposition() {
    if (calc < points) {
        p.push(createVector(x, y));
        calc += 1;
    } else {
        p.splice(0, 1);
        calc -= 1;
    }
}

function draw() {
    background(0, 140, 230);
    mover();
    checkedges(x, y);
    storeposition();
    for (let i = 0; i < p.length; i++) {
        let pp = p[i];
        let s = p.length - i;
        let ss = i * s * sin(frameCount / 20.0) * 0.2;
        pp.y += 1.0 * sin(frameCount / 10.0 + i / 15.0);
        fill(abs(ss) * 10.0, 183, 0);
        ellipse(pp.x, pp.y, ss, ss);
    }
}
