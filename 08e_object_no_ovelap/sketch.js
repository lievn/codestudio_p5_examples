let thingies = [];
let images = [];
let w = 60;
let h = 60;

function preload() {
    for (let i = 0; i < 10; i++) {
        let im = loadImage("files/export-" + i + ".png");
        images.push(im);
    }
}

function setup() {
    createCanvas(400, 400);
    ellipseMode(CORNER);
    for (let i = 0; i < 5; i++) {
        thingies.push({
            x: width / 2 + random(-5, 5),
            y: height / 2 + random(-5, 5),
            mx: 0,
            my: 0,
            beeld: images[int(random(images.length))],
        });
    }
    imageMode(CENTER);
}

function move(t, t2) {
    if (t2.x < t.x) {
        t.mx = random(5);
    }
    if (t2.x > t.x) {
        t.mx = -random(5);
    }
    if (t2.y < t.y) {
        t.my = random(5);
    }
    if (t2.y > t.y) {
        t.my = -random(5);
    }
    if (t2.x == t.x) {
        t.mx = 0;
    }
    if (t2.y == t.y) {
        t.my = 0;
    }
    t.x += t.mx;
    t.y += t.my;
}

function draw() {
    background(2, 76, 104);
    translate(0, 0);
    for (t of thingies) {
        for (t2 of thingies) {
            if (t != t2 && check(t2.x, t2.y, t.x, t.y, h, w)) {
                move(t, t2);
            }
        }
        image(t.beeld, t.x, t.y, w, h);
    }
}

function mousePressed() {
    const nt = {
        x: mouseX,
        y: mouseY,
        mx: 0,
        my: 0,
        beeld: images[int(random(images.length))],
    };
    thingies.push(nt);
}

function check(xx, yy, x, y, w, h) {
    if (y < yy - h || y > yy + h) {
        return false;
    }
    if (x < xx - w || x > xx + w) {
        return false;
    }
    return true;
}
