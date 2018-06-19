'use strict';

// zadanie 1
var hello = 'Hello';
var world = 'World';
function say(hello, world) {
	console.log(hello + ' ' + world);
	var concat = hello.concat(world); //concat
	console.log(concat);
}
//zadanie 2
function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	return a * b;
}
console.log(multiply(3, 5));

var multiply2 = function multiply2(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply2(3, 5));

//zadanie3
function average() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum / arguments.length;
}
console.log(average(3, 5, 8, 11));

var average2 = function average2() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (a, b) {
		return a + b;
	}) / args.length;
};
console.log(average2(3, 5, 8, 11));

//let average3 = (...args) => (let suma = args.forEach(arg => console.log(arg))) => suma/args.length;

//zadanie4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));
console.log(average2.apply(undefined, grades));

//zadanie5
var sth = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = sth[2],
    lastname = sth[4];

console.log(firstname);
console.log(lastname);
