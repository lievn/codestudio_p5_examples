// Bird data
let bird_x, bird_y;
let bird_vx, bird_vy;
let bird_ax, bird_ay;

// Pipe data
let pipe_x, pipe_y, pipe_width, pipe_height;

// Score
let score = 0;
let highscore = 0;
let playing = false;

function setup() {
    createCanvas(400, 400);
    reset();
    playing = false;

    // noStroke();
}

function reset() {
    score = 0;
    bird_x = width / 4;
    bird_y = height / 2;
    bird_vx = 2.0;
    bird_vy = 0.0;
    bird_ay = 0.0;
    // The pipe starts just offscreen
    pipe_x = width;
    pipe_y = 100;
    pipe_width = 30;
    pipe_height = 120;
    playing = true;
}

function draw() {
    background(0, 140, 230);

    if (playing) {
        // Bird Movement

        // Calculate acceleration
        bird_ay += 0.4; // Add gravity
        // Add acceleration to velocity
        bird_vy += bird_ay;
        // Add velocity to location
        bird_y += bird_vy;
        // Reset acceleration
        bird_ay = 0;

        // Pipe Movement
        // This is actually fake,
        // we move the pipe towards the bird, not the other way around.
        pipe_x -= bird_vx;
        if (pipe_x < 0 && playing) {
            pipe_x = width;
            pipe_y = 100 + random(height / 2);
            pipe_height = random(50, 150);
        }
    }

    // Drawing

    // Draw the bird
    stroke(255, 205, 0);
    fill(255, 205, 0);
    noFill();
    rect(bird_x, bird_y, 10, 10);

    // Draw the pipe
    // This consists of two segments: one from the top of the screen to pipe_y,
    // one from pipe_y + pipe_height to the bottom of the screen.

    fill(2, 76, 104);
    stroke(255, 205, 0);
    rect(pipe_x, 0, pipe_width, pipe_height);
    rect(pipe_x, pipe_y + pipe_height, pipe_width, height);

    // Check for game over / scoring

    let gameOver = false;
    // Check that our X position matches: are we at the same column than the pipe?
    if (bird_x >= pipe_x && bird_x <= pipe_x + pipe_width) {
        if (bird_y < pipe_y || bird_y > pipe_y + pipe_height) {
            gameOver = true;
        }
    }
    if (bird_y > height) {
        gameOver = true;
    }

    if (!gameOver && playing) {
        // fill(255, 205, 0);
        score += 1;
    } else {
        playing = false;
        if (score > highscore) {
            highscore = score;
        }
    }
    // if (x > px && y > py && y < py + ph && x < px + vx + 1) {
    //     fill(255, 205, 0);
    //     score += 1;
    // } else if (x > px && (y > py + ph || y < py) && x < px + vx + 1) {
    //     if (score > highscore) {
    //         highscore = score;
    //     }
    //     noFill();
    //     score = 0;
    //     playing = false;
    // } else {
    //     noFill();
    // }
    // rect(px, py, 30, ph);

    fill(255, 205, 0);
    textAlign(LEFT);
    text("Score: " + score, 20, 20);
    textAlign(RIGHT);
    text("High Score: " + highscore, width - 20, 20);

    if (!playing) {
        textAlign(CENTER);
        text("Game Over", width / 2, height / 2);
        text("Click to play", width / 2, height / 2 + 20);
    }
}

function mousePressed() {
    // y -= 50;
    bird_ay -= 10;
    if (!playing) {
        reset();
    }
}
