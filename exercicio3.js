const numeros = [ 23, 54, 3, 2, 67, 98, 334, 157, 2001, 1998]

const par = num => num % 2 === 0 
const impar = num => num % 2 !== 0 

//somar apenas numeros pares
const somaPares = numeros.filter(par).reduce((a, b) => a + b)
console.log(somaPares);

//somar apenas numeros primos
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) if (number % start++ < 1) return false;
    return number > 1;
}
const primo = num => isPrime(num)
const somaPrimos = numeros.filter(primo).reduce((a, b) => a + b)
console.log(somaPrimos);



