///* // iteration - clock in horizontal blocks

let seg1, seg2;

function setup() {
    createCanvas(400, 400);
    seg1 = width / 60.0; // aantal seconden/minuut en minuten/uur
    seg2 = width / 24.0; // aantal uren in een dag
}

function draw() {
    background(2, 76, 104);
    translate(0, 150);

    let s = second(); // waardes van 0 - 59
    let m = minute(); // Waardes van 0 - 59
    let h = hour(); // Waardes van 0 - 23

    // reeks rechthoeken om seconden en minuten op te plaatsen
    for (let i = 0; i < 60; i++) {
        fill(255, 182, 0);

        rect(i * seg1, 30, seg1 - 2, 5);
        if (i % 5 == 0) {
            fill(255);
            text(i, i * seg1, 30);
        }
    }

    // reeks rechthoeken om uren op te plaatsen
    for (let i = 0; i < 24; i++) {
        fill(255, 182, 0);

        rect(i * seg2, 65, seg2 - 2, 5);
        if (i % 2 == 0) {
            fill(255);
            text(i, i * seg2, 85);
        }
    }

    fill(0, 140, 230);
    line(s * seg1, 0, s * seg1, 33);
    text("second", s * seg1 + 5, 10);
    line(m * seg1, 33, m * seg1, 66);
    text("minute", m * seg1 + 5, 55);
    line(h * seg2, 66, h * seg2, 100);
    text("hour", h * seg2 + 5, 100);
}

//*/
