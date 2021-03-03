///* // Variables stap 1

var x; // initialiseer de variabele

function setup() {
    createCanvas(400, 400);
    x = 200; // geef de variabele een startwaarde
}

function draw() {
    background(7, 118, 160);

    // update de variabele
    //x += 5; //verhoog de waarde telkens met 5
    x += random(-4, 4); // verhoog de waarde met een random getal.
    //x = x % width;

    //gebruik de variabele.
    ellipse(x, 200, 8, 8);
    text("x: " + x, 20, 20);
}

//*/
