let posX, posY;
let velX, velY;
let diam;
let rad;
let fonditoDeColorin;

function setup() {
	createCanvas(windowWidth, windowHeight);
	fonditoDeColorin = color(random(100, 255), random(100), random(255));
	rad = ceil(random(50, 100));
	diam = rad * 2;
	// console.log(diam);
	posX = random(rad, width - rad);
	posY = random(rad, height - rad);

	velX = random(-10, 10);
	velY = random(-10, 10);
}

function draw() {
	background(fonditoDeColorin);
	fill(255);
	noStroke();

	posX += velX;
	posY += velY;

	if (posX > width - rad || posX < rad) {
		velX *= -1;
		fonditoDeColorin = color(random(100, 255), random(100), random(255));
	}
	if (posY > height - rad || posY < rad) {
		velY *= -1;
		fonditoDeColorin = color(random(100, 255), random(100), random(255));
	}
	circle(posX, posY, diam);
}
