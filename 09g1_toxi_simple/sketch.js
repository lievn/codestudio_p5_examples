///* // physics - toxi clibs.

let capture;
let seg = 10;
let VerletPhysics2D = window.toxi.physics2d.VerletPhysics2D,
	VerletParticle2D = window.toxi.physics2d.VerletParticle2D,
	AttractionBehavior = window.toxi.physics2d.behaviors.AttractionBehavior,
	GravityBehavior = window.toxi.physics2d.behaviors.GravityBehavior,
	Vec2D = window.toxi.geom.Vec2D,
	Rect = window.toxi.geom.Rect;

let NUM_PARTICLES = 250;

let physics;
let mouseAttractor;

let mousePos;

function setup() {
	createCanvas(400, 400);
	physics = new VerletPhysics2D();
	physics.setDrag(0.05);
	physics.setWorldBounds(new Rect(0, 0, width, height));
	physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.15)));
}

function addParticle() {
	let randLoc = Vec2D.randomVector().scale(5).addSelf(width / 2, 0);
	let p = new VerletParticle2D(randLoc);
	physics.addParticle(p);
	physics.addBehavior(new AttractionBehavior(p, 30, -1.2, 0.01));
}

function draw() {
	background(255, 44, 0);
	noStroke();
	fill(255, 183, 0);
	if (physics.particles.length < NUM_PARTICLES) {
		addParticle();
	}
	physics.update();
	for (p of physics.particles) {
		ellipse(p.x, p.y, 20, 20);
	}

}

function mousePressed() {
	addParticle();
	mousePos = new Vec2D(mouseX, mouseY);
	mouseAttractor = new AttractionBehavior(mousePos, 250, 0.9);
	physics.addBehavior(mouseAttractor);
}

function mouseDragged() {
	mousePos.set(mouseX, mouseY);
}

function mouseReleased() {
	physics.removeBehavior(mouseAttractor);
}


//*/
