const espectador = [
    { idade: 14, opniao: 3 },
    { idade: 25, opniao: 3 },
    { idade: 23, opniao: 2 },
    { idade: 18, opniao: 1 },
    { idade: 19, opniao: 2 },
    { idade: 77, opniao: 3 },
    { idade: 34, opniao: 2 },
    { idade: 22, opniao: 2 },
    { idade: 17, opniao: 1 },
    { idade: 21, opniao: 1 },
    { idade: 28, opniao: 2 },
    { idade: 27, opniao: 2 },
    { idade: 21, opniao: 2 },
    { idade: 17, opniao: 1 },
    { idade: 26, opniao: 3 },
]

//legenda ótimo - 3, bom - 2, regular -1

const otimo = a => a.opniao === 3
const bom = a => a.opniao === 2
const regular = a => a.opniao === 1

//media das idades das pessoas que responderam ótimo
const qtdeOtimo = espectador.filter(otimo).length
const somaIdades = espectador.filter(otimo).map(a => a.idade).reduce(function(a, b) { return (a + b) })
const mediaIdadeOtimo = somaIdades / qtdeOtimo
console.log('Media das idades das pessoas que responderam ótimo: ' + mediaIdadeOtimo.toFixed(0));

//quantidade de pessoas que responderam regular
const qtdeRegular = espectador.filter(regular).length
console.log('Quantidade das pessoas que responderam regular: ' + qtdeRegular);

//porcentagem da pessoas que responderam bom entre todos os espectadores
const qtdeBom = espectador.filter(bom).length
const qtdeArray = espectador.length
const porcentagem = (qtdeBom / qtdeArray * 100).toFixed(2)

console.log('Porcentagem da pessoas que responderam bom entre todos: ' + porcentagem + ' %');