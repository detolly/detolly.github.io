function setup() {
	let button = createSlider();
	let canvas = createCanvas(innerWidth, innerHeight);
	canvas.position(0,0);
	select('#defaultCanvas0').style("position", "absolute");
	select('#defaultCanvas0').style("draggable", "false");
}

function draw() {
	if (frameCount > 500) noLoop();
	for(let i = 0; i < 1000; i++) {
		fill(color(random(255), random(255), random(255)));
		noStroke();
		ellipse(random(width), random(height), random(3)+1);
	}
}