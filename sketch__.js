let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

//1
let result = words.filter((word) => word.length > 6);

//2
function funcionConNombre(word) {
	return word.length > 6;
}
let result = words.filter(funcionConNombre);

//3
let result = words.filter(function (word) {
	return word.length > 6;
});

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
