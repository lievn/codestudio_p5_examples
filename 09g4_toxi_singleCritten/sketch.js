///* // physics - toxi clibs - single critten

let VerletPhysics2D = window.toxi.physics2d.VerletPhysics2D;
let VerletParticle2D = window.toxi.physics2d.VerletParticle2D;
let VerletSpring2D = window.toxi.physics2d.VerletSpring2D;
let GravityBehavior = window.toxi.physics2d.behaviors.GravityBehavior;
let AttractionBehavior = window.toxi.physics2d.behaviors.AttractionBehavior;
let Vec2D = window.toxi.geom.Vec2D;
let Rect = window.toxi.geom.Rect;

let physics;
let pointAmount;
let tx = 200;
let ty = 100;
let cparts = [];
let bodySprings = [];
let eyeSprings = [];
let eyes = [];
let selectedParticle;
let SNAP_DIST = 20 * 20;
let eyeAmount;
let wiggleFactor;
let hairLength = 10;

function setup() {
    createCanvas(400, 400);
    physics = new VerletPhysics2D();
    physics.setDrag(0.05);
    physics.setWorldBounds(new Rect(0, 0, width, height));
    physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.72)));
    //centroid
    c = new VerletParticle2D(tx, ty, 1);
    pointAmount = 60;
    let radius = 100;
    let modelf = 0.02;
    eyeAmount = 5;
    wiggleFactor = 8;
    strengthF = 50.0;

    //eyes locations + bodySprings to centroid
    for (let i = 0; i < eyeAmount; i++) {
        let cd = new VerletParticle2D(tx + random(20.0), ty + random(20.0), 0.1);
        eyes.push(cd);
        physics.addBehavior(new AttractionBehavior(cd, 30, -10, 0.005));
        physics.addParticle(cd);
    }
    for (let i = 0; i < eyes.length; i++) {
        let e = eyes[i];
        let s = new VerletSpring2D(c, e, 1.0, modelf / strengthF);
        physics.addSpring(s);
        eyeSprings.push(s);
    }

    // particles for body
    for (let i = 0; i < pointAmount; i++) {
        let theta = map(i, 0, pointAmount, 0, TWO_PI);
        let spx = tx + radius * sin(theta);
        let spy = ty + radius * cos(theta);
        let p = new VerletParticle2D(spx, spy, 1);
        cparts.push(p);
        physics.addBehavior(new AttractionBehavior(p, 40, -5, 0.005));
        physics.addParticle(p);

        //connect them to centroid
        if (i % 1 == 0) {
            let s = new VerletSpring2D(c, p, 1.0, modelf / strengthF);
            physics.addSpring(s);
        }

        // attach eyes to some of them
        if (i % 10 == 0) {
            let t = eyes[int(random(eyes.length))];
            let ss = new VerletSpring2D(t, p, -1.0, modelf / strengthF);
            physics.addSpring(ss);
            eyeSprings.push(ss);
        }

        //connect to neighbour.
        if (i > 0) {
            let q = cparts[i - 1];
            let s2 = new VerletSpring2D(p, q, 1, modelf);
            physics.addSpring(s2);
        }
    }
    //close start end point
    let p = cparts[0];
    let q = cparts[pointAmount - 1];
    let s = new VerletSpring2D(p, q, 20, modelf);
    physics.addSpring(s);

    // xtra connections for strength
    for (let i = 0; i < cparts.length; i++) {
        let p1 = cparts[i];
        let p2 = cparts[int((i + wiggleFactor) % cparts.length)];
        let s3 = new VerletSpring2D(p1, p2, -1.0, modelf / strengthF);
        bodySprings.push(s3);
        physics.addSpring(s3);
    }
}

function angle(x, y, x1, y1) {
    return degrees(atan2(y1 - y, x1 - x));
}

function draw() {
    background(2, 76, 104);
    physics.update();

    // draw points
    for (p of physics.particles) {
        ellipse(p.x, p.y, 5, 5);
    }

    //draw little 'hairs' on contour
    stroke(255, 182, 0);
    for (p of cparts) {
        let an = angle(c.x, c.y, p.x, p.y);
        push();
        translate(p.x, p.y);
        rotate(radians(an));
        line(0, 0, hairLength, 0);
        pop();
    }

    // draw the shape itself
    fill(7, 118, 160);
    stroke(0);
    beginShape();
    for (p of cparts) {
        curveVertex(p.x, p.y);
    }
    endShape(CLOSE);

    //draw body spring lines.
    for (s of bodySprings) {
        stroke(255, 80);
        line(s.a.x, s.a.y, s.b.x, s.b.y);
    }

    //draw eye spring lines.
    strokeWeight(10.0);
    for (s of eyeSprings) {
        stroke(255, 182, 0, 100);
        line(s.a.x, s.a.y, s.b.x, s.b.y);
    }

    //draw eyes.
    for (p of eyes) {
        let rad = Math.max(p.distanceTo(c) * 0.52, 15);
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

    // draw centroid.
    //ellipse(c.x, c.y, 10, 10);
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

//*/
