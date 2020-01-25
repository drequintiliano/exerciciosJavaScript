const cartoes = [
    { id: 2, bandeira: 'Mastercard (2017)' },
    { id: 3, bandeira: 'American Express, Diners' },
    { id: 4, bandeira: 'Visa' },
    { id: 5, bandeira: 'Mastercard, Elo' },
    { id: 6, bandeira: 'Elo, Discover' }
]

let cartao = '5300232309094343'

const identificaCartao = c => c.id === parseInt(cartao.substr(0, 1))
const bandeira = b => b.bandeira
const validandoCartao = cartoes.filter(identificaCartao).length === 0 ? '' : cartao
const resultado = validandoCartao > 0 ? cartoes.filter(identificaCartao).reduce(bandeira) : validandoCartao

console.log(resultado.bandeira || 'Digito(s) Inválido(s)');


//console.log('exemplo: ' +  card.substr(0, 1)); // exemplo para pegar 1º digito de uma string