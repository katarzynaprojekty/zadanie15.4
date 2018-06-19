// zadanie 1
const hello = 'Hello';
const world = 'World';
function say(hello, world) {
    console.log(`${hello} ${world}`);
	let concat = hello.concat(world); //concat
	console.log(concat);
}
//zadanie 2
function multiply(a,b=1) {
	return a*b
}
console.log(multiply(3,5));

let multiply2 = (a,b=1) => a*b;
console.log(multiply2(3,5));

//zadanie3
function average() {
	let sum = 0;
    for (var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
	return sum / arguments.length
}
console.log(average(3,5,8,11));

let average2 = (...args) => args.reduce((a, b) => a + b) / args.length; 
console.log(average2(3,5,8,11));

//let average3 = (...args) => (let suma = args.forEach(arg => console.log(arg))) => suma/args.length;

//zadanie4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));
console.log(average2(...grades));

//zadanie5
const sth = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = sth;
console.log(firstname);
console.log(lastname);
