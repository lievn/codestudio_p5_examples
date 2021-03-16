function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(2, 76, 104);

    // For testing: redefine built-int functions for second/minute/hour
    // let second = () => (mouseY / height) * 60;
    // let minute = () => 30;
    // let hour = () => 6;

    // Calculates the fraction (value between 0.0-1.0) of the millis/seconds/minutes/hours.
    const millisFraction = millis() / 1000;
    const secondsFraction = second() / 60;
    const minutesFraction = (minute() + secondsFraction) / 60;
    const hoursFraction = (hour() + minutesFraction) / 12;

    // Calculate the angles of the hands of the clock.
    // Note that 0 degrees in p5js points downwards, so we subtract 180 to make them point up.
    const hoursAngle = hoursFraction * 360 - 180;
    const minutesAngle = minutesFraction * 360 - 180;
    const secondsAngle = secondsFraction * 360 - 180;
    const millisAngle = millisFraction * 360 - 180;

    // When we're drawing angles, make sure we're using degrees, not radians.
    // https://p5js.org/reference/#/p5/angleMode
    angleMode(DEGREES);

    // Draw the clock background
    noFill();
    stroke(255);
    ellipse(width / 2, height / 2, 40, 40);
    ellipse(width / 2, height / 2, 200, 200);

    // Hours
    push();
    translate(width / 2, height / 2);
    rotate(hoursAngle);
    stroke(255, 44, 0);
    strokeWeight(4);
    line(0, 20, 0, 70);
    pop();

    // Minutes
    push();
    translate(width / 2, height / 2);
    rotate(minutesAngle);
    stroke(255, 182, 0);
    strokeWeight(3);
    line(0, 20, 0, 100);
    pop();

    // Seconds
    push();
    translate(width / 2, height / 2);
    rotate(secondsAngle);
    stroke(0, 140, 230);
    strokeWeight(1.5);
    line(0, 20, 0, 100);
    pop();

    // Milliseconds
    push();
    translate(width / 2, height / 2);
    rotate(millisAngle);
    strokeWeight(3);
    stroke(7, 118, 160);
    line(0, 0, 0, 16);
    pop();
}
