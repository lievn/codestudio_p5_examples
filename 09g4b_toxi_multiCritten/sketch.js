let VerletPhysics2D = window.toxi.physics2d.VerletPhysics2D;
let VerletParticle2D = window.toxi.physics2d.VerletParticle2D;
let VerletSpring2D = window.toxi.physics2d.VerletSpring2D;
let GravityBehavior = window.toxi.physics2d.behaviors.GravityBehavior;
let AttractionBehavior = window.toxi.physics2d.behaviors.AttractionBehavior;
let Vec2D = window.toxi.geom.Vec2D;
let Rect = window.toxi.geom.Rect;

let physics;
let selectedParticle;
let SNAP_DIST = 20 * 20;
let bluecolors = [
    [7, 118, 160],
    [2, 76, 104],
];
let redcolors = [
    [255, 182, 0],
    [255, 44, 0],
];

let crittenList = [];

function setup() {
	createCanvas(400, 400);
	physics = new VerletPhysics2D();
	physics.setDrag(0.05);
	physics.setWorldBounds(new Rect(0, 0, width, height));
	physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.72)));
	let crit = new Critten(width / 2, 50);
	crittenList.push(crit);
}

function angle(x, y, x1, y1) {
	return degrees(atan2(y1 - y, x1 - x));
}

function draw() {
	background(7, 118, 160);
	physics.update();
	text("press any key to create new critten at mouselocation", 20, 20);
	text("drag mouse to play with them", 20, 40);
	for (let i = 0; i < crittenList.length; i++) {
		let crit = crittenList[i];
		crit.draw();
	}
}

function mousePressed() {
	let mousePos = new Vec2D(mouseX, mouseY);
	for (let i = 1; i < physics.particles.length - 1; i++) {
		let p = physics.particles[i];
		if (mousePos.distanceToSquared(p) < SNAP_DIST) {
			selectedParticle = p;
			selectedParticle.lock();
			break;
		}
	}
}

function mouseDragged() {
	if (selectedParticle != null) {
		selectedParticle.set(mouseX, mouseY);
	}
}

function mouseReleased() {
	if (selectedParticle != null) {
		selectedParticle.unlock();
		selectedParticle = null;
	}
}

function keyPressed() {
	let crit = new Critten(mouseX, mouseY);
	crittenList.push(crit);
}

/// The critten object.

function Critten(x, y) {
	this.pointAmount = int(10 + random(50));
	this.tx = x;
	this.ty = y;
	this.cparts = [];
	this.bodySprings = [];
	this.eyeSprings = [];
	this.eyes = [];
	this.eyeAmount = 1 + int(this.pointAmount / 20);
	this.wiggleFactor = 2 + random(10);
	this.hairLength = 10;
	this.radius = 100;
	this.modelf = 0.02;
	this.strengthF = 50.0;
	this.hairLength = 10;
	//centroid
	this.c = new VerletParticle2D(this.tx, this.ty, 1);
	this.fillc = bluecolors[int(random(bluecolors.length))];
	this.strokec = redcolors[int(random(redcolors.length))];

	//eyes locations + bodySprings to centroid
	for (let i = 0; i < this.eyeAmount; i++) {
		let cd = new VerletParticle2D(this.tx + random(20.0), this.ty + random(20.0), 0.1);
		this.eyes.push(cd);
		physics.addBehavior(new AttractionBehavior(cd, 30, -10, 0.005));
		physics.addParticle(cd);
	}
	for (let i = 0; i < this.eyes.length; i++) {
		let e = this.eyes[i];
		let s = new VerletSpring2D(this.c, e, 1.0, this.modelf / this.strengthF);
		physics.addSpring(s);
		this.eyeSprings.push(s);
	}

	// particles for body
	for (let i = 0; i < this.pointAmount; i++) {
		let theta = map(i, 0, this.pointAmount, 0, TWO_PI);
		let spx = this.tx + this.radius * sin(theta);
		let spy = this.ty + this.radius * cos(theta);
		let p = new VerletParticle2D(spx, spy, 1);
		this.cparts.push(p);
		physics.addBehavior(new AttractionBehavior(p, 30, -5, 0.005));
		physics.addParticle(p);

		//connect them to centroid
		if (i % 1 == 0) {
			let s = new VerletSpring2D(this.c, p, 1.0, this.modelf / this.strengthF);
			physics.addSpring(s);
		}

		// attach eyes to some of them
		if (i % 10 == 0) {
			let t = this.eyes[int(random(this.eyes.length))];
			let s = new VerletSpring2D(t, p, -1.0, this.modelf / this.strengthF);
			physics.addSpring(s);
			this.eyeSprings.push(s);
		}

		//connect to neighbour.
		if (i > 0) {
			let q = this.cparts[i - 1];
			let s = new VerletSpring2D(p, q, 1, this.modelf);
			physics.addSpring(s);
		}
	}
	//close start end point
	let p = this.cparts[0];
	let q = this.cparts[this.pointAmount - 1];
	let s = new VerletSpring2D(p, q, 20, this.modelf);
	physics.addSpring(s);

	// xtra connections for strength
	for (let i = 0; i < this.cparts.length; i++) {
		let p1 = this.cparts[i];
		let p2 = this.cparts[int((i + this.wiggleFactor) % this.cparts.length)];
		let s = new VerletSpring2D(p1, p2, -1.0, this.modelf / this.strengthF);
		this.bodySprings.push(s);
		physics.addSpring(s);
	}

	this.draw = function () {
		// draw points/
		for (let i = 0; i < this.cparts.length; i++) {
			let p = this.cparts[i];
			ellipse(p.x, p.y, 5, 5);
		}

		//draw little 'hairs' on contour
		stroke(this.strokec);
		for (let i = 0; i < this.cparts.length; i++) {
			let p = this.cparts[i];
			let an = angle(this.c.x, this.c.y, p.x, p.y);
			push();
			translate(p.x, p.y);
			rotate(radians(an));
			line(0, 0, this.hairLength, 0);
			pop();
		}

		// draw the shape itself
		fill(this.fillc);
		stroke(0);
		beginShape();
		for (let i = 0; i < this.cparts.length; i++) {
			let p = this.cparts[i];
			curveVertex(p.x, p.y);
		}
		endShape(CLOSE);

		//draw body spring lines.
		strokeWeight(0.5);
		for (let i = 0; i < this.bodySprings.length; i++) {
			let s = this.bodySprings[i];
			stroke(255, 80);
			line(s.a.x, s.a.y, s.b.x, s.b.y);
		}

		//draw eye spring lines.
		strokeWeight(10.0);
		for (let i = 0; i < this.eyeSprings.length; i++) {
			let s = this.eyeSprings[i];
			//stroke(2, 76, 104, 100);
			stroke(red(this.strokec), green(this.strokec), blue(this.strokec), 100);
			line(s.a.x, s.a.y, s.b.x, s.b.y);
		}

		//draw eyes.
		for (let i = 0; i < this.eyes.length; i++) {
			let p = this.eyes[i];
			let rad = Math.max(p.distanceTo(this.c) * 0.52, 15);
			noFill();
			stroke(255, 183, 0, 140);
			strokeWeight(5.0);
			ellipse(p.x, p.y, rad * 1.2, rad * 1.2);
			fill(255);
			stroke(0);
			strokeWeight(2.0);
			ellipse(p.x, p.y, rad, rad);
			fill(0);
			noStroke();
			ellipse(p.x, p.y, rad * 0.15, rad * 0.15);
		}
	};
}
