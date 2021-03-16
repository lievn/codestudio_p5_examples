// Create a trail that follows the mouse
// This creates a list with the last positions and draws them behind the mouse

let xpos = [];
let ypos = [];
let maxAmount = 30;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(244, 183, 0);

    // Add the current mouse position to the end of the list.
    xpos.push(mouseX);
    ypos.push(mouseY);

    // If needed, remove items from the beginning of the list.
    while (xpos.length > maxAmount) {
        xpos.shift();
        ypos.shift();
    }

    // Draw the items in the list
    for (let i = 0; i < xpos.length; i++) {
        noStroke();
        fill(0, 140, 230, 255 - i * 5);
        circle(xpos[i], ypos[i], i * 3);
    }
}
