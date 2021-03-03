///* // car object stap 2

cars = [];
images = [];

function preload() {
    for (var i = 0; i < 9; i++) {
        var im = loadImage("files/export-" + i + ".png");
        images.push(im);
    }

}

function setup() {
    createCanvas(400, 400);
    ellipseMode(CORNER);
    for (var i = 0; i < 20; i++) {
        cars.push(new Car(random(width), 50 + random(height - 100)));
    }
}

function draw() {
    background(0, 140, 230);
    translate(0, 0);
    for (var i = 0; i < cars.length; i++) {
        var c = cars[i];
        c.draw();
    }
}

var Car = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.sx = -2 + random(4);
    this.select = int(random(images.length));
    this.beeld = images[this.select];
    this.w = this.beeld.width * 1.5;
};


Car.prototype.drive = function () {
    this.x += this.sx;
    if (this.x > width) {
        this.x = -this.w;
    }
    if (this.x < -this.w) {
        this.x = width;
    }
};

Car.prototype.draw = function () {
    this.drive();
    image(this.beeld, this.x, this.y, this.w, this.beeld.height * 1.5);
};

//*/
