let balls = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 100; i++) {
        const ball = {
            x: random(width),
            y: random(height),
        };
        balls.push(ball);
    }
}

function draw() {
    background(2, 76, 104);
    fill(255, 183, 0, 100);
    stroke(0, 100);
    for (const ball of balls) {
        let d = dist(mouseX, mouseY, ball.x, ball.y);
        ellipse(ball.x, ball.y, d, d);
    }
}
