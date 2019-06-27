let blocks = [];

let w;
let margin = 100;
let columns = 10;

let currentSelected;

function setup() {
	createCanvas(300, 600);
	w = width/columns;
	frameRate(60);
	let vecs = [
			createVector(1, 0),
			createVector(1, 1),
			createVector(1, 2),
			createVector(0, 2)
		];
	let testBlock = new Block(vecs);
	currentSelected = testBlock;
	blocks.push(currentSelected);
}

function keyPressed() {
	if (keyCode == 68 || keyCode == 100) {
		currentSelected.move(true);
	}
	else if (keyCode == 65 || keyCode == 97) {
		currentSelected.move(false);
	}
}

function draw() {
	if (frameCount % 20 == 0) {
		for(let i = 0; i < blocks.length; i++) {
			blocks[i].update(blocks);
		}
	}
	background(0);
	drawGrid();
}

function drawGrid() {
	for(let i = 0; i < width/w; i++) {
		for(let j = 0; j < height/w; j++) {
			stroke(255);
			fill(0);
			rect(i*w, j*w, w, w);
		}
	}
	for(let i = 0; i < blocks.length; i++) {
		blocks[i].show();
	}
}


class Block {
	constructor(vectors) {
		if (vectors.length > 4) {
			console.error("Too many vectors.");
		}
		this.vectors = vectors;
		this.x = 3;
		this.y = 0;
		
		currentSelected = this;
	}

	move(boo) {
		if (boo && this.x < columns-1)
			this.x++;
		else if (!boo && this.x > 0)
			this.x--;
	}
	
	update(blockArray) {
		this.y++;
		for(let i = 0; i < blockArray.length; i++) {
			
		}
	}
	
	show() {
		for(let i = 0; i < this.vectors.length; i++) {
			fill(255);
			stroke(0);
			rect(this.vectors[i].x*w+this.x*w, this.vectors[i].y*w+this.y*w, w, w);
		}
	}
}