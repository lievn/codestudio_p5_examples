///* // physics - toxi clibs.

var capture;
var seg = 10;
var VerletPhysics2D = window.toxi.physics2d.VerletPhysics2D,
	VerletParticle2D = window.toxi.physics2d.VerletParticle2D,
	AttractionBehavior = window.toxi.physics2d.behaviors.AttractionBehavior,
	ParticleString2D = window.toxi.physics2d.ParticleString2D,
	Vec2D = window.toxi.geom.Vec2D,
	Rect = window.toxi.geom.Rect;

var physics;
var mouseAttractor;
var mousePos;
var a = 20;

function setup() {
	createCanvas(400, 400);
	physics = new VerletPhysics2D();
	physics.setDrag(0.05);
	physics.setWorldBounds(new Rect(0, 0, width, height));

	for (var i = 0; i < a; i++) {
		var s = new ParticleString2D(physics, new Vec2D(width / 2, height / 2), Vec2D.fromTheta(i * (1.0 / a) * 6.28).scaleSelf(10), 30, 1, 0.5);
		for (var m = 0; m < s.particles.length; m++) {
			var p = s.particles[m];
			var ab = new AttractionBehavior(p, 40, -5.0, 0.01)
			physics.addBehavior(ab);
		}
	}
}


function draw() {
	background(0, 140, 230);
	noStroke();
	fill(2, 76, 104);
	physics.update();
	for (var i = 0; i < physics.particles.length; i++) {
		var p = physics.particles[i];
		ellipse(p.x, p.y, 20, 20);
	}

}



//*/