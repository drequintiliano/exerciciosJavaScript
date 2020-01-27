const pessoas = [
    { idade: 18, peso: 86.5, sexo: 'M'},
    { idade: 21, peso: 52.5, sexo: 'F'},
    { idade: 21, peso: 66.5, sexo: 'F'},
    { idade: 19, peso: 71, sexo: 'F'},
    { idade: 12, peso: 37.7, sexo: 'F'},
    { idade: 60, peso: 86.4, sexo: 'F'},
    { idade: 19, peso: 72, sexo: 'M'},
    { idade: 40, peso: 67.7, sexo: 'M'},
    { idade: 30, peso: 102.2, sexo: 'M'},
    { idade: 18, peso: 55.1, sexo: 'F'},
]

const mulheres = a => a.sexo == 'F'
const homens = a => a.sexo == 'M'
const qtdeMulheres = pessoas.filter(mulheres).length
const qtdeHomens = pessoas.filter(homens).length

//total de mulheres e homens
console.log(qtdeMulheres);
console.log(qtdeHomens);

// media das idades dos homens
const somaIdadeHomens = pessoas.filter(homens).map(a => a.idade).reduce((a, b) => a + b)
const mediaIdadeHomens = somaIdadeHomens / qtdeHomens
console.log(mediaIdadeHomens.toFixed(2));

//media dos pesos das mulheres
const somaPesoMulheres = pessoas.filter(mulheres).map(a => a.peso).reduce((a, b) => a + b)
const mediaPesoMulheres = somaPesoMulheres / qtdeMulheres
console.log(mediaPesoMulheres.toFixed(2));
