function preload() {

}

function setup() {
    canvas = createCanvas(640, 360);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    console.log('setup complete')
}

function draw() {
    image(video, 65, 30, 510, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30, 30, 40);
    circle(30, 330, 40);
    circle(610, 30, 40);
    circle(610, 330, 40);
}

function take_snapshot() {
    save('image.png');
}