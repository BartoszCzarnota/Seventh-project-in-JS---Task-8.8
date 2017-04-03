// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
	animal = ('Zielone słonie').toUpperCase();
	//elephantsUpperCased = animal.toUpperCase();
	animalReplace = text.replace('Papugi', animal)
	//halfSentence = animalReplace.slice(0, 45);

console.log(text);
//console.log(halfSentence);
console.log(animalReplace.substr(0, animalReplace.length/2));
