///* // ball object stap 2

jumpers = [];

function setup() {
    createCanvas(400, 400);
    ellipseMode(CORNER);
    for (var i = 0; i < 100; i++) {
        jumpers.push(new Jumper(random(width), random(height / 2)));
    }
}

function draw() {
    background(2, 76, 104);
    translate(0, 0);
    for (var i = 0; i < jumpers.length; i++) {
        var j = jumpers[i];
        j.draw();
    }
}


var Jumper = function (xx, yy) {
    this.x = xx;
    this.y = height - yy;
    this.w = 20 + random(20);
    this.h = yy;
    this.amount = 0;
    this.offset = random(90);
};

Jumper.prototype.man = function () {
    push()
    translate(0, -this.amount * abs(sin(frameCount / 10.0 + this.offset)));
    rect(this.x, this.y, this.w, this.h);
    ellipse(this.x, this.y - 30, this.w, this.w);
    pop();
};

Jumper.prototype.draw = function () {
    fill(255, 180);
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.amount = 100;
        fill(255, 183, 0, 200);
    } else {
        fill(0, 140, 230);
        this.amount = 0;
    }
    this.man();

};

//*/
