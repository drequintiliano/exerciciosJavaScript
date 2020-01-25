const pessoas = [
    { altura: 1.9, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.75, sexo: 'M' },
    { altura: 1.8, sexo: 'M' },
    { altura: 1.55, sexo: 'M' },
    { altura: 1.45, sexo: 'F' },
    { altura: 1.35, sexo: 'F' },
    { altura: 1.55, sexo: 'F' },
    { altura: 1.8, sexo: 'F' },
    { altura: 1.98, sexo: 'M' },
    { altura: 1.66, sexo: 'M' },
    { altura: 1.69, sexo: 'M' },
    { altura: 1.51, sexo: 'F' },
    { altura: 1.3, sexo: 'F' },
    { altura: 1.49, sexo: 'F' },
    { altura: 1.78, sexo: 'F' },
]

//maior e menor altura do array
const maiorAltura = pessoas.map(a => a.altura).reduce(function(a, b) { return Math.max(a, b) })
const max = Math.max(...pessoas.map(a => a.altura)) //outra forma de fazer
const menorAltura = pessoas.map(a => a.altura).reduce(function(a, b) { return Math.min(a, b) })
const min = Math.min(...pessoas.map(a => a.altura)) //outra forma de fazer
console.log(max, min);

//media de altura das mulheres
const selecionaMulher = a => a.sexo === 'F'
const qtdeMulheres = pessoas.filter(selecionaMulher).length
const somaMulheres = pessoas.filter(selecionaMulher).map(a => a.altura).reduce(function(a, b) { return (a + b) })
const mediaMulheres = somaMulheres / qtdeMulheres
console.log(mediaMulheres.toFixed(2));

//numero de homens
const selecionaHomem = a => a.sexo === 'M'
const qtdeHomens = pessoas.filter(selecionaHomem).length
console.log(qtdeHomens);