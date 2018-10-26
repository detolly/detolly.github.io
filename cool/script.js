let points = [];
let amount = 200;
//let speed = 1;

let theD = 150;
let lighenUp = 600;

let maxB = 140;
let bg = 15;

function setup() {
    createCanvas(innerWidth, innerHeight);
    for(let i = 0; i < amount; i++) {
        points[i] = new P(random(width), random(height), random(1)+0.5);
    }
}

//TODO: (i'm never going to do this)
// Make like a wind thing where they move with the wind
// Have the angles be not random and based on the position of others for consistency and not pileup for example

function draw() {
    background(bg);
    for(let i = 0; i < points.length; i++) { //not technically perfect because some will be updated and some won't when they're checked, but it really doesn't matter for this application.
        points[i].update();
        points[i].show();
        for(let u = points.length-1; u >= i; u--) {
            points[i].check(points[u]);
        }
    }
}

class P {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.distToMouse;
        var angle = random(TWO_PI);
        this.dir = createVector(cos(angle)*speed, sin(angle)*speed);
    }

    update() {
        if (this.x > width || this.x < 0)
            this.dir.x *= -1;
        if (this.y > height || this.y < 0)
            this.dir.y *= -1;
        this.x += this.dir.x;
        this.y += this.dir.y;
    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, 2);
    }

    check(p) {
        var distBetweenTwoPoints = sqrt(pow(p.x-this.x, 2) + pow(p.y-this.y, 2));
        var distMouse = sqrt(pow(this.x-winMouseX, 2) + pow(this.y-winMouseY, 2));
        if (distBetweenTwoPoints < theD) {
            var thing = map(distMouse, 0, lighenUp, maxB, bg);
            thing = thing < bg ? bg : thing;
            stroke(thing);
            line(this.x, this.y, p.x, p.y);
        }
    }
}