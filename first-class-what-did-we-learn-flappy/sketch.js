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
}

// This resets all variables for a new game
function reset() {
    score = 0;
    bird_x = width / 4;
    bird_y = height / 2;
    bird_vx = 2.0;
    bird_vy = 0.0;
    bird_ay = 0.0;
    // The pipe starts offscreen
    pipe_x = width + 100;
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
        bird_ay += 0.3; // Add gravity
        // Add acceleration to velocity
        bird_vy += bird_ay;
        bird_vy = constrain(bird_vy, -5, 5);
        // Add velocity to location
        bird_y += bird_vy;
        // Reset acceleration
        bird_ay = 0;

        // Pipe Movement
        // This is actually fake:
        // We move the pipe towards the bird, not the other way around.
        pipe_x -= bird_vx;
        if (pipe_x < 0 && playing) {
            pipe_x = width;
            pipe_y = 100 + random(height / 2);
            pipe_height = random(70, 120);
        }
    }

    // Drawing

    // Draw the bird
    stroke(255, 205, 0);
    fill(255, 205, 0);
    noFill();
    rect(bird_x, bird_y, 10, 10);

    // Draw the pipe
    // This consists of two segments: one from the top of the screen (0) to pipe_y,
    // one from pipe_y + pipe_height to the bottom of the screen (we actually draw lower, until height).
    fill(2, 76, 104);
    stroke(255, 205, 0);
    rect(pipe_x, 0, pipe_width, pipe_y);
    rect(pipe_x, pipe_y + pipe_height, pipe_width, height);

    // Check for game over / scoring

    let gameOver = false;
    // Check that our X position matches: are we at the same column than the pipe?
    if (bird_x >= pipe_x && bird_x <= pipe_x + pipe_width) {
        if (bird_y < pipe_y || bird_y > pipe_y + pipe_height) {
            gameOver = true;
        } else if (bird_x - bird_vx <= pipe_x && bird_x > pipe_x) {
            // Did we just pass the pipe in this frame?
            score += 1;
            fill(255, 255, 255, 0.2);
            rect(0, 0, width, height);
        }
    }
    // Did we fall off the screen?
    if (bird_y > height) {
        gameOver = true;
    }

    // Show the current score and the high score.
    fill(255, 205, 0);
    textAlign(LEFT);
    text("Score: " + score, 20, 20);
    textAlign(RIGHT);
    text("High Score: " + highscore, width - 20, 20);

    // If we're game over, set playing to false and update the highscore.
    if (gameOver) {
        playing = false;
        if (score > highscore) {
            highscore = score;
        }
    }

    if (!playing) {
        textAlign(CENTER);
        text("Game Over", width / 2, height / 2);
        text("Click to play", width / 2, height / 2 + 20);
    }
}

function mousePressed() {
    bird_ay -= 20;
    if (!playing) {
        reset();
    }
}
