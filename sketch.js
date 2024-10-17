let particulas = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(20);
	let nuevaParticula = new Particula(mouseX, mouseY);
	particulas.push(nuevaParticula);

	for (let i = 0; i < particulas.length; i++) {
		particulas[i].update();
		particulas[i].display();
	}

	/**
	 * Esta es una forma de borrar las partículas muertas utilizando
	 * un for loop que navega todas las partículas y se pergunta por
	 * la varible boleana estaViva.
	 *
	 * Utiliza la función slipice para borrar la partícula específica
	 * mediante su Indice
	 *
	 */

	// for (let i = 0; i < particulas.length; i++) {
	// 	if (!particulas[i].estaViva) {
	// 		particulas.splice(i, 1);
	// 	}
	// }

	/**
	 * Esta es la forma moderna de resolverlo
	 */

	particulas = particulas.filter((pelota) => pelota.estaViva);

	console.log(particulas.length);
}
