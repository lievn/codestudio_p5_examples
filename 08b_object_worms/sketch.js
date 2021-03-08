///* // worm object

let group = [];
let col = [[7, 118, 160], [255, 182, 0], [255, 44, 0], [2, 76, 104], [0, 140, 230]];


function setup() {
	createCanvas(400, 400);
	for (let i = 0; i < 10; i++) {
		group.push(new Worm(width / 2, height / 2));
	}
}

function draw() {
	background(0, 140, 230);
	for (let i = 0; i < group.length; i++) {
		var w = group[i];
		w.draw();
	}
}

class Worm {
	constructor(xx, yy) {
		this.points = 10 + int(random(40));
		this.calc = 0;
		this.numx = [];
		this.numy = [];
		this.x = xx;
		this.y = yy;
		this.xs = random(-2, 2);
		this.ys = random(-2, 2);
		this.count = int(random(col.length));
		this.ofset = random(360);
	}

	mover() {
		this.x += this.xs;
		this.y += this.ys;
	}

	checkedges(x, y) {
		if (this.x < 0 || this.x > width) {
			this.xs = -this.xs;
		}
		if (this.y < 0 || this.y > height) {
			this.ys = -this.ys;
		}
	};

	// voegt locaties toe - neemt locaties weg uit de lijst
	storeposition() {
		if (this.calc < this.points) {
			this.numx.push(this.x);
			this.numy.push(this.y);
			this.calc += 1;
		} else {
			this.numx.splice(0, 1);
			this.numy.splice(0, 1);
			this.calc -= 1;
		}
	};

	draw() {
		this.mover();
		this.checkedges(this.x, this.y);
		this.storeposition();
		fill(col[this.count][0], col[this.count][1], col[this.count][2]);
		for (let i = 0; i < this.numx.length; i++) {
			let xx = this.numx[i];
			let yy = this.numy[i];
			let s = this.numx.length - i;
			let ss = i * s * sin(this.ofset + frameCount / 20.0) * .1;
			yy += 10.0 * sin(this.ofset + frameCount / 10.0 + i / 5.0);
			ellipse(xx, yy, ss, ss);
		}
	}
}

//*/
