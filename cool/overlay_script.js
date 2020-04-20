const size = 50;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(51);
    let w = width/size;
    let h = height/size;
    fill(255);
    for(let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++)
            rect(i*w, j*h, w, h);
    }
}

function draw() {

}