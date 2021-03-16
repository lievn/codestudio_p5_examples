let imgs = [];
let count = 0;

function preload() {
    for (let i = 0; i < 5; i++) {
        let img = loadImage("files/Grey_horse" + (i + 1) + ".jpg");
        imgs.push(img);
    }
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
}

function draw() {
    background(0, 140, 230);

    if (frameCount % 10 == 0) {
        count++;
    }
    fill(255, 182, 0);
    rect(0, 100, width, 200);
    tint(255, 182, 0);
    image(imgs[count % 5], width / 2, height / 2, 200, 150);
}
