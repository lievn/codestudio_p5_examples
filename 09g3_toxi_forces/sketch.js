///* // physics - toxi clibs.

let capture;
let seg = 10;
let VerletPhysics2D = window.toxi.physics2d.VerletPhysics2D,
    VerletParticle2D = window.toxi.physics2d.VerletParticle2D,
    GravityBehavior = window.toxi.physics2d.behaviors.GravityBehavior,
    AttractionBehavior = window.toxi.physics2d.behaviors.AttractionBehavior,
    Vec2D = window.toxi.geom.Vec2D,
    Rect = window.toxi.geom.Rect;

let physics;
let NUM_PARTICLES = 150;
let count = 0;
let attract = -1;

function setup() {
    createCanvas(400, 400);
    physics = new VerletPhysics2D();
    physics.setDrag(0.05);
    physics.setWorldBounds(new Rect(0, 0, width, height));

    for (let i = 0; i < NUM_PARTICLES; i++) {
        let p = new VerletParticle2D(
            Vec2D.randomVector()
                .scale(5)
                .addSelf(width / 2, 100)
        );
        physics.addParticle(p);
        let ab = new AttractionBehavior(p, 40, -2.0, 0.01);
        physics.addBehavior(ab);
    }
}

function draw() {
    background(2, 76, 104);
    fill(255, 44, 0);
    stroke(255, 180, 0, 100);

    balPos = new Vec2D(-200 + ((frameCount * 3) % (width * 2)), 200);
    balAttractor = new AttractionBehavior(balPos, 150, attract * 15.0, 0.02);
    physics.addBehavior(balAttractor);
    physics.update();

    for (p of physics.particles) {
        for (p2 of physics.particles) {
            let d = dist(p.x, p.y, p2.x, p2.y);
            if (p != p2 && d < 35) {
                line(p.x, p.y, p2.x, p2.y);
            }
        }
        ellipse(p.x, p.y, 5, 5);
    }
    physics.removeBehavior(balAttractor);
    noFill();
    ellipse(balPos.x, balPos.y, 200, 200);
}

function mousePressed() {
    count++;
    if (count % 2 == 0) {
        attract = -1;
    } else {
        attract = 1;
    }
}

//*/
